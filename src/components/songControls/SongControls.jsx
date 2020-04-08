import React from 'react';
import { connect } from 'react-redux';
import { setBpm } from '../../redux/song/song.actions';
import { playSong } from './songControls.utils';

const SongControls = ({ setBpm, bpm, isPlaying }) => (
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
    <button onClick={() => playSong()}>{isPlaying ? 'Pause' : 'Play'}</button>
  </div>
);

const mapStateToProps = ({ song }) => ({
  bpm: song.bpm,
  isPlaying: song.isPlaying,
});

export default connect(mapStateToProps, { setBpm })(SongControls);
