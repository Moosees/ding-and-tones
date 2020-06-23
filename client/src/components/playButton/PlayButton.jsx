import React from 'react';
import { connect } from 'react-redux';
import { setIsSongPlaying } from '../../redux/ui/ui.actions';
import BtnPrimary from '../button/Primary';
import { playSong } from './playButton.utils';

const PlayButton = ({ isSongPlaying, setIsSongPlaying }) => {
  const handlePlayPause = () => {
    setIsSongPlaying(!isSongPlaying);
    if (!isSongPlaying) playSong();
  };

  return (
    <BtnPrimary
      onClick={handlePlayPause}
      label={isSongPlaying ? 'Stop' : 'Play'}
    />
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, { setIsSongPlaying })(PlayButton);
