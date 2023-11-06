import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
  data: Result[];
}
interface Result {
  id: string;
  name: string;
  description: string;
  img: string;
}
const initialState = {
  data: [],
};

export const examinationResultArrSlice = createSlice({
  name: 'examinationResultArr',
  initialState,
  reducers: {
    initResult: (state: InitialStateType) => {
      state.data = [];
    },
    pushResult: (state: InitialStateType, action: PayloadAction<Result>) => {
      state.data.push(action.payload);
    },
  },
});

export const { initResult, pushResult } = examinationResultArrSlice.actions;
export default examinationResultArrSlice.reducer;
