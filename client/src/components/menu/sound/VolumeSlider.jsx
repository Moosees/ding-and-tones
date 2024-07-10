import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setVolume } from '../../../redux/howls/howls.actions';
import './slider-override.css';

const Mark = styled.span`
  color: ${({ theme }) => theme.colorText};
  font-size: 1rem;
  position: relative;
  top: -7px;
`;

const marks = {
  0.0: <Mark>0</Mark>,
  0.2: <Mark>20</Mark>,
  0.4: <Mark>40</Mark>,
  0.6: <Mark>60</Mark>,
  0.8: <Mark>80</Mark>,
  1.0: <Mark>100</Mark>,
};

const VolumeSlider = () => {
  const dispatch = useDispatch();
  const volume = useSelector(({ scale }) => scale.howls.volume);

  return (
    <Slider
      value={volume}
      step={0.1}
      min={0.0}
      max={1.0}
      marks={marks}
      included={false}
      onChange={(value) => dispatch(setVolume(value))}
      handleStyle={{
        backgroundColor: '#888',
        border: '1px solid #444',
        height: '2rem',
        marginTop: '-8px',
        width: '2rem',
      }}
      railStyle={{
        backgroundColor: 'rgba(0,0,60,0.3)',
      }}
      style={{
        backgroundColor: 'rgba(0,0,0,0)',
        cursor: 'pointer',
        margin: '-5px 5px 0',
      }}
    />
  );
};

export default VolumeSlider;
