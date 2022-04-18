import { createStore, combineReducers } from 'redux';

const initialState = {
  theme: 'light',
  answers: {},
};

const darkModeReducer = (state = initialState.theme, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

const answersReducer = (state = initialState.answers, action) => {
  switch (action.type) {
    case 'ADD_ANSWER':
      const saveAnswers = (newAnswers) => {
        ({ ...initialState, ...newAnswers }
      }
      return {
        ...state,  ...initialState.answers, ...newAnswers ,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  // la propriété darkMode
  // est gérée par le darkModeReducer
  darkMode: darkModeReducer,
  answers: answersReducer,
});
