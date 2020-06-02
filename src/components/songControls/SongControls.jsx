import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { metreList } from '../../metre.data';
import { addNewBar } from '../../redux/bars/bars.actions';
import {
  addBarToSong,
  setBpm,
  setSongMetre,
  setSongSubdivision,
} from '../../redux/song/song.actions';
import ButtonMain from '../button/ButtonMain';
import InfoField from '../infoField/InfoField';
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
  const [metreOpen, setMetreOpen] = useState(false);
  const metreAndBpm = `${metreList[metre].name} @ ${bpm} beats per minute`;

  const handleNewBar = (metre, subdivision) => {
    const arrangementId = uuid();
    const barId = uuid();
    const newBar = createNewBar(metre, subdivision);

    addNewBar({ [barId]: newBar });
    addBarToSong({ barId, arrangementId });
  };

  return (
    <>
      {/* <label>
          BPM:
          <input
            type="number"
            min="50"
            max="160"
            value={bpm}
            disabled={isSongPlaying}
            onChange={(e) => setBpm(Number(e.target.value))}
          />
        </label> */}

      <InfoField label={metreAndBpm} onEdit={() => setMetreOpen(true)} />
      <InfoField label={<Slider />} />
      <ButtonMain
        label="Add bar"
        disabled={isSongPlaying}
        onClick={() => handleNewBar(metre, subdivision)}
      />
      {metreOpen && (
        <MetreControls
          metre={metre}
          subdivision={subdivision}
          setMetre={setSongMetre}
          setSubdivision={setSongSubdivision}
          disabled={isSongPlaying}
          onClick={() => handleNewBar(metre, subdivision)}
        />
      )}
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
