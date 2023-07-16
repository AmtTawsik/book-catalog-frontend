/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice';

const trackApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTracklist: builder.query({
      query: () => '/track',
      providesTags: ['Tracks'],
    }),
    addTracklist: builder.mutation({
      query: (data) => ({
        url: `/track`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Tracks'],
    }),
    deleteTracklist: builder.mutation({
      query: (id: string) => ({
        url: `/track/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tracks'],
    }),
    editTracklist: builder.mutation({
      query: ({ id, data }) => ({
        url: `/track/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Tracks'],
    }),
  }),
});

export const {
  useGetTracklistQuery,
  useAddTracklistMutation,
  useDeleteTracklistMutation,
  useEditTracklistMutation,
} = trackApi;
