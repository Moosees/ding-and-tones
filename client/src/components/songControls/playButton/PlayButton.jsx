import React from 'react';
import { connect } from 'react-redux';
import { setIsSongPlaying } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/Primary';
import { playSong } from './playButton.utils';

const PlayButton = ({
  audioPath,
  isPreparingSong,
  isSongPlaying,
  light,
  mutedBars,
  scale,
  setIsSongPlaying,
  song,
}) => {
  const handlePlayPause = () => {
    setIsSongPlaying(!isSongPlaying);
    if (!isSongPlaying) playSong(scale, song, mutedBars, audioPath);
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
  audioPath: drum.audioPath,
  isPreparingSong: ui.isPreparingSong,
  isSongPlaying: ui.isSongPlaying,
  mutedBars: ui.mutedBars,
  scale,
  song,
});

export default connect(mapStateToProps, { setIsSongPlaying })(PlayButton);
