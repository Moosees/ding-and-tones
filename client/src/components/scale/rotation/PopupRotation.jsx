import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rotateDrum } from '../../../redux/scale/scale.actions';
import MiniDrum from '../../drum/MiniDrum';
import BtnPrimary from '../../shared/button/Primary';
import InfoBox from '../../shared/layout/InfoBox';
import Popup from '../../shared/popup/Popup';
import './slider-override.css';

const Mark = styled.span`
  color: ${({ theme }) => theme.colorText};
  font-size: 1rem;
  position: relative;
  top: -7px;
`;

const marks = {
  0: <Mark>-180</Mark>,
  45: <Mark>-135</Mark>,
  90: <Mark>-90</Mark>,
  135: <Mark>-45</Mark>,
  180: <Mark>0</Mark>,
  225: <Mark>45</Mark>,
  270: <Mark>90</Mark>,
  315: <Mark>135</Mark>,
  360: <Mark>180</Mark>,
};

const PopupRotation = ({ onClose, rotateDrum, rotation }) => (
  <Popup header="Rotate Drum" onClose={onClose}>
    <InfoBox>
      <Slider
        value={rotation}
        step={1}
        min={0}
        max={360}
        marks={marks}
        included={false}
        onChange={(angle) => rotateDrum(angle)}
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
    </InfoBox>
    <Popup.Flex>
      <MiniDrum />
    </Popup.Flex>
    <Popup.Flex>
      <BtnPrimary label="Close" onClick={onClose} />
    </Popup.Flex>
  </Popup>
);

const mapStateToProps = ({ scale }) => ({
  rotation: scale.info.rotation,
});

export default connect(mapStateToProps, { rotateDrum })(PopupRotation);
