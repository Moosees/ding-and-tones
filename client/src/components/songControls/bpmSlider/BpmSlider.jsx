import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateSongInfo } from '../../../redux/song/song.actions';
import './slider-override.css';

const Mark = styled.span`
  color: ${({ theme }) => theme.colorText};
  font-size: 1rem;
  position: relative;
  top: -7px;
`;

const marks = {
  60: <Mark>60</Mark>,
  80: <Mark>80</Mark>,
  100: <Mark>100</Mark>,
  120: <Mark>120</Mark>,
  140: <Mark>140</Mark>,
  160: <Mark>160</Mark>,
};

const BpmSlider = () => {
  const dispatch = useDispatch();
  const bpm = useSelector(({ song }) => song.info.bpm);
  const isSongPlaying = useSelector(({ ui }) => ui.isSongPlaying);

  return (
    <Slider
      value={bpm}
      step={5}
      min={40}
      max={180}
      marks={marks}
      included={false}
      disabled={isSongPlaying}
      onChange={(value) => dispatch(updateSongInfo({ bpm: value }))}
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
        marginTop: '-5px',
      }}
    />
  );
};

export default BpmSlider;
