import React from 'react';
import { connect } from 'react-redux';
import { buildPatternFromSong } from '../../../assets/sound/patternBuilder';
import { playPattern } from '../../../assets/sound/patternPlayer';
import { setIsSongPlaying } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/Primary';

const PlayButton = ({
  howlOptionCbs,
  loadingStatus,
  isSongPlaying,
  light,
  setIsSongPlaying,
}) => {
  const areHowlsReady = Object.values(loadingStatus).every(
    (status) => status === 'ready'
  );
  console.log({ areHowlsReady, loadingStatus });

  const handlePlayPause = () => {
    if (isSongPlaying) {
      setIsSongPlaying(false);
      return;
    }

    setIsSongPlaying(true);
    const songPattern = buildPatternFromSong(howlOptionCbs);

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

const mapStateToProps = ({ howls, ui }) => ({
  howlOptionCbs: howls.optionCbs,
  loadingStatus: howls.loadingStatus,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, { setIsSongPlaying })(PlayButton);
