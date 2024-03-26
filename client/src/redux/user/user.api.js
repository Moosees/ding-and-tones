import { Howler } from 'howler';
import { getAudioOption, getAudioSrc } from '../../assets/sound/audioOptions';
import { api } from '../api/api.slice';
import howlsTypes from '../howls/howls.types';
import { setSessionTried, signOut } from './user.slice';

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
      query: (songId) => ({
        url: '/session',
        method: 'POST',
        body: songId,
      }),
      async onQueryStarted(_songId, { dispatch, getState, queryFulfilled }) {
        dispatch(setSessionTried());

        try {
          const { data } = await queryFulfilled;
          if (!data.user) return;
          console.log('CHECK SESSION DATA', { data });

          const { howls, scale } = getState();
          const { sound, name, anonymous, isOwner } = data.user;

          const audioSrc = getAudioSrc(sound.audioOption);

          Howler.volume(sound.volume);

          // dispatch(
          //   signIn({
          //     alert: `Welcome back, ${name}`,
          //     howls: {
          //       info: {
          //         audioSrc: getAudioSrc(sound.audioOption),
          //         volume: sound.volume,
          //       },
          //     },
          //     song: { isOwner },
          //     user: {
          //       name,
          //       anonymous: anonymous,
          //       isSignedIn: true,
          //       accountOpen: false,
          //     },
          //   })
          // );

          if (howls.info.volume !== sound.volume) {
            dispatch({
              type: howlsTypes.SET_VOLUME,
              payload: { newVolume: sound.volume },
            });
          }

          if (getAudioOption(howls.info.audioSrc) !== sound.audioOption) {
            dispatch({
              type: howlsTypes.SELECT_AUDIO,
              payload: {
                audioSrc,
                scale: scale.parsed.pitched,
              },
            });
          }
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
        body: signInData, // { code, songId, persistSession }
      }),
      async onQueryStarted(
        _signInData,
        { dispatch, queryFulfilled, getState }
      ) {
        try {
          const { data } = await queryFulfilled;
          const { sound, name, anonymous, newUser, isOwner } = data;
          const { howls, scale } = getState();

          const audioSrc = getAudioSrc(sound.audioOption);

          // dispatch(
          //   signIn({
          //     alert: 'Signed in successfully!',
          //     song: { isOwner },
          //     user: {
          //       name,
          //       anonymous: anonymous,
          //       isSignedIn: true,
          //       accountOpen: newUser,
          //     },
          //   })
          // );

          if (howls.info.volume !== sound.volume) {
            dispatch({
              type: howlsTypes.SET_VOLUME,
              payload: { newVolume: sound.volume },
            });
          }

          if (getAudioOption(howls.info.audioSrc) !== sound.audioOption) {
            dispatch({
              type: howlsTypes.SELECT_AUDIO,
              payload: {
                audioSrc,
                scale: scale.parsed.pitched,
              },
            });
          }
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useSaveUserInfoMutation,
  useSaveUserSoundMutation,
  useCheckSessionQuery,
  useSignOutMutation,
  useLazyGetGoogleUrlQuery,
  useSignInMutation,
} = userExtendedApi;
