import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addNewBar } from '../../redux/bars/bars.actions';
import {
  addBarToSong,
  setBpm,
  setIsSongPlaying,
  setSongGrid,
  setSongTime,
} from '../../redux/song/song.actions';
import { playSong } from './songControls.utils';

const createNewBar = (timeSignature, gridValue) => {
  const [beats, value] = timeSignature.split('/');
  const totalBeats = beats * (gridValue / value);
  const newPattern = [];

  for (let i = 0; i < totalBeats; ++i) {
    newPattern.push({ id: uuid(), tone: '' });
  }

  return newPattern;
};

const SongControls = ({
  addNewBar,
  addBarToSong,
  bpm,
  setBpm,
  isSongPlaying,
  setIsSongPlaying,
  gridValue,
  setSongGrid,
  timeSignature,
  setSongTime,
}) => {
  const handlePlayPause = () => {
    setIsSongPlaying(!isSongPlaying);
    if (!isSongPlaying) playSong();
  };

  const handleNewBar = (timeSignature, gridValue) => {
    const songId = uuid();
    const barId = uuid();
    const pattern = createNewBar(timeSignature, gridValue);

    addNewBar({
      [barId]: {
        timeSignature,
        gridValue,
        pattern,
      },
    });

    addBarToSong({ bar: barId, id: songId });
  };

  return (
    <div>
      <button onClick={handlePlayPause}>
        {isSongPlaying ? 'Pause' : 'Play'}
      </button>
      <button
        disabled={isSongPlaying}
        onClick={() => handleNewBar(timeSignature, gridValue)}
      >
        Add empty bar
      </button>
      <label>
        BPM:
        <input
          type="number"
          min="50"
          max="160"
          value={bpm}
          disabled={isSongPlaying}
          onChange={(e) => setBpm(Number(e.target.value))}
        />
      </label>
      <label>
        Time signature:
        <select
          value={timeSignature}
          disabled={isSongPlaying}
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
          disabled={isSongPlaying}
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
  addNewBar,
  addBarToSong,
  setBpm,
  setIsSongPlaying,
  setSongGrid,
  setSongTime,
})(SongControls);
