import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { buildPatternFromSong } from '../../../assets/sound/patternBuilder';
import { playPattern } from '../../../assets/sound/patternPlayer';
import { setIsSongPlaying } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/Primary';
import { checkHowlsReadyStatus } from './playButton.utils';

const PlayButton = ({
  howls,
  isSongPlaying,
  light,
  scale,
  setIsSongPlaying,
}) => {
  const areHowlsReady = useMemo(
    () => checkHowlsReadyStatus(scale, howls),
    [howls, scale]
  );

  const handlePlayPause = () => {
    if (isSongPlaying) {
      setIsSongPlaying(false);
      return;
    }

    setIsSongPlaying(true);
    const songPattern = buildPatternFromSong();

    playPattern(songPattern);
  };

  return (
    <BtnPrimary
      light={light}
      onClick={handlePlayPause}
      label={!areHowlsReady ? 'Loading' : isSongPlaying ? 'Stop' : 'Play'}
    />
  );
};

const mapStateToProps = ({ howls, scale, ui }) => ({
  howls: howls.data,
  scale: scale.parsed.pitched,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, { setIsSongPlaying })(PlayButton);
