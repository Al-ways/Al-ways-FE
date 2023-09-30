import { configureStore } from '@reduxjs/toolkit';
import menuSlice from '../modules/menuSlice';

// 초기 세팅 - configureStore: slice 들의 집합
// const store = configureStore({
//   reducer: {},
// });

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
  },
});

// typescript 사용으로 RootState 필요함
export type RootState = ReturnType<typeof store.getState>;

export default store;
