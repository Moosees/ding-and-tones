import React from 'react';
import { connect } from 'react-redux';
import { setIsSongPlaying } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/Primary';
import { playPattern } from '../../../assets/sound/patternPlayer';
import { buildPatternFromSong } from '../../../assets/sound/patternBuilder';
import useHowls from '../../../hooks/useHowls';

const PlayButton = ({
  isPreparingSong,
  isSongPlaying,
  light,
  setIsSongPlaying,
}) => {
  const { howlOptionCbs } = useHowls();

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
      disabled={isPreparingSong}
      onClick={handlePlayPause}
      label={isPreparingSong ? 'Preparing' : isSongPlaying ? 'Stop' : 'Play'}
    />
  );
};

const mapStateToProps = ({ drum, scale, song, ui }) => ({
  isPreparingSong: ui.isPreparingSong,
  isSongPlaying: ui.isSongPlaying,
  allSounds: ui.soundOptions.allSounds,
});

export default connect(mapStateToProps, { setIsSongPlaying })(PlayButton);
