import React from 'react';
import { connect } from 'react-redux';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import InfoBox from '../infoBox/InfoBox';
import Popup from '../popup/Popup';

const PopupSound = ({ onClose }) => {
  const handleSave = () => {
    console.log('save sound');
  };

  return (
    <Popup header="Sound" onClose={onClose}>
      <InfoBox>select sound</InfoBox>
      <Buttons position="center">
        <BtnPrimary label="Save" onClick={handleSave} />
        <BtnPrimary light label="Cancel" onClick={onClose} />
      </Buttons>
    </Popup>
  );
};

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(PopupSound);
