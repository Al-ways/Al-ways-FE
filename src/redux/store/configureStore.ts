import { configureStore } from '@reduxjs/toolkit';
import examinationReducer from '../reducers/examinationSlice';
export const store = configureStore({
  reducer: {
    examination: examinationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
