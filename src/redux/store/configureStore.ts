// import { configureStore } from '@reduxjs/toolkit';
// import menuSlice from '../modules/menuSlice';

// // 초기 세팅 - configureStore: slice 들의 집합
// // const store = configureStore({
// //   reducer: {},
// // });

// const store = configureStore({
//   reducer: {
//     menu: menuSlice.reducer,
//   },
// });

// // typescript 사용으로 RootState 필요함
// export type RootState = ReturnType<typeof store.getState>;
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import examinationReducer from '../reducers/examinationSlice';
import currentLocationsSlice from '../reducers/currentLocationsSlice';
export const store = configureStore({
  reducer: {
    examination: examinationReducer,
    currentLocation: currentLocationsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
