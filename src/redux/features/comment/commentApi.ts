/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice';

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (book: string) => {
        let queryString = '/review';

        if (book) {
          queryString += '?';

          if (book) {
            queryString += `book=${book}&`;
          }

          queryString = queryString.slice(0, -1);
        }

        return queryString;
      },
      keepUnusedDataFor: 600,
      providesTags: ['Review'],
    }),

    addReview: builder.mutation({
      query: (data) => ({
        url: `/review`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Review'],
    }),
  }),
});

export const { useGetReviewsQuery, useAddReviewMutation } = reviewApi;
