import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { audioSources } from '../../../assets/sound/audioOptions';
import { selectSoundSource } from '../../../redux/howls/howls.actions';
import BtnPrimary from '../../shared/button/Primary';
import InfoBox from '../../shared/layout/InfoBox';
import Popup from '../../shared/popup/Popup';
import VolumeSlider from './VolumeSlider';
import { AudioOption, Credits } from './sound.styles';

const PopupSound = ({ onClose }) => {
  const dispatch = useDispatch();
  const audioSrc = useSelector(({ howls }) => howls.info.audioSrc);

  const optionList = useMemo(
    () =>
      audioSources.map((option, i) => (
        <AudioOption
          key={i}
          isSelected={option.path === audioSrc.path}
          onClick={() => dispatch(selectSoundSource(option))}
        >
          {option.label}
        </AudioOption>
      )),
    [dispatch, audioSrc]
  );

  return (
    <Popup header="Sound" onClose={onClose}>
      <Popup.SubHeading>Volume</Popup.SubHeading>
      <InfoBox>
        <VolumeSlider />
      </InfoBox>
      <Popup.SubHeading>Sound Set</Popup.SubHeading>
      {optionList}
      <Credits>
        Handpan samples by{' '}
        <a
          href="https://www.instagram.com/connorshafran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @connorshafran
        </a>
      </Credits>
      <Popup.Flex>
        <BtnPrimary light label="Close" onClick={onClose} />
      </Popup.Flex>
    </Popup>
  );
};

export default PopupSound;
