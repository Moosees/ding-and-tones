import { api } from '../api/api.slice';
import { loadScale } from './scale.slice';

export const scaleExtendedApi = api.injectEndpoints({
  addTagTypes: ['MyScales'],
  endpoints: (builder) => ({
    deleteScaleById: builder.mutation({
      query: ({ scaleId }) => ({
        url: `/scale/id/${scaleId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['MyScales'],
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
    saveScale: builder.mutation({
      query: ({ scaleUpdate }) => ({
        url: '/scale',
        method: 'POST',
        body: scaleUpdate,
      }),
      invalidatesTags: ['MyScales'],
    }),
    searchMyScales: builder.query({
      query: () => ({
        url: '/scale/me',
        method: 'GET',
      }),
      providesTags: ['MyScales'],
    }),
    searchNewScales: builder.query({
      query: () => ({
        url: '/scale',
        method: 'GET',
      }),
    }),
    searchScales: builder.query({
      query: ({ searchTerm }) => ({
        url: `/scale/a/${searchTerm}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useDeleteScaleByIdMutation,
  useLazyGetScaleByIdQuery,
  useSaveScaleMutation,
} = scaleExtendedApi;
