/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice';

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishlist: builder.query({
      query: () => '/wishlist',
      providesTags: ['Wishlist'],
    }),
    addWishlist: builder.mutation({
      query: (data) => ({
        url: `/wishlist`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Wishlist'],
    }),
    deleteWishlist: builder.mutation({
      query: (id: string) => ({
        url: `/wishlist/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Wishlist'],
    }),
  }),
});

export const {
  useGetWishlistQuery,
  useAddWishlistMutation,
  useDeleteWishlistMutation,
} = wishlistApi;
