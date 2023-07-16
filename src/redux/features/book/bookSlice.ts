import { PayloadAction, createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';

interface IBook {
  searchTerm: string;
  genre: string;
  publicationYear: string;
}

const initialState: IBook = {
  searchTerm: '',
  genre: '',
  publicationYear: '',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addSearchTerm(state: IBook, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addGenre(state: IBook, action: PayloadAction<string>) {
      state.genre = action.payload;
    },
    addYear(state: IBook, action: PayloadAction<string>) {
      state.publicationYear = action.payload;
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { addSearchTerm, addGenre, addYear } = bookSlice.actions;

export default bookSlice.reducer;
