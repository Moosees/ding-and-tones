import React, { useState } from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../../assets/metre';
import { addNewBar } from '../../../redux/song/song.actions';
import { toggleCountOpen, toggleHandsOpen } from '../../../redux/ui/ui.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoBox from '../../shared/layout/InfoBox';
import BpmSlider from '../bpmSlider/BpmSlider';
import { ControlsContainer } from './controls.styles';
import { createNewBar } from './controls.utils';
import PopupNewBar from './PopupNewBar';
import PopupSongMetre from './PopupSongMetre';

const Controls = ({
  addNewBar,
  bpm,
  countOpen,
  handsOpen,
  metre,
  isSongPlaying,
  subdivision,
  toggleCountOpen,
  toggleEditSong,
  toggleHandsOpen,
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
        <InfoBox reverse onEdit={() => setMetreOpen(true)}>
          {metreAndBpm}
        </InfoBox>
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
            label="Custom Bar"
            disabled={isSongPlaying}
            onClick={() => setNewBarOpen(true)}
            handleNewBar={handleNewBar}
          />
          <BtnPrimary
            checkbox
            checked={handsOpen}
            label="Hands"
            disabled={isSongPlaying}
            onClick={toggleHandsOpen}
          />
          <BtnPrimary
            checkbox
            checked={countOpen}
            label="Count"
            disabled={isSongPlaying}
            onClick={toggleCountOpen}
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
  bpm: song.info.bpm,
  subdivision: song.info.subdivision,
  metre: song.info.metre,
  countOpen: ui.countOpen,
  handsOpen: ui.handsOpen,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, {
  addNewBar,
  toggleCountOpen,
  toggleHandsOpen,
})(Controls);
