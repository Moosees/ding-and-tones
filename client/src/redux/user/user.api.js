import { Howler } from 'howler';
import { getAudioOption, getAudioSrc } from '../../assets/sound/audioOptions';
import { api } from '../api/api.slice';
import howlsTypes from '../howls/howls.types';
import userTypes from './user.types';

export const userExtendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    saveUserInfo: builder.mutation({
      query: (userInfo) => ({
        url: '/user/info',
        method: 'PATCH',
        body: userInfo, // { name, anonymous }
      }),
      async onQueryStarted(_userInfo, { dispatch, queryFulfilled }) {
        console.log('SAVE USER INFO onQueryStarted', { _userInfo });
        try {
          const { data } = await queryFulfilled;
          console.log('SAVE USER INFO DATA', { data });
          dispatch({ type: userTypes.SAVE_SUCCESSFUL, payload: data });
        } catch (error) {
          console.log('SAVE USER INFO ERROR', { error });
        }
      },
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
        dispatch({ type: userTypes.SESSION_TRIED });

        try {
          const { data } = await queryFulfilled;
          console.log('CHECK SESSION DATA', { data });
          if (!data.user) return;

          const { howls, scale } = getState();
          const { sound, name, anonymous, isOwner } = data.user;

          const audioSrc = getAudioSrc(sound.audioOption);

          Howler.volume(sound.volume);

          dispatch({
            type: userTypes.SIGN_IN,
            payload: {
              alert: `Welcome back, ${name}`,
              howls: {
                info: {
                  audioSrc: getAudioSrc(sound.audioOption),
                  volume: sound.volume,
                },
              },
              song: { isOwner },
              user: {
                name,
                isAnonymous: anonymous,
                isSignedIn: true,
                accountOpen: false,
              },
            },
          });

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
          dispatch({ type: userTypes.SIGN_OUT });
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

          dispatch({
            type: userTypes.SIGN_IN,
            payload: {
              alert: 'Signed in successfully!',
              song: { isOwner },
              user: {
                name,
                isAnonymous: anonymous,
                isSignedIn: true,
                accountOpen: newUser,
              },
            },
          });

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
