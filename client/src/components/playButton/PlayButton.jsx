import React from 'react';
import { connect } from 'react-redux';
import { setIsSongPlaying } from '../../redux/ui/ui.actions';
import BtnPrimary from '../button/Primary';
import { playSong } from './playButton.utils';

const PlayButton = ({ isSongPlaying, scale, setIsSongPlaying, song }) => {
  const handlePlayPause = () => {
    setIsSongPlaying(!isSongPlaying);
    if (!isSongPlaying) playSong(scale, song);
  };

  return (
    <BtnPrimary
      onClick={handlePlayPause}
      label={isSongPlaying ? 'Stop' : 'Play'}
    />
  );
};

const mapStateToProps = ({ scale, song, ui }) => ({
  isSongPlaying: ui.isSongPlaying,
  scale,
  song,
});

export default connect(mapStateToProps, { setIsSongPlaying })(PlayButton);
