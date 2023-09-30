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
    setExamination: (state, action: PayloadAction<string[]>) => {
      state.value = action.payload;
    },
  },
});
