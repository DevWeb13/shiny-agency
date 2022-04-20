import produce from 'immer';
import { selectFreelances } from '../utils/selectors';

const initialState = {
  status: 'void',
  data: null,
  error: null,
};

const FETCHING = 'freelances/fething';
const RESOLVED = 'freelances/resolved';
const REJECTED = 'freelances/rejected';

//actions creators
const freelancesFetching = () => ({ type: FETCHING });
const freelancesResolved = (data) => ({ type: RESOLVED, payload: data });
const freelancesRejected = (error) => ({ type: REJECTED, payload: error });

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

export default function freelancesReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCHING: {
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
      }
      case RESOLVED: {
        if (draft.status === 'updating' || draft.status === 'pending') {
          draft.status = 'resolved';
          draft.data = action.payload;
          return;
        }
        return;
      }
      case REJECTED: {
        if (draft.status === 'updating' || draft.status === 'pending') {
          draft.status = 'rejected';
          draft.error = action.payload;
          draft.data = null;
          return;
        }
        return;
      }
      default:
        return;
    }
  });
}
