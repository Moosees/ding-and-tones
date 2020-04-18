import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addNewBar } from '../../redux/bars/bars.actions';
import {
  addBarToSong,
  setBpm,
  setIsSongPlaying,
  setSongMetre,
  setSongSubdivision,
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
  metre,
  setSongMetre,
}) => {
  const handlePlayPause = () => {
    setIsSongPlaying(!isSongPlaying);
    if (!isSongPlaying) playSong();
  };

  const handleNewBar = (metre, subdivision) => {
    const arrangementId = uuid();
    const barId = uuid();
    const newBar = createNewBar(metre, subdivision);

    addNewBar({ [barId]: newBar });
    addBarToSong({ barId, arrangementId });
  };

  return (
    <div>
      <button onClick={handlePlayPause}>
        {isSongPlaying ? 'Pause' : 'Play'}
      </button>
      <button
        disabled={isSongPlaying}
        onClick={() => handleNewBar(metre, subdivision)}
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
        metre={metre}
        subdivision={subdivision}
        setMetre={setSongMetre}
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
  metre: song.metre,
});

export default connect(mapStateToProps, {
  addNewBar,
  addBarToSong,
  setBpm,
  setIsSongPlaying,
  setSongSubdivision,
  setSongMetre,
})(SongControls);
