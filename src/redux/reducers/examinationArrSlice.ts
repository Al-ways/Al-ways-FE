import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
  answerArr: number[];
}

const initialState: InitialStateType = {
  answerArr: [],
};

export const examinationArrSlice = createSlice({
  name: 'examinationArr',
  initialState,
  reducers: {
    initArr: (state: InitialStateType) => {
      state.answerArr = [];
    },
    pushAnswer: (state: InitialStateType, action: PayloadAction<number>) => {
      if (state.answerArr.length >= 6) {
        return;
      }
      state.answerArr.push(action.payload);
    },
    popAnswer: (state: InitialStateType) => {
      state.answerArr.pop();
    },
  },
});

export const { initArr, pushAnswer, popAnswer } = examinationArrSlice.actions;
export default examinationArrSlice.reducer;
