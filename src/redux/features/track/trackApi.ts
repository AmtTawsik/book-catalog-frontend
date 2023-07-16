import { api } from '../../api/apiSlice';

const trackApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTracklist: builder.query({
      query: () => '/track',
    }),
  }),
});

export const { useGetTracklistQuery } = trackApi;
