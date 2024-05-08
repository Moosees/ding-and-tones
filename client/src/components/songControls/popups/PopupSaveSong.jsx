import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePrivateSong } from '../../../redux/song/song.slice';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Checkbox from '../../shared/checkbox/Checkbox';
import Popup from '../../shared/popup/Popup';

const PopupSaveSong = ({ onClose, onSave, title }) => {
  const dispatch = useDispatch();
  const {
    newScaleId,
    newScaleName,
    isOwner,
    isPrivate,
    oldScaleId,
    oldScaleName,
  } = useSelector(({ scale, song }) => ({
    newScaleId: scale.ui.scaleId,
    newScaleName: `${scale.info.rootName} ${scale.info.name}`,
    isOwner: song.ui.isOwner,
    isPrivate: song.ui.isPrivate,
    oldScaleId: song.ui.scaleId,
    oldScaleName: song.ui.scaleName,
  }));

  const [selectedScale, setSelectedScale] = useState(
    !isOwner && !oldScaleId ? newScaleId : oldScaleId
  );
  const hasNewScale = newScaleId !== oldScaleId;

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
          onChange={() => dispatch(togglePrivateSong())}
        />
      </Popup.Section>
      <Popup.Section>
        <Popup.SubHeading>Linked Scale:</Popup.SubHeading>
        {oldScaleId && (
          <Checkbox
            label={`${oldScaleName} (keep scale)`}
            checked={selectedScale === oldScaleId}
            onChange={() => setSelectedScale(oldScaleId)}
          />
        )}
        {hasNewScale && newScaleId && (
          <Checkbox
            label={`${newScaleName} (change scale)`}
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
      <Popup.Flex>
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
      </Popup.Flex>
    </Popup>
  );
};

export default PopupSaveSong;
