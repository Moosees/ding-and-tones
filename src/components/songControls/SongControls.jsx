import React from 'react';
import { connect } from 'react-redux';
import { setBpm, setIsSongPlaying } from '../../redux/song/song.actions';
import { playSong } from './songControls.utils';

// add keyboard shortcuts for play/pause
const SongControls = ({ setBpm, bpm, isSongPlaying, setIsSongPlaying }) => {
  const handleClick = () => {
    setIsSongPlaying(!isSongPlaying);
    if (!isSongPlaying) playSong();
  };

  return (
    <div>
      <label>
        BPM:
        <input
          // input validation
          type="number"
          min="50"
          max="160"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
        />
      </label>
      {/* Add pause button if possible */}
      <button onClick={handleClick}>{isSongPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

const mapStateToProps = ({ song }) => ({
  bpm: song.bpm,
  isSongPlaying: song.isSongPlaying,
});

export default connect(mapStateToProps, { setBpm, setIsSongPlaying })(
  SongControls
);
