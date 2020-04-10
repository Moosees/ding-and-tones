import React from 'react';
import { connect } from 'react-redux';
import { setBpm, setIsSongPlaying } from '../../redux/song/song.actions';
import { playSong } from './songControls.utils';

const SongControls = ({ setBpm, bpm, isSongPlaying, setIsSongPlaying }) => {
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
        <select value={'3/4'} onChange={(e) => console.log(e.target.value)}>
          <option value={'4/4'}>4/4</option>
          <option value={'3/4'}>3/4</option>
        </select>
      </label>
      <label>
        Grid value:
        <select value={8} onChange={(e) => console.log(e.target.value)}>
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
});

export default connect(mapStateToProps, { setBpm, setIsSongPlaying })(
  SongControls
);
