import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { audioSources } from '../../../assets/sound/audioOptions';
import { selectAudioSrc } from '../../../redux/howls/howls.actions';
import BtnPrimary from '../../shared/button/BtnPrimary';
import InfoBox from '../../shared/layout/InfoBox';
import Popup from '../../shared/popup/Popup';
import VolumeSlider from './VolumeSlider';
import { AudioOption, Credits } from './sound.styles';

const PopupSound = ({ onClose }) => {
  const dispatch = useDispatch();
  const audioOption = useSelector(({ howls }) => howls.audioSrc.option);

  return (
    <Popup header="Sound" onClose={onClose}>
      <Popup.SubHeading>Volume</Popup.SubHeading>
      <InfoBox>
        <VolumeSlider />
      </InfoBox>
      <Popup.SubHeading>Sound Set</Popup.SubHeading>
      {audioSources.map(({ option, label }) => (
        <AudioOption
          key={option}
          onClick={() => dispatch(selectAudioSrc(option))}
          $isSelected={option === audioOption}
        >
          {label}
        </AudioOption>
      ))}
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
