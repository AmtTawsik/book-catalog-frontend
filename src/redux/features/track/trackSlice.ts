import { PayloadAction, createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';

interface ITrack {
  reading: number;
  finished: number;
}

const initialState: ITrack = {
  reading: 0,
  finished: 0,
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    calcReading(state: ITrack, action: PayloadAction<number>) {
      state.reading = action.payload;
    },
    calcFinished(state: ITrack, action: PayloadAction<number>) {
      state.finished = action.payload;
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { calcReading, calcFinished } = trackSlice.actions;

export default trackSlice.reducer;
