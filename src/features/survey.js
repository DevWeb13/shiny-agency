import produce from 'immer';
import { selectSurvey } from '../utils/selectors';

const initialState = {
  status: 'void',
  data: null,
  error: null,
};

const FETCHING = 'survey/fething';
const RESOLVED = 'survey/resolved';
const REJECTED = 'survey/rejected';

//actions creators
const surveyFetching = () => ({ type: FETCHING });
const surveyResolved = (data) => ({ type: RESOLVED, payload: data });
const surveyRejected = (error) => ({ type: REJECTED, payload: error });

export async function fetchOrUpdateSurvey(store) {
  const status = selectSurvey(store.getState()).status;
  if (status === 'pending' || status === 'updating') {
    return;
  }
  store.dispatch(surveyFetching());
  try {
    const response = await fetch('http://localhost:8000/survey');
    const data = await response.json();
    store.dispatch(surveyResolved(data));
  } catch (error) {
    store.dispatch(surveyRejected(error));
  }
}

export default function surveyReducer(state = initialState, action) {
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
