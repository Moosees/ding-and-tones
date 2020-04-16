import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addNewBar } from '../../redux/bars/bars.actions';
import {
  addBarToSong,
  setBpm,
  setIsSongPlaying,
  setSongSubdivision,
  setSongTime,
} from '../../redux/song/song.actions';
import MetreControls from '../metreControls/MetreControls';
import { createNewBar, playSong } from './songControls.utils';

const SongControls = ({
  addNewBar,
  addBarToSong,
  bpm,
  setBpm,
  isSongPlaying,
  setIsSongPlaying,
  subdivision,
  setSongSubdivision,
  timeSignature,
  setSongTime,
}) => {
  const handlePlayPause = () => {
    setIsSongPlaying(!isSongPlaying);
    if (!isSongPlaying) playSong();
  };

  const handleNewBar = (timeSignature, subdivision) => {
    const arrangementId = uuid();
    const barId = uuid();
    const measure = createNewBar(timeSignature, subdivision);

    addNewBar({
      [barId]: {
        timeSignature,
        subdivision,
        measure,
      },
    });

    addBarToSong({ barId, arrangementId });
  };

  return (
    <div>
      <button onClick={handlePlayPause}>
        {isSongPlaying ? 'Pause' : 'Play'}
      </button>
      <button
        disabled={isSongPlaying}
        onClick={() => handleNewBar(timeSignature, subdivision)}
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
      <MetreControls
        timeSignature={timeSignature}
        subdivision={subdivision}
        setTimeSignature={setSongTime}
        setSubdivision={setSongSubdivision}
        disabled={isSongPlaying}
      />
    </div>
  );
};

const mapStateToProps = ({ song }) => ({
  bpm: song.bpm,
  isSongPlaying: song.isSongPlaying,
  subdivision: song.subdivision,
  timeSignature: song.timeSignature,
});

export default connect(mapStateToProps, {
  addNewBar,
  addBarToSong,
  setBpm,
  setIsSongPlaying,
  setSongSubdivision,
  setSongTime,
})(SongControls);
