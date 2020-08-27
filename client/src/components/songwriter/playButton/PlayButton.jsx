import React from 'react';
import { connect } from 'react-redux';
import { setIsSongPlaying } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/Primary';
import { playSong } from './playButton.utils';

const PlayButton = ({
  audioPath,
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
      onClick={handlePlayPause}
      label={isSongPlaying ? 'Stop' : 'Play'}
    />
  );
};

const mapStateToProps = ({ drum, scale, song, ui }) => ({
  audioPath: drum.audioPath,
  isSongPlaying: ui.isSongPlaying,
  scale,
  song,
});

export default connect(mapStateToProps, { setIsSongPlaying })(PlayButton);
