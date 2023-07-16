import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import authSliceReducer from './features/auth/authSlice';
import bookSliceReducer from './features/book/bookSlice';
import tracklistSliceReducer from './features/track/trackSlice';
import wishlistSliceReducer from './features/wishlist/wishlistSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSliceReducer,
    book: bookSliceReducer,
    wishlist: wishlistSliceReducer,
    track: tracklistSliceReducer,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
