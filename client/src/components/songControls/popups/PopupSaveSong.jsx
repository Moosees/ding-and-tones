import React from 'react';
import { connect } from 'react-redux';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import Popup from '../../shared/popup/Popup';

const PopupSaveSong = ({ onClose }) => {
  return (
    <Popup header="Save song" onClose={onClose}>
      <Buttons position="center">
        <BtnPrimary label="Save" />
        <BtnPrimary light label="Cancel" onClick={onClose} />
      </Buttons>
    </Popup>
  );
};

export default connect(null, {})(PopupSaveSong);
