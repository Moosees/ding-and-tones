import React, { useState } from 'react';
import { connect } from 'react-redux';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import Checkbox from '../../shared/checkbox/Checkbox';
import Popup from '../../shared/popup/Popup';

const PopupSaveSong = ({
  hasNewScale,
  isFirstSave,
  newScaleId,
  newScaleName,
  oldScaleId,
  oldScaleName,
  onClose,
  onSave,
  title,
}) => {
  const [selectedScale, setSelectedScale] = useState(
    isFirstSave && !oldScaleId ? newScaleId : oldScaleId
  );

  return (
    <Popup header="Save song" onClose={onClose}>
      <p>Title: {title}</p>
      <p>
        Scale:
        {oldScaleId && (
          <Checkbox
            label={oldScaleName}
            checked={selectedScale === oldScaleId}
            onChange={() => setSelectedScale(oldScaleId)}
          />
        )}
        {hasNewScale && newScaleId && (
          <Checkbox
            label={newScaleName}
            checked={selectedScale === newScaleId}
            onChange={() => setSelectedScale(newScaleId)}
          />
        )}
        <Checkbox
          label="No preferred scale"
          checked={!selectedScale}
          onChange={() => setSelectedScale(null)}
        />
      </p>
      <Buttons position="center">
        <BtnPrimary label="Save" onClick={() => onSave(selectedScale)} />
        <BtnPrimary light label="Cancel" onClick={onClose} />
      </Buttons>
    </Popup>
  );
};

const mapStateToProps = ({ scale, song }) => ({
  newScaleId: scale.ui.scaleId,
  newScaleName: `${scale.info.rootName} ${scale.info.name}`,
  oldScaleId: song.ui.scaleId,
  oldScaleName: song.ui.scaleName,
});

export default connect(mapStateToProps)(PopupSaveSong);
