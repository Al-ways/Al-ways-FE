import { createSlice } from '@reduxjs/toolkit';

// typescript 사용으로 initialState의 타입 지정이 필요함
interface MenuState {
  isOpen: boolean;
}

const initialState: MenuState = {
  isOpen: false,
};

// RTK의 createSlice 함수를 사용해 redux slice 생성. 이 slice는 state, reducers, actions 를 생성해줌
// 각 slice는 createSlice 함수 내 객체에 3가지 프로퍼티가 필요함. name, initialState, reducers
const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// 컴포넌트에서 사용할 액션 export
export const { toggleMenu } = menuSlice.actions;

// configureStore에서 사용할 슬라이스 export
export default menuSlice;
