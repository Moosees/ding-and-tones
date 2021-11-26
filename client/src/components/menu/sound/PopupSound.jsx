import React from 'react';
import { connect } from 'react-redux';
import audioOptions from '../../../assets/sound/audioOptions';
import { selectSoundSource } from '../../../redux/drum/drum.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoBox from '../../shared/layout/InfoBox';
import Popup from '../../shared/popup/Popup';
import { AudioOption, Credits } from './sound.styles';
import VolumeSlider from './VolumeSlider';

const PopupSound = ({ audioPath, onClose, selectSoundSource }) => {
  const getAudioOptions = () =>
    audioOptions.map((option, i) => (
      <AudioOption
        key={i}
        isSelected={option.path === audioPath}
        onClick={() => selectSoundSource(option.path)}
      >
        {option.label}
      </AudioOption>
    ));

  return (
    <Popup header="Sound" onClose={onClose}>
      <Popup.SubHeading>Volume</Popup.SubHeading>
      <InfoBox>
        <VolumeSlider />
      </InfoBox>
      <Popup.SubHeading>Sound Set</Popup.SubHeading>
      {getAudioOptions()}
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
      <Buttons>
        <BtnPrimary light label="Close" onClick={onClose} />
      </Buttons>
    </Popup>
  );
};

const mapStateToProps = ({ drum }) => ({
  audioPath: drum.audioPath,
});

export default connect(mapStateToProps, { selectSoundSource })(PopupSound);
