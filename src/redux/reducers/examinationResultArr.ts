import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
  data: string[];
}
const initialState = {
  data: [],
};

export const examinationResultArrSlice = createSlice({
  name: 'examinationResultArr',
  initialState,
  reducers: {
    pushResult: (state: InitialStateType, action: PayloadAction<string>) => {
      state.data.push(action.payload);
    },
  },
});

export const { pushResult } = examinationResultArrSlice.actions;
export default examinationResultArrSlice.reducer;
