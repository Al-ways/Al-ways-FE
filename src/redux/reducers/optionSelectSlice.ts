import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OptionSelectState {
  sortOption: string;
  catagoryOption: string;
  tagOption: string;
}
const initialState: OptionSelectState = {
  sortOption: '',
  catagoryOption: '',
  tagOption: '',
};

export const optionSelectSlice = createSlice({
  name: 'optionSelect',
  initialState,
  reducers: {
    setSortOption: (
      state: OptionSelectState,
      action: PayloadAction<string>,
    ) => {
      state.sortOption = action.payload;
    },
    setCatagoryOption: (
      state: OptionSelectState,
      action: PayloadAction<string>,
    ) => {
      state.catagoryOption = action.payload;
    },
    setTagOption: (state: OptionSelectState, action: PayloadAction<string>) => {
      state.tagOption = action.payload;
    },
  },
});

export const { setSortOption, setCatagoryOption, setTagOption } =
  optionSelectSlice.actions;

export default optionSelectSlice.reducer;
