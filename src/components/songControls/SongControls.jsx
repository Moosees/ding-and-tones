import React from 'react';
import { connect } from 'react-redux';
import { setBpm } from '../../redux/song/song.actions';
import { playSong } from './songControls.utils';

const SongControls = ({ setBpm, song }) => (
  <div>
    <label>
      BPM:
      <input
        // input validation
        type="number"
        min="50"
        max="160"
        value={song.bpm}
        onChange={e => setBpm(Number(e.target.value))}
      />
    </label>
    <button onClick={() => playSong(song)}>Play</button>
  </div>
);

const mapStateToProps = ({ song }) => ({
  song
});

export default connect(mapStateToProps, { setBpm })(SongControls);
