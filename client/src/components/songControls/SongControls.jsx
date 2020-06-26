import React, { useState } from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../metre.data';
import { addNewBar } from '../../redux/bars/bars.actions';
import { toggleEditSong } from '../../redux/ui/ui.actions';
import BpmSlider from '../bpmSlider/BpmSlider';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import InfoBox from '../infoBox/InfoBox';
import PopupNewBar from './PopupNewBar';
import PopupSongMetre from './PopupSongMetre';
import { ControlsContainer } from './songControls.styles';
import { createNewBar } from './songControls.utils';

const SongControls = ({
  addNewBar,
  bpm,
  metre,
  isEditingSong,
  isSongPlaying,
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
    <>
      <ControlsContainer>
        <InfoBox reverse>{metreAndBpm}</InfoBox>
        <InfoBox>
          <BpmSlider />
        </InfoBox>
        <Buttons position="flex-start">
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
      </ControlsContainer>
      {metreOpen && <PopupSongMetre onClose={() => setMetreOpen(false)} />}
      {newBarOpen && (
        <PopupNewBar
          onClose={() => setNewBarOpen(false)}
          handleNewBar={handleNewBar}
        />
      )}
    </>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  bpm: song.bpm,
  subdivision: song.subdivision,
  metre: song.metre,
  isEditingSong: ui.isEditingSong,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, {
  addNewBar,
  toggleEditSong,
})(SongControls);
