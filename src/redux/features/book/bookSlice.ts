import { createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';

interface IBook {
  userName: string;
  email: string;
}

const initialState: IBook = {
  userName: '',
  email: '',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = bookSlice.actions;

export default bookSlice.reducer;
