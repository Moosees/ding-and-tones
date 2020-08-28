import React from 'react';
import { connect } from 'react-redux';
import { setIsSongPlaying } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/Primary';
import { playSong } from './playButton.utils';

const PlayButton = ({
  audioPath,
  isPreparingSong,
  isSongPlaying,
  scale,
  setIsSongPlaying,
  song,
}) => {
  const handlePlayPause = () => {
    setIsSongPlaying(!isSongPlaying);
    if (!isSongPlaying) playSong(scale, song, audioPath);
  };

  return (
    <BtnPrimary
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
  scale,
  song,
});

export default connect(mapStateToProps, { setIsSongPlaying })(PlayButton);
