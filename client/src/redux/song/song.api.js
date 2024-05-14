import { api } from '../api/api.slice';
import { loadSong } from './song.slice';
import songTypes from './song.types';

export const songExtendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    deleteSongById: builder.mutation({
      query: ({ songId }) => ({
        url: `/song/id/${songId}`,
        method: 'DELETE',
      }),
    }),
    getSongById: builder.query({
      query: ({ songId }) => ({
        url: `/song/id/${songId}`,
        method: 'GET',
      }),
      async onQueryStarted(
        { getScale, editSong },
        { dispatch, queryFulfilled }
      ) {
        try {
          const { data } = await queryFulfilled;
          console.log('GET SONG BY ID DATA', { data });
          dispatch(loadSong({ song: data.song, getScale, editSong }));
        } catch (error) {}
      },
    }),
    saveSong: builder.mutation({
      query: ({ song }) => ({
        url: '/song',
        method: 'POST',
        body: song,
      }),
      async onQueryStarted(_song, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch({
            type: songTypes.SAVE_SUCCESSFUL,
            payload: { song: data.song },
          });
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useDeleteSongByIdMutation,
  useLazyGetSongByIdQuery,
  useSaveSongMutation,
} = songExtendedApi;
