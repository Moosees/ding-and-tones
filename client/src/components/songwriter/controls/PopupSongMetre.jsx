import React, { useState } from 'react';
import { connect } from 'react-redux';
import useValidate from '../../../hooks/useValidate';
import { updateSongInfo } from '../../../redux/song/song.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoBox from '../../shared/infoBox/InfoBox';
import InfoTextEdit from '../../shared/infoBox/InfoTextEdit';
import MetreControls from '../../shared/metreControls/MetreControls';
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
      <InfoBox>
        <InfoTextEdit
          editOnly
          errors={newBpmErrors}
          handleChange={setNewBpm}
          isValid={isNewBpmValid}
          placeholder="Beats per minute"
          value={newBpm}
        />
      </InfoBox>
      <MetreControls
        metre={newMetre}
        subdivision={newSubdivision}
        setMetre={setNewMetre}
        setSubdivision={setNewSubdivision}
      />
      <Buttons position="center">
        <BtnPrimary label="Confirm" onClick={handleConfirm} />
        <BtnPrimary light label="Cancel" onClick={onClose} />
      </Buttons>
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
