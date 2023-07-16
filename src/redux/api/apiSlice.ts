/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedOut } from '../features/auth/authSlice';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://book-catalog-eight.vercel.app/api/v1',
  prepareHeaders: async (headers, { getState }) => {
    const token: string | undefined = (getState() as RootState).auth
      .accessToken;
    if (token) {
      headers.set('authorization', `${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
      api.dispatch(userLoggedOut());
      localStorage.clear();
    }

    return result;
  },
  tagTypes: [],
  endpoints: () => ({}),
});
