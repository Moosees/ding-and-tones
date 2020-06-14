import React, { useState } from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../metre.data';
import { addNewBar } from '../../redux/bars/bars.actions';
import {
  setSongMetre,
  setSongSubdivision,
} from '../../redux/song/song.actions';
import { toggleEditSong } from '../../redux/ui/ui.actions';
import BpmSlider from '../bpmSlider/BpmSlider';
import BtnPrimary from '../button/Primary';
import InfoField from '../infoField/InfoField';
import PopupNewBar from './PopupNewBar';
import PopupSongMetre from './PopupSongMetre';
import { Buttons, ControlsContainer } from './songControls.styles';
import { createNewBar } from './songControls.utils';

const SongControls = ({
  addNewBar,
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
  const [newBarOpen, setNewBarOpen] = useState(false);
  const metreAndBpm = `${metreList[metre].name} @ ${bpm} beats per minute`;

  const handleNewBar = (metre, subdivision) => {
    addNewBar(createNewBar(metre, subdivision));
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
        <BtnPrimary
          label="Add bar"
          disabled={isSongPlaying}
          onClick={() => handleNewBar(metre, subdivision)}
        />
        <BtnPrimary
          label="Add Custom Bar"
          disabled={isSongPlaying}
          onClick={() => setNewBarOpen(true)}
          handleNewBar={handleNewBar}
        />
        <BtnPrimary
          label={isEditingSong ? 'Lock' : 'Unlock'}
          onClick={toggleEditSong}
        />
      </Buttons>
      {metreOpen && <PopupSongMetre />}
      {newBarOpen && <PopupNewBar />}
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
  setSongSubdivision,
  setSongMetre,
  toggleEditSong,
})(SongControls);
