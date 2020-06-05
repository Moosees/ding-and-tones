import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { metreList } from '../../metre.data';
import { addNewBar } from '../../redux/bars/bars.actions';
import {
  addBarToSong,
  setSongMetre,
  setSongSubdivision,
} from '../../redux/song/song.actions';
import { toggleEditSong } from '../../redux/ui/ui.actions';
import BpmSlider from '../bpmSlider/BpmSlider';
import ButtonMain from '../button/ButtonMain';
import InfoField from '../infoField/InfoField';
import MetreControls from '../metreControls/MetreControls';
import { Buttons, ControlsContainer } from './songControls.styles';
import { createNewBar } from './songControls.utils';

const SongControls = ({
  addNewBar,
  addBarToSong,
  bpm,
  metre,
  isEditingSong,
  isSongPlaying,
  setSongSubdivision,
  setSongMetre,
  subdivision,
  toggleEditSong,
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
    <ControlsContainer>
      <InfoField
        label={metreAndBpm}
        reverse
        onEdit={() => setMetreOpen(true)}
      />
      <InfoField label={<BpmSlider />} />
      <Buttons>
        <ButtonMain
          label="Add bar"
          disabled={isSongPlaying}
          onClick={() => handleNewBar(metre, subdivision)}
        />
        <ButtonMain
          label={isEditingSong ? 'Lock' : 'Unlock'}
          onClick={toggleEditSong}
        />
      </Buttons>
      {metreOpen && (
        <MetreControls
          metre={metre}
          subdivision={subdivision}
          setMetre={setSongMetre}
          setSubdivision={setSongSubdivision}
          onClick={() => handleNewBar(metre, subdivision)}
        />
      )}
    </ControlsContainer>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  bpm: song.bpm,
  isSongPlaying: song.isSongPlaying,
  subdivision: song.subdivision,
  metre: song.metre,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps, {
  addNewBar,
  addBarToSong,
  setSongSubdivision,
  setSongMetre,
  toggleEditSong,
})(SongControls);
