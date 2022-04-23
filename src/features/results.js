import { selectResults } from '../utils/selectors';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'void',
  data: null,
  error: null,
  params: null,
};

export function fetchOrUpdataResults(params) {
  return async (dispatch, getState) => {
    const results = selectResults(getState());
    if (results.status === 'void' || results.params !== params) {
      dispatch(actions.fetching(params));
      try {
        const response = await fetch(`http://localhost:8000/results?${params}`);
        const data = await response.json();
        // @ts-ignore
        dispatch(actions.resolved(params, data));
      } catch (error) {
        // @ts-ignore
        dispatch(actions.rejected(params, error));
      }
    }
  };
}

const { actions, reducer } = createSlice({
  name: 'results',
  initialState,
  reducers: {
    fetching: {
      // @ts-ignore
      prepare: (params) => ({
        payload: { params },
      }),
      reducer: (draft, action) => {
        const params = action.payload.params;
        if ((draft.status = 'void')) {
          draft.params = params;
          draft.status = 'pending';
          return;
        }
        draft.status = 'updating';
        draft.params = params;
      },
    },
    resolved: {
      // @ts-ignore
      prepare: (params, data) => ({
        payload: { params, data },
      }),
      reducer: (draft, action) => {
        if (draft.params !== action.payload.params) {
          return;
        }
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.status = 'resolved';
          draft.data = action.payload.data;
          return;
        }
        return;
      },
    },
    rejected: {
      // @ts-ignore
      prepare: (params, data) => ({
        payload: { params, data },
      }),
      reducer: (draft, action) => {
        if (draft.params !== action.payload.params) {
          return;
        }
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.data = null;
          draft.status = 'rejected';
          draft.error = action.payload.error;
          return;
        }
      },
    },
  },
});

export default reducer;
