import React, { useState } from 'react';
import { connect } from 'react-redux';
import { togglePrivateSong } from '../../../redux/song/song.actions';
import BtnPrimary from '../../shared/button/Primary';
import Checkbox from '../../shared/checkbox/Checkbox';
import Popup from '../../shared/popup/Popup';

const PopupSaveSong = ({
  hasNewScale,
  isOwner,
  isPrivate,
  newScaleId,
  newScaleName,
  oldScaleId,
  oldScaleName,
  onClose,
  onSave,
  title,
  togglePrivateSong,
}) => {
  const [selectedScale, setSelectedScale] = useState(
    !isOwner && !oldScaleId ? newScaleId : oldScaleId
  );

  return (
    <Popup header="Save song" onClose={onClose}>
      <Popup.Section>
        <Popup.SubHeading>Song Title:</Popup.SubHeading>
        {title}
      </Popup.Section>
      <Popup.Section>
        <Popup.SubHeading>Song Settings:</Popup.SubHeading>
        <Checkbox
          label="Private song"
          checked={isPrivate}
          onChange={togglePrivateSong}
        />
      </Popup.Section>
      <Popup.Section>
        <Popup.SubHeading>Linked Scale:</Popup.SubHeading>
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
          label="No linked scale"
          checked={!selectedScale}
          onChange={() => setSelectedScale(null)}
        />
      </Popup.Section>
      <Popup.Buttons>
        <BtnPrimary
          label="Save New"
          onClick={() => onSave(selectedScale, true)}
        />
        <BtnPrimary
          label="Save"
          disabled={!isOwner}
          onClick={() => onSave(selectedScale, false)}
        />
        <BtnPrimary light label="Cancel" onClick={onClose} />
      </Popup.Buttons>
    </Popup>
  );
};

const mapStateToProps = ({ scale, song }) => ({
  newScaleId: scale.ui.scaleId,
  newScaleName: `${scale.info.rootName} ${scale.info.name}`,
  isOwner: song.ui.isOwner,
  isPrivate: song.ui.isPrivate,
  oldScaleId: song.ui.scaleId,
  oldScaleName: song.ui.scaleName,
});

export default connect(mapStateToProps, { togglePrivateSong })(PopupSaveSong);
