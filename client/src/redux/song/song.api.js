import { createAlert } from '../alert/alert.slice';
import { api } from '../api/api.slice';
import { loadScale } from '../scale/scale.slice';
import { loadSong } from './song.slice';

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
        { dispatch, queryFulfilled },
      ) {
        try {
          const { data } = await queryFulfilled;
          console.log('GET SONG BY ID DATA', { data });
          dispatch(
            loadSong({
              song: data.song,
              scale: data.scale,
              getScale,
              editSong,
            }),
          );
          if (getScale && !data.scale) {
            dispatch(
              createAlert({ alert: 'Song loaded, scale failed to load' }),
            );
          }
          if (getScale && data.scale) {
            dispatch(loadScale({ scale: data.scale }));
          }
        } catch (error) {}
      },
    }),
    saveSong: builder.mutation({
      query: ({ song }) => ({
        url: '/song',
        method: 'POST',
        body: song,
      }),
    }),
  }),
});

export const {
  useDeleteSongByIdMutation,
  useLazyGetSongByIdQuery,
  useSaveSongMutation,
} = songExtendedApi;
