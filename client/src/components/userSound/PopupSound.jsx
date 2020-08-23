import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { sound } from '../../assets/sound';
import { selectSoundSource } from '../../redux/drum/drum.actions';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import Popup from '../popup/Popup';

const AudioOption = styled.div`
  background-color: ${({ theme }) => theme.colorBtnHeavy};
  border: 2px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.colorBtnConfirm : theme.colorBtnLight};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadowBtnHeavy};
  cursor: pointer;
  margin: 0 0 0.75rem;
  padding: 1rem;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

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
      <Buttons position="center">
        <BtnPrimary light label="Close" onClick={onClose} />
      </Buttons>
    </Popup>
  );
};

const mapStateToProps = ({ drum }) => ({
  audioPath: drum.audioPath,
});

export default connect(mapStateToProps, { selectSoundSource })(PopupSound);
