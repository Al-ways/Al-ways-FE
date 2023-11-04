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
    pushResult: (state: InitialStateType, action: PayloadAction<Result>) => {
      console.log(typeof action);

      state.data.push(action.payload);
    },
  },
});

export const { pushResult } = examinationResultArrSlice.actions;
export default examinationResultArrSlice.reducer;
