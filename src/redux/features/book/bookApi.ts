/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice';

type IBookParam = {
  searchTerm?: string;
  page?: number;
  limit?: number;
  genre?: string;
  publicationYear?: string;
};

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (options: IBookParam) => {
        let queryString = '/book';

        if (
          options.page ||
          options.limit ||
          options.searchTerm ||
          options.genre ||
          (options.publicationYear &&
            (options.genre !== 'all' || options.publicationYear !== 'all'))
        ) {
          queryString += '?';

          if (options.page) {
            queryString += `page=${options.page}&`;
          }

          if (options.limit) {
            queryString += `limit=${options.limit}&`;
          }

          if (options.searchTerm) {
            queryString += `searchTerm=${options.searchTerm}&`;
          }

          if (options.genre && options.genre !== 'all') {
            queryString += `genre=${options.genre}&`;
          }

          if (options.publicationYear && options.publicationYear !== 'all') {
            queryString += `publicationYear=${options.publicationYear}&`;
          }

          queryString = queryString.slice(0, -1);
        }

        return queryString;
      },
      keepUnusedDataFor: 600,
      providesTags: ['Books'],
    }),
    getBook: builder.query({
      query: (id: string) => `/book/${id}`,
      providesTags: (arg) => [{ type: 'Book', id: arg }],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: `/book`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (arg) => ['Books', { type: 'Book', id: arg.id }],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = bookApi;
