import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addNewBar } from '../../redux/bars/bars.actions';
import {
  addBarToSong,
  setBpm,
  setSongMetre,
  setSongSubdivision,
} from '../../redux/song/song.actions';
import MetreControls from '../metreControls/MetreControls';
import { createNewBar } from './songControls.utils';

const SongControls = ({
  addNewBar,
  addBarToSong,
  bpm,
  setBpm,
  isSongPlaying,
  subdivision,
  setSongSubdivision,
  metre,
  setSongMetre,
}) => {
  const handleNewBar = (metre, subdivision) => {
    const arrangementId = uuid();
    const barId = uuid();
    const newBar = createNewBar(metre, subdivision);

    addNewBar({ [barId]: newBar });
    addBarToSong({ barId, arrangementId });
  };

  return (
    <>
      <div>
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
      </div>
      <MetreControls
        metre={metre}
        subdivision={subdivision}
        setMetre={setSongMetre}
        setSubdivision={setSongSubdivision}
        disabled={isSongPlaying}
      />
    </>
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
  setSongSubdivision,
  setSongMetre,
})(SongControls);
