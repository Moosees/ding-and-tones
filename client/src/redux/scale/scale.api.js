import { api } from '../api/api.slice';
import { loadScale } from './scale.slice';

export const scaleExtendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    deleteScaleById: builder.mutation({
      query: ({ scaleId }) => ({
        url: `/scale/id/${scaleId}`,
        method: 'DELETE',
      }),
    }),
    getScaleById: builder.query({
      query: ({ scaleId }) => ({
        url: `/scale/id/${scaleId}`,
        method: 'GET',
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log('GET SCALE BY ID DATA', { data });
          dispatch(loadScale({ scale: data.scale }));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useDeleteScaleByIdMutation } = scaleExtendedApi;
