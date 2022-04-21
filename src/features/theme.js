import { createAction } from '@reduxjs/toolkit';

// actions creators

export const toggleTheme = createAction('theme/toggle');

export const setTheme = createAction('theme/set');

// Le reducer
// on utilise une valeur par defaut pour donner le state initial
export default function themeReducer(state = 'light', action) {
  switch (action.type) {
    case toggleTheme.toString():
      return state === 'light' ? 'dark' : 'light';
    case setTheme.toString():
      return action.payload;
    default:
      return state;
  }
}
