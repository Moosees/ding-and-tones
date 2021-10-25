import axios from 'axios';
import { defaultScale } from '../../assets/defaultData';
import scaleTypes from '../scale/scale.types';
import { parseScaleData } from '../scale/scale.utils';
import songTypes from './song.types';
import { parseFetchedSong, parseSongForSaving } from './song.utils';

export const addNewBar = (barWithBeatsAndId) => ({
  type: songTypes.ADD_NEW_BAR,
  payload: barWithBeatsAndId, // { bar, barId, beats }
});

export const deleteBar = (barId) => (dispatch, getState) => {
  const {
    song: { bars },
  } = getState();

  const beatsToDelete = bars[barId].measure
    .map((beat) => beat.beatId)
    .filter((beat) => beat);

  dispatch({
    type: songTypes.DELETE_BAR,
    payload: { barToDelete: barId, beatsToDelete },
  });
};

export const deleteSongById = (songId) => (dispatch) => {
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

export const duplicateBar = (bar) => ({
  type: songTypes.DUPLICATE_BAR,
  payload: bar, // { oldBarId, newBarId, newMeasure, newBeats }
});

export const getSongById =
  (songId, getScale = true, firstLoad) =>
  (dispatch) => {
    dispatch({ type: songTypes.FETCH_STARTED });

    return axios
      .get(`/song/id/${songId}`)
      .then((res) => {
        if (res.status === 200) {
          const fetchedSong = parseFetchedSong(res.data, getScale);

          if (firstLoad && !fetchedSong.getScale)
            dispatch({
              type: scaleTypes.LOAD_SCALE,
              payload: parseScaleData(defaultScale, true),
            });

          dispatch({
            type: songTypes.FETCH_SUCCESSFUL,
            payload: fetchedSong,
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

        dispatch({
          type: songTypes.FETCH_ERROR,
          payload: {
            alert: `Could not load song. ${msg}`,
          },
        });
        return Promise.resolve(false);
      });
  };

export const loadSong = (song, suppressAlert) => (dispatch) => {
  const parsedSong = parseFetchedSong(song, false, suppressAlert);

  dispatch({ type: songTypes.SET_STATE, payload: parsedSong });
};

export const moveBarInArrangement = (barIndex, targetIndex) => ({
  type: songTypes.MOVE_BAR,
  payload: { barIndex, targetIndex },
});

export const saveSong =
  ({ saveAs, title, scaleId }) =>
  (dispatch, getState) => {
    dispatch({ type: songTypes.SAVE_STARTED });

    const { song } = getState();
    const body = parseSongForSaving(song, saveAs, title, scaleId);

    return axios
      .post('/song', body)
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

export const setSongState = (song) => ({
  type: songTypes.SET_STATE,
  payload: song,
});

export const togglePrivateSong = () => ({
  type: songTypes.TOGGLE_PRIVATE_SONG,
});

export const updateBarSubdivision = (barId, newSubdivision) => ({
  type: songTypes.UPDATE_BAR_SUBDIVISION,
  payload: { barId, newSubdivision },
});

export const updateHandForBeat = (beatId, newHand) => (dispatch, getState) => {
  const {
    song: { beats },
  } = getState();

  const selected = beats[beatId].hand === newHand;

  dispatch({
    type: songTypes.UPDATE_HAND,
    payload: { beatId, newHand, selected },
  });
};

export const updateSoundForBeat =
  (beatId, newSound) => (dispatch, getState) => {
    const {
      song: { beats },
      ui: { multiSelect },
    } = getState();

    const selected = beats[beatId].sound.includes(newSound);

    dispatch({
      type: songTypes.UPDATE_BEAT,
      payload: { beatId, newSound, selected, multiSelect },
    });
  };

export const updateMeasure = (barId, newMeasure, newBeats) => ({
  type: songTypes.UPDATE_MEASURE,
  payload: { barId, newMeasure, newBeats },
});

export const updateSongInfo = (songInfo) => ({
  type: songTypes.UPDATE_SONG_INFO,
  payload: songInfo,
});
