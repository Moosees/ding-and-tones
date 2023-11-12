import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buildPatternFromSong } from '../../../assets/sound/patternBuilder';
import { playPattern } from '../../../assets/sound/patternPlayer';
import { setIsSongPlaying } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/BtnPrimary';
import { checkHowlsReadyStatus } from './playButton.utils';

const PlayButton = ({ light }) => {
  const dispatch = useDispatch();
  const { howls, scale, isSongPlaying } = useSelector(
    ({ howls, scale, ui }) => ({
      howls: howls.data,
      scale: scale.parsed.pitched,
      isSongPlaying: ui.isSongPlaying,
    })
  );

  const areHowlsReady = useMemo(
    () => checkHowlsReadyStatus(scale, howls),
    [howls, scale]
  );

  const handlePlayPause = () => {
    if (isSongPlaying) {
      dispatch(setIsSongPlaying(false));
      return;
    }

    dispatch(setIsSongPlaying(true));
    const songPattern = buildPatternFromSong();

    playPattern(songPattern);
  };

  const getPlayButtonLabel = () => {
    if (!areHowlsReady) return 'Loading';

    return isSongPlaying ? 'Stop' : 'Play';
  };

  return (
    <BtnPrimary
      light={light}
      onClick={handlePlayPause}
      disabled={!areHowlsReady}
      label={getPlayButtonLabel()}
    />
  );
};

export default PlayButton;
