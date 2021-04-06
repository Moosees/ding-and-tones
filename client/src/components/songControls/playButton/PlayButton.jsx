import React from 'react';
import { connect } from 'react-redux';
import { setIsSongPlaying } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/Primary';
import { playSong } from './playButton.utils';

const PlayButton = ({
  allSounds,
  isPreparingSong,
  isSongPlaying,
  light,
  mutedBars,
  setIsSongPlaying,
  song,
}) => {
  const handlePlayPause = () => {
    setIsSongPlaying(!isSongPlaying);
    if (!isSongPlaying) playSong(allSounds, song, mutedBars);
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
  mutedBars: ui.mutedBars,
  allSounds: ui.soundOptions.allSounds,
  song,
});

export default connect(mapStateToProps, { setIsSongPlaying })(PlayButton);
