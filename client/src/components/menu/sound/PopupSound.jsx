import React from 'react';
import { connect } from 'react-redux';
import { sound } from '../../../assets/sound';
import { selectSoundSource } from '../../../redux/drum/drum.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import Popup from '../../shared/popup/Popup';
import { AudioOption, Credits } from './sound.styles';

const PopupSound = ({ audioPath, onClose, selectSoundSource }) => {
  const getAudioOptions = () =>
    sound.map((option, i) => (
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
