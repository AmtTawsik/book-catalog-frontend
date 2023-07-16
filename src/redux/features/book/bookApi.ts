import { api } from '../../api/apiSlice';

type IBookParam = {
  searchTerm?: string;
  page?: number;
  limit?: number;
};

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (options: IBookParam) => {
        let queryString = '/book';

        if (options.page || options.limit || options.searchTerm) {
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

          queryString = queryString.slice(0, -1); // Remove the trailing "&"
        }

        return queryString;
      },
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
