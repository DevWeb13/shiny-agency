import { selectFreelances } from '../utils/selectors';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  status: 'void',
  data: null,
  error: null,
};

const freelancesFetching = createAction('freelances/fetching');

const freelancesResolved = createAction('freelances/resolved', (data) => ({
  payload: data,
}));

const freelancesRejected = createAction('freelances/rejected', (error) => ({
  payload: error,
}));

export async function fetchOrUpdateFreelances(store) {
  const status = selectFreelances(store.getState()).status;
  if (status === 'pending' || status === 'updating') {
    return;
  }
  store.dispatch(freelancesFetching());
  try {
    const response = await fetch('http://localhost:8000/freelances');
    const data = await response.json();
    store.dispatch(freelancesResolved(data));
  } catch (error) {
    store.dispatch(freelancesRejected(error));
  }
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(freelancesFetching, (draft) => {
      if (draft.status === 'void') {
        draft.status = 'pending';
        return;
      }
      if (draft.status === 'rejected') {
        draft.status = 'pending';
        draft.error = null;
        return;
      }
      if (draft.status === 'resolved') {
        draft.status = 'updating';
        return;
      }
      return;
    })
    .addCase(freelancesResolved, (draft, action) => {
      if (draft.status === 'updating' || draft.status === 'pending') {
        draft.status = 'resolved';
        draft.data = action.payload;
        return;
      }
      return;
    })
    .addCase(freelancesRejected, (draft, action) => {
      if (draft.status === 'updating' || draft.status === 'pending') {
        draft.status = 'rejected';
        draft.error = action.payload;
        draft.data = null;
        return;
      }
      return;
    });
});

// export default function freelancesReducer(state = initialState, action) {
//   return produce(state, (draft) => {
//     switch (action.type) {
//       case FETCHING: {
//         if (draft.status === 'void') {
//           draft.status = 'pending';
//           return;
//         }
//         if (draft.status === 'rejected') {
//           draft.status = 'pending';
//           draft.error = null;
//           return;
//         }
//         if (draft.status === 'resolved') {
//           draft.status = 'updating';
//           return;
//         }
//         return;
//       }
//       case RESOLVED: {
//         if (draft.status === 'updating' || draft.status === 'pending') {
//           draft.status = 'resolved';
//           draft.data = action.payload;
//           return;
//         }
//         return;
//       }
//       case REJECTED: {
//         if (draft.status === 'updating' || draft.status === 'pending') {
//           draft.status = 'rejected';
//           draft.error = action.payload;
//           draft.data = null;
//           return;
//         }
//         return;
//       }
//       default:
//         return;
//     }
//   });
// }
