import { isAnyOf } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ADDRESS } from '../../oauth';
import { createAlert } from '../alert/alert.slice';
import { loadScale, selectAudioSrc, setVolume } from '../scale/scale.slice';
import { loadSong } from '../song/song.slice';
import { signOut } from '../user/user.slice';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_ADDRESS || API_ADDRESS,
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      return headers;
    },
    credentials: 'include',
  }),
  tagTypes: ['MySongs', 'MyScales', 'Song', 'Scale'],
  endpoints: (builder) => ({
    // USER ENDPOINTS
    saveUserInfo: builder.mutation({
      query: (userInfo) => ({
        url: '/user/info',
        method: 'PATCH',
        body: userInfo, // { name, anonymous }
      }),
    }),
    saveUserSound: builder.mutation({
      query: (userSound) => ({
        url: '/user/sound',
        method: 'PATCH',
        body: userSound, // {audioOption, volume}
      }),
    }),
    checkSession: builder.query({
      query: (sessionData) => ({
        url: '/session',
        method: 'POST',
        body: sessionData, // {songId, scaleId}
      }),
      async onQueryStarted(_songId, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (!data.user || !data.sound || !data.song) return;
          const { sound } = data;

          dispatch(setVolume({ volume: sound.volume }));
          dispatch(selectAudioSrc({ audioOption: sound.audioOption }));
        } catch (error) {}
      },
    }),
    signOut: builder.mutation({
      query: () => ({
        url: '/signOut',
        method: 'POST',
      }),
      async onQueryStarted(_res, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(signOut());
        } catch (error) {}
      },
    }),
    getGoogleUrl: builder.query({
      query: () => ({
        url: '/googleURL',
        method: 'GET',
      }),
    }),
    signIn: builder.mutation({
      query: (signInData) => ({
        url: '/signIn',
        method: 'POST',
        body: signInData, // { code, songId, scaleId, persistSession }
      }),
      async onQueryStarted(_signInData, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { sound } = data;

          dispatch(setVolume({ volume: sound.volume }));
          dispatch(selectAudioSrc({ audioOption: sound.audioOption }));
        } catch (error) {}
      },
    }),
    // SCALE ENDPOINTS
    deleteScaleById: builder.mutation({
      query: ({ scaleId }) => ({
        url: `/scale/id/${scaleId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ({ scale }) => {
        if (!scale?.scaleId) return ['MyScales'];

        return [{ type: 'Scale', id: scale.scaleId }, 'MyScales'];
      },
    }),
    getScaleById: builder.query({
      query: ({ scaleId }) => ({
        url: `/scale/id/${scaleId}`,
        method: 'GET',
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(loadScale({ scale: data.scale }));
        } catch (_error) {}
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
      providesTags: ({ scales }) => {
        if (!scales) return [];

        return scales.map(({ scaleId }) => ({ type: 'Scale', id: scaleId }));
      },
    }),
    // SONG ENDPOINTS
    deleteSongById: builder.mutation({
      query: ({ songId }) => ({
        url: `/song/id/${songId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ({ song }) => {
        if (!song?.songId) return ['MySongs'];

        return [{ type: 'Song', id: song.songId }, 'MySongs'];
      },
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
          dispatch(
            loadSong({
              song: data.song,
              scale: data.scale,
              getScale,
              editSong,
            }),
          );

          if (getScale && data.scale) {
            dispatch(loadScale({ scale: data.scale }));
          }

          dispatch(
            createAlert({
              alert: getScale ? data.alerts.scale : data.alerts.skip,
            }),
          );
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
      providesTags: ({ songs }) => {
        if (!songs) return [];

        return songs.map(({ songId }) => ({ type: 'Song', id: songId }));
      },
    }),
  }),
});

export const isUpdateUserAction = isAnyOf(
  api.endpoints?.checkSession?.matchFulfilled,
  api.endpoints?.signIn?.matchFulfilled,
  api.endpoints?.saveUserInfo?.matchFulfilled,
);

export const isSignInAction = isAnyOf(
  api.endpoints?.checkSession?.matchFulfilled,
  api.endpoints?.signIn?.matchFulfilled,
);

export const isFirstLoadAction = isAnyOf(
  api.endpoints?.checkSession?.matchFulfilled,
  api.endpoints?.getSongById?.matchRejected,
  api.endpoints?.getScaleById?.matchRejected,
);

// export const isSongApiAction = isAnyOf(
//   api.endpoints.saveSong.matchFulfilled,
//   api.endpoints.deleteSongById.matchFulfilled,
//   api.endpoints.getSongById.matchFulfilled
// );

export const {
  useSaveUserInfoMutation,
  useSaveUserSoundMutation,
  useLazyCheckSessionQuery,
  useSignOutMutation,
  useLazyGetGoogleUrlQuery,
  useSignInMutation,
  useDeleteScaleByIdMutation,
  useLazyGetScaleByIdQuery,
  useSaveScaleMutation,
  useSearchMyScalesQuery,
  useSearchNewScalesQuery,
  useLazySearchScalesQuery,
  useDeleteSongByIdMutation,
  useLazyGetSongByIdQuery,
  useSaveSongMutation,
  useSearchNewSongsQuery,
  useSearchMySongsQuery,
  useLazySearchSongsQuery,
} = api;
