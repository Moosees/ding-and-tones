import React, { useState } from 'react';
import { connect } from 'react-redux';
import useValidate from '../../../hooks/useValidate';
import { updateSongInfo } from '../../../redux/song/song.actions';
import BtnPrimary from '../../shared/button/Primary';
import InfoInput from '../../shared/input/InfoInput';
import Metre from '../../shared/metreControls/Metre';
import Subdivision from '../../shared/metreControls/Subdivision';
import Popup from '../../shared/popup/Popup';

const PopupSongMetre = ({
  bpm,
  handleNewBar,
  metre,
  onClose,
  subdivision,
  updateSongInfo,
}) => {
  const [newMetre, setNewMetre] = useState(metre);
  const [newSubdivision, setNewSubdivision] = useState(subdivision);
  const [newBpm, setNewBpm, newBpmErrors, isNewBpmValid] = useValidate(
    'bpm',
    bpm
  );

  const handleConfirm = () => {
    if (isNewBpmValid) {
      updateSongInfo({
        bpm: newBpm,
        metre: newMetre,
        subdivision: newSubdivision,
      });
      onClose();
    }
  };

  return (
    <Popup header="Metre" onClose={onClose}>
      <Metre
        metre={newMetre}
        subdivision={newSubdivision}
        setMetre={setNewMetre}
        setSubdivision={setNewSubdivision}
      />
      <Subdivision
        type="song"
        metre={newMetre}
        subdivision={newSubdivision}
        setSubdivision={setNewSubdivision}
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

const mapStateToProps = ({ song }) => ({
  bpm: song.info.bpm,
  metre: song.info.metre,
  subdivision: song.info.subdivision,
});

export default connect(mapStateToProps, {
  updateSongInfo,
})(PopupSongMetre);
