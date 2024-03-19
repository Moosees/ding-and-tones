import { Howler } from 'howler';
import { getAudioOption, getAudioSrc } from '../../assets/sound/audioOptions';
import { api } from '../api/apiSlice';
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
        try {
          const { data } = await queryFulfilled;
          dispatch({ type: userTypes.SAVE_SUCCESSFUL, payload: data });
        } catch (error) {}
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
  }),
});

export const {
  useSaveUserInfoMutation,
  useSaveUserSoundMutation,
  useCheckSessionQuery,
} = userExtendedApi;
