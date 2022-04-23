import { selectFreelances } from '../utils/selectors';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'void',
  data: null,
  error: null,
};

export async function fetchOrUpdateFreelances(dispatch, getState) {
  const status = selectFreelances(getState()).status;
  if (status === 'pending' || status === 'updating') {
    return;
  }
  dispatch(actions.fetching());
  try {
    const response = await fetch('http://localhost:8000/freelances');
    const data = await response.json();
    dispatch(actions.resolved(data));
  } catch (error) {
    dispatch(actions.rejected(error));
  }
}

const { actions, reducer } = createSlice({
  name: 'freelances',
  initialState,
  reducers: {
    fetching: (draft) => {
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
    },
    resolved: (draft, action) => {
      if (draft.status === 'updating' || draft.status === 'pending') {
        draft.status = 'resolved';
        draft.data = action.payload;
        return;
      }
      return;
    },
    rejected: (draft, action) => {
      if (draft.status === 'updating' || draft.status === 'pending') {
        draft.status = 'rejected';
        draft.error = action.payload;
        draft.data = null;
        return;
      }
      return;
    },
  },
});

export default reducer;
