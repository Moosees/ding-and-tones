import React from 'react';
import { connect } from 'react-redux';
import {
  setBpm,
  setIsSongPlaying,
  setSongGrid,
  setSongTime,
} from '../../redux/song/song.actions';
import { playSong } from './songControls.utils';

const SongControls = ({
  bpm,
  setBpm,
  isSongPlaying,
  setIsSongPlaying,
  gridValue,
  setSongGrid,
  timeSignature,
  setSongTime,
}) => {
  const handleClick = () => {
    setIsSongPlaying(!isSongPlaying);
    if (!isSongPlaying) playSong();
  };

  return (
    <div>
      <button onClick={handleClick}>{isSongPlaying ? 'Pause' : 'Play'}</button>
      <label>
        BPM:
        <input
          type="number"
          min="50"
          max="160"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
        />
      </label>
      <label>
        Time signature:
        <select
          value={timeSignature}
          onChange={(e) => setSongTime(e.target.value)}
        >
          <option value={'4/4'}>4/4</option>
          <option value={'3/4'}>3/4</option>
        </select>
      </label>
      <label>
        Grid value:
        <select
          value={gridValue}
          onChange={(e) => setSongGrid(Number(e.target.value))}
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={16}>16</option>
        </select>
      </label>
    </div>
  );
};

const mapStateToProps = ({ song }) => ({
  bpm: song.bpm,
  isSongPlaying: song.isSongPlaying,
  gridValue: song.gridValue,
  timeSignature: song.timeSignature,
});

export default connect(mapStateToProps, {
  setBpm,
  setIsSongPlaying,
  setSongGrid,
  setSongTime,
})(SongControls);
