import produce from 'immer';

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
