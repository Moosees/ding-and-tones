import { defaultScale } from '../../assets/defaultData';
import { api } from '../api/api.slice';
import scaleTypes from '../scale/scale.types';
import { parseScaleData } from '../scale/scale.utils';
import songTypes from './song.types';
import { createAutoMoveOrder, parseFetchedSong } from './song.utils';

export const songExtendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    deleteSongById: builder.mutation({
      query: (songId) => ({
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
        { firstLoad, getScale },
        { dispatch, queryFulfilled }
      ) {
        try {
          const { data } = await queryFulfilled;
          console.log('GET SONG BY ID DATA', { data });
          const fetchedSong = parseFetchedSong(data, getScale);
          const autoMoveOrder = createAutoMoveOrder(fetchedSong);

          if (firstLoad && !fetchedSong.getScale)
            dispatch({
              type: scaleTypes.LOAD_SCALE,
              payload: parseScaleData(defaultScale, true),
            });

          dispatch({
            type: songTypes.FETCH_SUCCESSFUL,
            payload: { song: fetchedSong, ui: { autoMoveOrder } },
          });
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

export const { useLazyGetSongByIdQuery, useSaveSongMutation } = songExtendedApi;
