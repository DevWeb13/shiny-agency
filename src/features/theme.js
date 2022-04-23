import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    toggle: (state) => {
      return state === 'light' ? 'dark' : 'light';
    },
    set: (state, action) => {
      return action.payload;
    },
  },
});

const { actions, reducer } = themeSlice;
export const { toggle, set } = actions;
export default reducer;

// export const toggleTheme = createAction('theme/toggle');

// export const setTheme = createAction('theme/set');

// export default createReducer('light', (builder) => {
//   return builder
//     .addCase(toggleTheme, (state) => {
//       return state === 'light' ? 'dark' : 'light';
//     })
//     .addCase(setTheme, (state, action) => {
//       return action.payload;
//     });
// });
