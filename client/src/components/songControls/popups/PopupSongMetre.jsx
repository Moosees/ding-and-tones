import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useValidate from '../../../hooks/useValidate';
import { updateSongInfo } from '../../../redux/song/song.slice';
import BtnPrimary from '../../shared/button/BtnPrimary';
import InfoInput from '../../shared/input/InfoInput';
import Metre from '../../shared/metreControls/Metre';
import Subdivision from '../../shared/metreControls/Subdivision';
import Popup from '../../shared/popup/Popup';

const PopupSongMetre = ({ onClose }) => {
  const dispatch = useDispatch();
  const bpm = useSelector(({ song }) => song.info.bpm);
  const metre = useSelector(({ song }) => song.info.metre);
  const subdivision = useSelector(({ song }) => song.info.subdivision);

  const [newMetre, setNewMetre] = useState(metre);
  const [newSubdivision, setNewSubdivision] = useState(subdivision);
  const [newBpm, setNewBpm, newBpmErrors, isNewBpmValid] = useValidate(
    'bpm',
    bpm
  );

  const handleSetSubdivision = (subdivision) =>
    setNewSubdivision(parseInt(subdivision));

  const handleConfirm = () => {
    if (isNewBpmValid) {
      dispatch(
        updateSongInfo({
          songInfo: {
            bpm: newBpm,
            metre: newMetre,
            subdivision: newSubdivision,
          },
        })
      );
      onClose();
    }
  };

  return (
    <Popup header="Metre" onClose={onClose}>
      <Metre
        metre={newMetre}
        setMetre={setNewMetre}
        setSubdivision={handleSetSubdivision}
      />
      <Subdivision
        type="song"
        metre={newMetre}
        subdivision={newSubdivision}
        setSubdivision={handleSetSubdivision}
      />
      <InfoInput
        large
        editOnly
        handleChange={setNewBpm}
        isValid={isNewBpmValid}
        label={newBpmErrors.length ? newBpmErrors[0] : 'Bpm:'}
        value={newBpm}
      />
      <Popup.Flex>
        <BtnPrimary
          disabled={!isNewBpmValid}
          label="Confirm"
          onClick={handleConfirm}
        />
        <BtnPrimary light label="Cancel" onClick={onClose} />
      </Popup.Flex>
    </Popup>
  );
};

export default PopupSongMetre;
