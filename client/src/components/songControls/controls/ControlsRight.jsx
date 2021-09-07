import React, { useState } from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../../assets/metre';
import { toggleCountOpen, toggleHandsOpen } from '../../../redux/ui/ui.actions';
import Buttons from '../../shared/button/Buttons';
import Checkbox from '../../shared/checkbox/Checkbox';
import InfoBox from '../../shared/layout/InfoBox';
import BpmSlider from '../bpmSlider/BpmSlider';
import EditButton from '../editButton/EditButton';
import PlayButton from '../playButton/PlayButton';
import PopupSongMetre from '../popups/PopupSongMetre';
import { ControlsContainer } from './controls.styles';

const ControlsRight = ({
  bpm,
  countOpen,
  handsOpen,
  metre,
  isSongPlaying,
  toggleCountOpen,
  toggleHandsOpen,
}) => {
  const [metreOpen, setMetreOpen] = useState(false);
  const metreAndBpm = `${metreList[metre].name} @ ${bpm} beats per minute`;

  return (
    <>
      <ControlsContainer>
        <InfoBox reverse onEdit={() => setMetreOpen(true)}>
          {metreAndBpm}
        </InfoBox>
        <InfoBox>
          <BpmSlider />
        </InfoBox>
        <Buttons>
          <PlayButton />
          <Checkbox
            asBtn
            checked={handsOpen}
            label="Hands"
            disabled={isSongPlaying}
            onChange={toggleHandsOpen}
          />
          <Checkbox
            asBtn
            checked={countOpen}
            label="Count"
            disabled={isSongPlaying}
            onChange={toggleCountOpen}
          />
          <EditButton />
        </Buttons>
      </ControlsContainer>
      {metreOpen && <PopupSongMetre onClose={() => setMetreOpen(false)} />}
    </>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  bpm: song.info.bpm,
  metre: song.info.metre,
  countOpen: ui.countOpen,
  handsOpen: ui.handsOpen,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, {
  toggleCountOpen,
  toggleHandsOpen,
})(ControlsRight);
