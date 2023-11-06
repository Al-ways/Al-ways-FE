import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  isOpen: boolean;
}

const initialState: SidebarState = {
  isOpen: false,
};

// RTK의 createSlice 함수를 사용해 redux slice 생성. 이 slice는 state, reducers, actions 를 생성해줌
// 각 slice는 createSlice 함수 내 객체에 3가지 프로퍼티가 필요함. name, initialState, reducers
const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// 컴포넌트에서 사용할 액션 export
export const { toggleSidebar } = sidebarSlice.actions;

// configureStore에서 사용할 슬라이스 export
export default sidebarSlice;
