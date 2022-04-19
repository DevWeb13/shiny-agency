// On utilise des variables pour les noms des actions pour éviter les fautes de frappe

const TOGGLE_THEME = 'theme/toggle';
const SET_THEME = 'theme/set';

// actions creators

export const toggleTheme = () => ({ type: TOGGLE_THEME });

export const setTheme = (theme = 'light') => ({
  type: SET_THEME,
  payload: theme,
});

// Le reducer
// on utilise une valeur par defaut pour donner le state initial
export default function themeReducer(state = 'light', action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === 'light' ? 'dark' : 'light';
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
}
