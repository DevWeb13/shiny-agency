import themeReducer from '../features/theme';
import freelancesReducer from '../features/freelances';
import surveyReducer from '../features/survey';
import freelanceReducer from '../features/freelance';
import resultsReducer from '../features/results';
import answersReducer from '../features/answers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    freelances: freelancesReducer,
    survey: surveyReducer,
    freelance: freelanceReducer,
    results: resultsReducer,
    answers: answersReducer,
  },
});

export default store;
