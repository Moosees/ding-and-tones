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
  onClose,
  onSave,
  title,
}) => {
  const [selectedScale, setSelectedScale] = useState(
    isFirstSave ? newScaleId : oldScaleId
  );

  return (
    <Popup header="Save song" onClose={onClose}>
      <p>Title: {title}</p>
      {!isFirstSave && hasNewScale && (
        <p>
          Loaded scale does not match scale assigned to song, do you want to
          change assigned scale?
        </p>
      )}
      <p>
        Scale:
        {!isFirstSave && oldScaleId && (
          <Checkbox
            label="Keep - saved scale name"
            checked={selectedScale === oldScaleId}
            onChange={() => setSelectedScale(oldScaleId)}
          />
        )}
        {newScaleId && (
          <Checkbox
            label={`${isFirstSave ? '' : 'Change - '}${newScaleName}`}
            checked={selectedScale === newScaleId}
            onChange={() => setSelectedScale(newScaleId)}
          />
        )}
        <Checkbox
          label="Don't assign a scale to song"
          checked={!selectedScale}
          onChange={() => setSelectedScale(null)}
        />
      </p>
      <Buttons position="center">
        <BtnPrimary label="Save" onClick={onSave} />
        <BtnPrimary light label="Cancel" onClick={onClose} />
      </Buttons>
    </Popup>
  );
};

const mapStateToProps = ({ scale, song }) => ({
  newScaleId: scale.ui.scaleId,
  newScaleName: `${scale.info.rootName} ${scale.info.name}`,
  oldScaleId: song.ui.scaleId,
});

export default connect(mapStateToProps, {})(PopupSaveSong);
