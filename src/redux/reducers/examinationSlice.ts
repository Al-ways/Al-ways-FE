import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface ExaminationState {
  value: string[];
}
const initialState: ExaminationState = {
  value: [],
};
export const examinationSlice = createSlice({
  name: 'examination',
  initialState,
  reducers: {
    addValue: (state: ExaminationState, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});
export const { addValue } = examinationSlice.actions;
export default examinationSlice.reducer;
