import React from 'react';
import { connect } from 'react-redux';
import { setIsSongPlaying } from '../../redux/ui/ui.actions';
import { playSong } from './playButton.utils';
import ButtonMain from '../button/ButtonMain';

const PlayButton = ({ isSongPlaying, setIsSongPlaying }) => {
  const handlePlayPause = () => {
    setIsSongPlaying(!isSongPlaying);
    if (!isSongPlaying) playSong();
  };

  return (
    <ButtonMain
      onClick={handlePlayPause}
      label={isSongPlaying ? 'Pause' : 'Play'}
    />
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, { setIsSongPlaying })(PlayButton);
