import React from 'react';
import { connect } from 'react-redux';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoBox from '../../shared/layout/InfoBox';
import Popup from '../../shared/popup/Popup';

const PopupSaveSong = ({
  hasNewScale,
  onClose,
  onSave,
  scaleId,
  scaleName,
  title,
}) => {
  return (
    <Popup header="Save song" onClose={onClose}>
      {hasNewScale && <p>Current scale does not match saved scale</p>}
      <InfoBox>Title: {title}</InfoBox>
      <InfoBox>Scale: {scaleId ? scaleName : 'N/A - Scale not saved'}</InfoBox>
      <Buttons position="center">
        <BtnPrimary label="Save" onClick={onSave} />
        <BtnPrimary light label="Cancel" onClick={onClose} />
      </Buttons>
    </Popup>
  );
};

const mapStateToProps = ({ scale }) => ({
  scaleId: scale.ui.scaleId,
  scaleName: `${scale.info.rootName} ${scale.info.name}`,
});

export default connect(mapStateToProps, {})(PopupSaveSong);
