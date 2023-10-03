import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentLocationsState {
  value: {
    lat: string | number;
    lon: string | number;
  };
}
const initialState: CurrentLocationsState = {
  value: {
    lat: '',
    lon: '',
  },
};
console.log(initialState);

export const currentLocationsSlice = createSlice({
  name: 'currentLocations',
  initialState,
  reducers: {
    addValue: (
      state: CurrentLocationsState,
      action: PayloadAction<{ lat: string | number; lon: string | number }>,
    ) => {
      state.value.lat = action.payload.lat;
      state.value.lon = action.payload.lon;
    },
    // updateValue:
  },
});

export const { addValue } = currentLocationsSlice.actions;
export default currentLocationsSlice.reducer;
