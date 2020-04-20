import React from 'react';
import { connect } from 'react-redux';
import { setIsSongPlaying } from '../../redux/song/song.actions';
import { playSong } from './playButton.utils';

const PlayButton = ({ isSongPlaying, setIsSongPlaying }) => {
  const handlePlayPause = () => {
    setIsSongPlaying(!isSongPlaying);
    if (!isSongPlaying) playSong();
  };

  return (
    <button onClick={handlePlayPause}>
      {isSongPlaying ? 'Pause' : 'Play'}
    </button>
  );
};

const mapStateToProps = ({ song }) => ({
  isSongPlaying: song.isSongPlaying,
});

export default connect(mapStateToProps, { setIsSongPlaying })(PlayButton);
