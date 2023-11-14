import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateType {
  data: string;
}
interface stateType {
  data: string;
}

const initialState: initialStateType = {
  data: '',
};

export const examinationResultSlice = createSlice({
  name: 'examinationResult',
  initialState,
  reducers: {
    initResult: (state: stateType) => {
      state.data = '';
    },
    addResult: (state: stateType, action: PayloadAction<string>) => {
      state.data = action.payload;
    },
  },
});

export const { initResult, addResult } = examinationResultSlice.actions;
export default examinationResultSlice.reducer;
