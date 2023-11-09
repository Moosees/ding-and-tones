import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDrumMode } from '../../redux/drum/drum.actions';
import BtnIcon from '../shared/button/BtnIcon';
import { DrumModeContainer } from './intervals.styles';

const DrumMode = () => {
  const dispatch = useDispatch();
  const drumMode = useSelector(({ drum }) => drum.drumMode);

  const handleChangeDrumMode = (direction) => {
    dispatch(changeDrumMode(direction, drumMode));
  };

  return (
    <DrumModeContainer>
      <BtnIcon
        icon="keyboard_arrow_left"
        onClick={() => handleChangeDrumMode(-1)}
      />
      <span onClick={() => handleChangeDrumMode(1)}>Show {drumMode}</span>
      <BtnIcon
        icon="keyboard_arrow_right"
        onClick={() => handleChangeDrumMode(1)}
      />
    </DrumModeContainer>
  );
};

export default DrumMode;
