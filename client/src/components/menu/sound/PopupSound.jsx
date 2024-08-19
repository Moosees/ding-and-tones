import React from 'react';
import { audioSources } from '../../../assets/sound/audioOptions';
import BtnPrimary from '../../shared/button/BtnPrimary';
import InfoBox from '../../shared/layout/InfoBox';
import Popup from '../../shared/popup/Popup';
import VolumeSlider from './VolumeSlider';
import { AudioOption, Credits } from './sound.styles';

const PopupSound = ({ onClose, newOption, setNewOption }) => {
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
          onClick={() => setNewOption(option)}
          $isSelected={option === newOption}
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
