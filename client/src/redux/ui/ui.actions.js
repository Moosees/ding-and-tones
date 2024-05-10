import uiTypes from './ui.types';

export const setPrivacyOpen = (privacyOpen) => ({
  type: uiTypes.SET_PRIVACY_OPEN,
  payload: privacyOpen,
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
