import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buildPatternFromSong } from '../../../assets/sound/patternBuilder';
import { playPattern } from '../../../assets/sound/patternPlayer';
import {
  startSongPlayback,
  stopSongPlayback,
} from '../../../redux/song/song.slice';
import BtnPrimary from '../../shared/button/BtnPrimary';
import { checkHowlsReadyStatus } from './playButton.utils';

const PlayButton = ({ light }) => {
  const dispatch = useDispatch();
  const status = useSelector(({ scale }) => scale.howls.status);
  const scale = useSelector(({ scale }) => scale.parsed.pitched);
  const arrangement = useSelector(({ song }) => song.arrangement);
  const isSongPlaying = useSelector(
    ({ song }) => song.songPlayer.isSongPlaying
  );
  const mutedBars = useSelector(({ song }) => song.mutedBars);

  const areHowlsReady = useMemo(
    () => checkHowlsReadyStatus(scale, status),
    [status, scale]
  );

  const handlePlayPause = () => {
    if (isSongPlaying) {
      dispatch(stopSongPlayback());
      return;
    }

    dispatch(startSongPlayback());
    const songPattern = buildPatternFromSong();

    playPattern(songPattern);
  };

  const isPlayingDisabled = () => {
    if (!areHowlsReady) return true;

    if (!arrangement?.length) return true;

    const numMutedBars = Object.values(mutedBars).filter((val) => val).length;
    if (numMutedBars === arrangement.length) return true;
  };

  const getPlayButtonLabel = () => {
    if (!areHowlsReady) return 'Loading';

    return isSongPlaying ? 'Stop' : 'Play';
  };

  return (
    <BtnPrimary
      light={light}
      onClick={handlePlayPause}
      disabled={isPlayingDisabled()}
      label={getPlayButtonLabel()}
    />
  );
};

export default PlayButton;
