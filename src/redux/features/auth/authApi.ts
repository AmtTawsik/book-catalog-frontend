/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IAuthLogin, IAuthSignup } from '../../../types/authType';
import { api } from '../../api/apiSlice';
import { userLoggedIn } from './authSlice';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // register endpoint
    signup: builder.mutation({
      query: (data: IAuthSignup) => ({
        url: '/user/signup',
        method: 'POST',
        body: data,
      }),
    }),
    // login endpoint
    signin: builder.mutation({
      query: (data: IAuthLogin) => ({
        url: '/user/login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            'auth',
            JSON.stringify({
              accessToken: result.data.data.accessToken,
              userName: result.data.data.userName,
              email: result.data.data.email,
              userId: result.data.data.userId,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result.data.data.accessToken,
              userName: result.data.data.userName,
              email: result.data.data.email,
              userId: result.data.data.userId,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useSignupMutation, useSigninMutation } = authApi;
