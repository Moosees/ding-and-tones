import uiTypes from './ui.types';

export const setCurrentDropdown = (beatId) => ({
  type: uiTypes.SET_CURRENT_DROPDOWN,
  payload: { beatId },
});

export const setCurrentlyPlaying = (currentlyPlaying) => ({
  type: uiTypes.SET_CURRENTLY_PLAYING,
  payload: currentlyPlaying, // { currentBeat, currentBar, currentSound, currentHand }
});

export const setIsSongPlaying = (isSongPlaying) => ({
  type: uiTypes.SET_IS_SONG_PLAYING,
  payload: isSongPlaying,
});

export const setPrivacyOpen = (privacyOpen) => ({
  type: uiTypes.SET_PRIVACY_OPEN,
  payload: privacyOpen,
});

export const toggleAutoMove = () => ({
  type: uiTypes.TOGGLE_AUTO_MOVE,
});

export const toggleCountOpen = () => ({
  type: uiTypes.TOGGLE_COUNT_OPEN,
});

export const toggleEditSong = () => ({
  type: uiTypes.TOGGLE_EDIT_SONG,
});

export const toggleHeadersOpen = () => ({
  type: uiTypes.TOGGLE_HEADERS_OPEN,
});

export const toggleHandsOpen = () => ({
  type: uiTypes.TOGGLE_HANDS_OPEN,
});

export const toggleMultiSelect = () => ({
  type: uiTypes.TOGGLE_MULTI_SELECT,
});

export const toggleExtraNotes = () => ({
  type: uiTypes.TOGGLE_EXTRA_NOTES,
});

export const toggleExtraPosEdit = () => ({
  type: uiTypes.TOGGLE_EXTRA_POS_EDIT,
});

export const toggleMuteBar = (barId, solo) => (dispatch, getState) => {
  const {
    song: { arrangement },
    ui: { mutedBars },
  } = getState();

  if (!solo) {
    const newMuted = { ...mutedBars, [barId]: !mutedBars[barId] };

    dispatch({
      type: uiTypes.SET_MUTED_BARS,
      payload: { mutedBars: newMuted },
    });
    return;
  }

  const mutedBarsAry = Object.keys(mutedBars).filter((bar) => mutedBars[bar]);
  const clearSolo =
    mutedBarsAry.length &&
    mutedBarsAry.length === arrangement.length - 1 &&
    !mutedBarsAry.includes(barId);

  const newMuted = clearSolo
    ? {}
    : arrangement.reduce((acc, bar) => {
        if (barId !== bar) acc[bar] = true;
        return acc;
      }, {});

  dispatch({
    type: uiTypes.SET_MUTED_BARS,
    payload: { mutedBars: newMuted },
  });
};
