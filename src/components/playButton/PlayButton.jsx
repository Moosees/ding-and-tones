import React from 'react';
import { connect } from 'react-redux';
import { setIsSongPlaying } from '../../redux/ui/ui.actions';
import ButtonMain from '../button/ButtonMain';
import { playSong } from './playButton.utils';

const PlayButton = ({ isSongPlaying, setIsSongPlaying }) => {
  const handlePlayPause = () => {
    setIsSongPlaying(!isSongPlaying);
    if (!isSongPlaying) playSong();
  };

  return (
    <ButtonMain
      onClick={handlePlayPause}
      label={isSongPlaying ? 'Stop' : 'Play'}
    />
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, { setIsSongPlaying })(PlayButton);
