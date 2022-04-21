import { selectFreelance } from '../utils/selectors';
import { createAction, createReducer } from '@reduxjs/toolkit';

// le state initial de cette feature est un objet vide
const initialState = {
  // chaque propriété de cet objet correspond à l'Id d'un freelance
  // 3: { status: 'void' }
};

// les actions contiennent l'Id du freelance en payload

const freelanceFetching = createAction('freelance/fetching', (freelanceId) => {
  return {
    payload: { freelanceId },
  };
});

const freelanceResolved = createAction(
  'freelance/resolved',
  (freelanceId, data) => {
    return {
      payload: { freelanceId, data },
    };
  }
);

const freelanceRejected = createAction(
  'freelance/rejected',
  (freelanceId, error) => {
    return {
      payload: { freelanceId, error },
    };
  }
);

export async function fetchOrUpdateFreelance(store, freelanceId) {
  const selectFreelanceById = selectFreelance(freelanceId);
  const status = selectFreelanceById(store.getState()).status;
  if (status === 'pending' || status === 'updating') {
    return;
  }
  store.dispatch(freelanceFetching(freelanceId));
  try {
    const response = await fetch(
      `http://localhost:8000/freelance?id=${freelanceId}`
    );
    const data = await response.json();
    store.dispatch(freelanceResolved(freelanceId, data));
  } catch (error) {
    store.dispatch(freelanceRejected(freelanceId, error));
  }
}

function setVoidIfUndefined(draft, freelanceId) {
  if (draft[freelanceId] === undefined) {
    draft[freelanceId] = { status: 'void' };
  }
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(freelanceFetching, (draft, action) => {
      setVoidIfUndefined(draft, action.payload.freelanceId);
      if (draft[action.payload.freelanceId].status === 'void') {
        draft[action.payload.freelanceId].status = 'pending';
        return;
      }
      if (draft[action.payload.freelanceId].status === 'rejected') {
        draft[action.payload.freelanceId].error = null;
        draft[action.payload.freelanceId].status = 'pending';
        return;
      }
      if (draft[action.payload.freelanceId].status === 'resolved') {
        draft[action.payload.freelanceId].status = 'updating';
        return;
      }
      return;
    })
    .addCase(freelanceResolved, (draft, action) => {
      setVoidIfUndefined(draft, action.payload.freelanceId);
      if (
        draft[action.payload.freelanceId].status === 'pending' ||
        draft[action.payload.freelanceId].status === 'updating'
      ) {
        draft[action.payload.freelanceId].data = action.payload.data;
        draft[action.payload.freelanceId].status = 'resolved';
        return;
      }
      return;
    })
    .addCase(freelanceRejected, (draft, action) => {
      setVoidIfUndefined(draft, action.payload.freelanceId);
      if (
        draft[action.payload.freelanceId].status === 'pending' ||
        draft[action.payload.freelanceId].status === 'updating'
      ) {
        draft[action.payload.freelanceId].error = action.payload.error;
        draft[action.payload.freelanceId].data = null;
        draft[action.payload.freelanceId].status = 'rejected';
        return;
      }
      return;
    });
});

// export default function freelanceReducer(state = initialState, action) {
//   const { type, payload } = action;
//   return produce(state, (draft) => {
//     // si l'action est une des action de freelance
//     if (
//       type === freelanceResolved.toString() ||
//       type === freelanceFetching.toString() ||
//       type === freelanceRejected.toString()
//     ) {
//       // on vérifie que le state contient la propriété correspondante à l'Id du freelance
//       if (draft[payload.freelanceId] === undefined) {
//         // si elle n'existe pas, on l'initialise avec void
//         draft[payload.freelanceId] = { status: 'void' };
//       }
//     }
//     switch (type) {
//       case freelanceFetching.toString(): {
//         if (draft[payload.freelanceId].status === 'void') {
//           draft[payload.freelanceId].status = 'pending';
//           return;
//         }
//         if (draft[payload.freelanceId].status === 'rejected') {
//           draft[payload.freelanceId].error = null;
//           draft[payload.freelanceId].status = 'pending';
//           return;
//         }
//         if (draft[payload.freelanceId].status === 'resolved') {
//           draft[payload.freelanceId].status = 'updating';
//           return;
//         }
//         return;
//       }
//       case freelanceResolved.toString(): {
//         if (
//           draft[payload.freelanceId].status === 'pending' ||
//           draft[payload.freelanceId].status === 'updating'
//         ) {
//           draft[payload.freelanceId].data = payload.data;
//           draft[payload.freelanceId].status = 'resolved';
//           return;
//         }
//         return;
//       }
//       case freelanceRejected.toString(): {
//         if (
//           draft[payload.freelanceId].status === 'pending' ||
//           draft[payload.freelanceId].status === 'updating'
//         ) {
//           draft[payload.freelanceId].error = payload.error;
//           draft[payload.freelanceId].data = null;
//           draft[payload.freelanceId].status = 'rejected';
//           return;
//         }
//         return;
//       }
//       default:
//         return;
//     }
//   });
// }