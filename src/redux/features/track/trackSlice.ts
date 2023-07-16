import { createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';

interface ITrack {
  userName: string;
  email: string;
}

const initialState: ITrack = {
  userName: '',
  email: '',
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = trackSlice.actions;

export default trackSlice.reducer;
