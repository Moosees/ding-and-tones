import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { metreList } from '../../../assets/metre';
import { toggleCount, toggleHands } from '../../../redux/song/song.slice';
import Buttons from '../../shared/button/Buttons';
import Checkbox from '../../shared/checkbox/Checkbox';
import InfoBox from '../../shared/layout/InfoBox';
import BpmSlider from '../bpmSlider/BpmSlider';
import EditButton from '../editButton/EditButton';
import PlayButton from '../playButton/PlayButton';
import PopupSongMetre from '../popups/PopupSongMetre';
import { ControlsContainer } from './controls.styles';

const ControlsRight = () => {
  const dispatch = useDispatch();
  const { bpm, metre, countOpen, handsOpen, isSongPlaying } = useSelector(
    ({ song, ui }) => ({
      bpm: song.info.bpm,
      metre: song.info.metre,
      countOpen: ui.countOpen,
      handsOpen: ui.handsOpen,
      isSongPlaying: ui.isSongPlaying,
    })
  );

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
            onChange={() => dispatch(toggleHands())}
          />
          <Checkbox
            asBtn
            checked={countOpen}
            label="Count"
            disabled={isSongPlaying}
            onChange={() => dispatch(toggleCount())}
          />
          <EditButton />
        </Buttons>
      </ControlsContainer>
      {metreOpen && <PopupSongMetre onClose={() => setMetreOpen(false)} />}
    </>
  );
};

export default ControlsRight;
