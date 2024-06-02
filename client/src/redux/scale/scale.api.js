import { api } from '../api/api.slice';

export const scaleExtendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    deleteScaleById: builder.mutation({
      query: ({ scaleId }) => ({
        url: `/scale/id/${scaleId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useDeleteScaleByIdMutation } = scaleExtendedApi;
