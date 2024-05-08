import axios from 'axios';
import { defaultScale, createDefaultSong } from '../../assets/defaultData';
import { compareSubdivisionsLength } from '../../assets/metre';
import scaleTypes from '../scale/scale.types';
import { parseScaleData } from '../scale/scale.utils';
import songTypes from './song.types';
import {
  createAutoMoveOrder,
  moveBar,
  parseFetchedSong,
  updateMeasureAndBeats,
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

export const moveBarInArrangement =
  (barIndex, targetIndex) => (dispatch, getState) => {
    const { song } = getState();

    const newArrangement = moveBar(song.arrangement, barIndex, targetIndex);

    const autoMoveOrder = createAutoMoveOrder({
      arrangement: newArrangement,
      bars: song.bars,
    });

    dispatch({
      type: songTypes.MOVE_BAR,
      payload: { song: { newArrangement }, ui: { autoMoveOrder } },
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

export const togglePrivateSong = () => ({
  type: songTypes.TOGGLE_PRIVATE_SONG,
});

export const updateBarSubdivisions =
  (barId, newSubdivisions) => (dispatch, getState) => {
    const { song } = getState();

    const { metre, subdivisions } = song.bars[barId];

    const lengthDifference = compareSubdivisionsLength(
      subdivisions,
      newSubdivisions,
      metre
    );

    if (lengthDifference !== 0) {
      const { addBeats, deleteBeats, newMeasure } = updateMeasureAndBeats(
        song.bars[barId],
        newSubdivisions
      );

      const barsForAutoMoveOrder = { ...song.bars };
      barsForAutoMoveOrder[barId].measure = newMeasure;

      const autoMoveOrder = createAutoMoveOrder({
        arrangement: song.arrangement,
        bars: barsForAutoMoveOrder,
      });

      dispatch({
        type: songTypes.UPDATE_MEASURE_AND_BEATS,
        payload: {
          song: {
            barId,
            addBeats,
            deleteBeats,
            newMeasure,
          },
          ui: { autoMoveOrder },
        },
      });
    }

    dispatch({
      type: songTypes.UPDATE_BAR_SUBDIVISIONS,
      payload: { barId, newSubdivisions },
    });
  };

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

export const updateSongInfo = (songInfo) => ({
  type: songTypes.UPDATE_SONG_INFO,
  payload: songInfo,
});
