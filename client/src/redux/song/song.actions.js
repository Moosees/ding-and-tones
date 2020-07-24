import axios from 'axios';
import songTypes from './song.types';
import { parseFetchedSong, parseSongForSaving } from './song.utils';

export const addNewBar = (barWithBeatsAndId) => ({
  type: songTypes.ADD_NEW_BAR,
  payload: barWithBeatsAndId, // { bar, barId, beats }
});

export const deleteBar = (barId) => ({
  type: songTypes.DELETE_BAR,
  payload: barId,
});

export const deleteSongById = (songId) => (dispatch) => {
  dispatch({ type: songTypes.DELETE_STARTED });

  return axios
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
    .catch((error) =>
      dispatch({ type: songTypes.DELETE_ERROR, payload: error.message })
    );
};

export const duplicateBar = (bar) => ({
  type: songTypes.DUPLICATE_BAR,
  payload: bar, // { oldBarId, newBarId, newMeasure, newBeats }
});

export const getSongById = (songId) => (dispatch) => {
  dispatch({ type: songTypes.FETCH_STARTED });

  return axios
    .get(`/song/id/${songId}`)
    .then((res) => {
      if (res.status === 200) {
        const fetchedSong = parseFetchedSong(res.data);
        dispatch({ type: songTypes.FETCH_SUCCESSFUL, payload: fetchedSong });
      }
    })
    .catch((error) =>
      dispatch({ type: songTypes.FETCH_ERROR, payload: error.message })
    );
};

export const moveBarInArrangement = (barIndex, targetIndex) => ({
  type: songTypes.MOVE_BAR,
  payload: { barIndex, targetIndex },
});

export const saveSong = ({ saveAs }) => (dispatch, getState) => {
  dispatch({ type: songTypes.SAVE_STARTED });

  const { song, scale } = getState();
  const body = parseSongForSaving(song, scale, saveAs);

  return axios
    .post('/song', body)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: songTypes.SAVE_SUCCESSFUL,
          payload: { song: res.data, alert: `"${res.data.title}" saved` },
        });
      }
    })
    .catch((error) => {
      dispatch({ type: songTypes.SAVE_ERROR, payload: error.message });
    });
};

export const setSongState = (song) => ({
  type: songTypes.SET_STATE,
  payload: song,
});

export const updateBarSubdivision = (barId, newSubdivision) => ({
  type: songTypes.UPDATE_BAR_SUBDIVISION,
  payload: { barId, newSubdivision },
});

export const updateBeat = (beatId, newSound) => ({
  type: songTypes.UPDATE_BEAT,
  payload: { beatId, newSound },
});

export const updateMeasure = (barId, newMeasure, newBeats) => ({
  type: songTypes.UPDATE_MEASURE,
  payload: { barId, newMeasure, newBeats },
});

export const updateSongInfo = (songInfo) => ({
  type: songTypes.UPDATE_SONG_INFO,
  payload: songInfo,
});
