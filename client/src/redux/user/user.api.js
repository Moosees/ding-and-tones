import { isAnyOf } from '@reduxjs/toolkit';
import { api } from '../api/api.slice';
import { scaleExtendedApi } from '../scale/scale.api';
import { selectAudioSrc, setVolume } from '../scale/scale.slice';
import { songExtendedApi } from '../song/song.api';
import { signOut } from './user.slice';

export const userExtendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
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
          console.log('CHECK SESSION DATA', { data });
          const { sound } = data;

          // dispatch(
          //   signIn({
          //       accountOpen: false,
          //     song: { isOwner: song.isOwner }
          //   })
          // );

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
          const { data } = await queryFulfilled;
          console.log('SIGN OUT DATA', { data });
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
          const { data, meta } = await queryFulfilled;
          const { status } = meta.response;
          const { sound } = data;
          console.log('SIGN IN', { status, data });

          // dispatch(
          //   signIn({
          //     song: { isOwner: song.isOwner },
          //     accountOpen: code === 201,
          //   })
          // );

          dispatch(setVolume({ volume: sound.volume }));
          dispatch(selectAudioSrc({ audioOption: sound.audioOption }));
        } catch (error) {}
      },
    }),
  }),
});

export const isUpdateUserAction = isAnyOf(
  userExtendedApi.endpoints.checkSession.matchFulfilled,
  userExtendedApi.endpoints.signIn.matchFulfilled,
  userExtendedApi.endpoints.saveUserInfo.matchFulfilled,
);

export const isSignInAction = isAnyOf(
  userExtendedApi.endpoints.checkSession.matchFulfilled,
  userExtendedApi.endpoints.signIn.matchFulfilled,
);

export const isFirstLoadAction = isAnyOf(
  userExtendedApi.endpoints.checkSession.matchFulfilled,
  songExtendedApi.endpoints.getSongById.matchRejected,
  scaleExtendedApi.endpoints.getScaleById.matchRejected,
);

export const {
  useSaveUserInfoMutation,
  useSaveUserSoundMutation,
  useLazyCheckSessionQuery,
  useSignOutMutation,
  useLazyGetGoogleUrlQuery,
  useSignInMutation,
} = userExtendedApi;
