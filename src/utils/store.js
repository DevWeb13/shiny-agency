import themeReducer from '../features/theme';
import answersReducer from '../features/answers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    answers: answersReducer,
  },
});

export default store;
