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
      invalidatesTags: ['MySongs'],
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
      invalidatesTags: ['MySongs'],
    }),
    searchNewSongs: builder.query({
      query: () => ({
        url: '/song',
        method: 'GET',
      }),
    }),
    searchMySongs: builder.query({
      query: () => ({
        url: '/song/me',
        method: 'GET',
      }),
      providesTags: ['MySongs'],
    }),
    searchSongs: builder.query({
      query: ({ searchTerm }) => ({
        url: `/song/a/${searchTerm}`,
        method: 'GET',
      }),
    }),
  }),
});

// export const isSongApiAction = isAnyOf(
//   songExtendedApi.endpoints.saveSong.matchFulfilled,
//   songExtendedApi.endpoints.deleteSongById.matchFulfilled,
//   songExtendedApi.endpoints.getSongById.matchFulfilled
// );

export const {
  useDeleteSongByIdMutation,
  useLazyGetSongByIdQuery,
  useSaveSongMutation,
  useSearchNewSongsQuery,
  useSearchMySongsQuery,
  useLazySearchSongsQuery,
} = songExtendedApi;
