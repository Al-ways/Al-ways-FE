import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
  latitude: number | null;
  longitude: number | null;
}
interface initialState {
  latitude: number | null;
  longitude: number | null;
}

const initialState: initialState = {
  latitude: null,
  longitude: null,
};

const currentLocationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation(state: initialState, action: PayloadAction<LocationState>) {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const { setLocation } = currentLocationSlice.actions;

export default currentLocationSlice.reducer;
