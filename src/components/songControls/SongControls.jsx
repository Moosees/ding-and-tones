import React from 'react';
import { connect } from 'react-redux';
import { setBpm } from '../../redux/song/song.actions';

// Split BPM to playback controls and time signature to individual bars?
const SongControls = ({ bpm, setBpm }) => (
  <div>
    <label>
      BPM:
      <input
        // input validation
        type="number"
        min="50"
        max="160"
        value={bpm}
        onChange={e => setBpm(Number(e.target.value))}
      />
    </label>
    <button>Play</button>
  </div>
);

const mapStateToProps = ({ song }) => ({
  bpm: song.bpm
});

export default connect(mapStateToProps, { setBpm })(SongControls);
