import { api } from '../../api/apiSlice';

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishlist: builder.query({
      query: () => '/wishlist',
    }),
  }),
});

export const { useGetWishlistQuery } = wishlistApi;
