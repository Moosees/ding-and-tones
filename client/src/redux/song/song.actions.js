import axios from 'axios';
import { createDefaultSong, defaultScale } from '../../assets/defaultData';
import scaleTypes from '../scale/scale.types';
import { parseScaleData } from '../scale/scale.utils';
import songTypes from './song.types';
import {
	createAutoMoveOrder,
	parseFetchedSong
} from './song.utils';

const deleteSongById = (songId) => (dispatch) => {
  dispatch({ type: songTypes.DELETE_STARTED });

  axios
    .delete(`/song/id/${songId}`)
    .then((res) => {
      if (res.status === 200)
        dispatch({
          type: songTypes.DELETE_SUCCESSFUL,
          payload: {
            songId: res.data._id,
            alert: `"${res.data.info.title}" deleted`,
          },
        });
    })
    .catch((error) => {
      dispatch({
        type: songTypes.DELETE_ERROR,
        payload: {
          alert: error.response ? error.response.data.msg : 'Delete failed',
        },
      });
    });
};

const getSongById =
  (songId, getScale = true, firstLoad) =>
  (dispatch) => {
    dispatch({ type: songTypes.FETCH_STARTED });

    return axios
      .get(`/song/id/${songId}`)
      .then((res) => {
        if (res.status === 200) {
          const fetchedSong = parseFetchedSong(res.data, getScale);
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

          return Promise.resolve(true);
        }
      })
      .catch((error) => {
        let msg;
        switch (error.response?.status) {
          case 404:
            msg = 'Song not found';
            break;
          case 403:
            msg = 'Song is private';
            break;
          case 401:
            msg = 'Please log in first';
            break;
          default:
            msg = 'Something went wrong';
            break;
        }

        if (firstLoad) {
          dispatch({
            type: scaleTypes.LOAD_SCALE,
            payload: parseScaleData(defaultScale, true),
          });

          const defaultSongParsed = parseFetchedSong(
            createDefaultSong(),
            false,
            true
          );

          const autoMoveOrder = createAutoMoveOrder(defaultSongParsed);

          dispatch({
            type: songTypes.SET_STATE,
            payload: { song: defaultSongParsed, ui: { autoMoveOrder } },
          });
        }

        dispatch({
          type: songTypes.FETCH_ERROR,
          payload: {
            alert: `Could not load song. ${msg}`,
          },
        });
        return Promise.resolve(false);
      });
  };

const saveSong =
  ({ saveAs, title, scaleId }) =>
  (dispatch, getState) => {
    dispatch({ type: songTypes.SAVE_STARTED });

    const { song } = getState();
    // const body = parseSongForSaving(song, saveAs, title, scaleId);

    return axios
      .post('/song', song)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.msg) {
            dispatch({
              type: songTypes.SAVE_ERROR,
              payload: {
                alert: res.data.msg,
              },
            });
            return Promise.resolve('');
          } else {
            dispatch({
              type: songTypes.SAVE_SUCCESSFUL,
              payload: {
                song: res.data.song,
                alert: `"${res.data.song.title}" saved`,
              },
            });
            return Promise.resolve(`/song/${res.data.song.songId}`);
          }
        }
      })
      .catch((error) => {
        dispatch({
          type: songTypes.SAVE_ERROR,
          payload: {
            alert: error.response ? error.response.data.msg : 'Save failed',
          },
        });
        return Promise.resolve('');
      });
  };

export const updateSongInfo = (songInfo) => ({
  type: songTypes.UPDATE_SONG_INFO,
  payload: songInfo,
});
