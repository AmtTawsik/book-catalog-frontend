import { createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';

interface IWishlist {
  userName: string;
  email: string;
}

const initialState: IWishlist = {
  userName: '',
  email: '',
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = wishlistSlice.actions;

export default wishlistSlice.reducer;
