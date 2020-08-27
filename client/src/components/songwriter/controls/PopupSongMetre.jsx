import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateSongInfo } from '../../../redux/song/song.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import MetreControls from '../../shared/metreControls/MetreControls';
import Popup from '../../shared/popup/Popup';

const PopupSongMetre = ({
  handleNewBar,
  metre,
  onClose,
  subdivision,
  updateSongInfo,
}) => {
  const [newMetre, setNewMetre] = useState(metre);
  const [newSubdivision, setNewSubdivision] = useState(subdivision);

  const handleConfirm = () => {
    updateSongInfo({ metre: newMetre, subdivision: newSubdivision });
    onClose();
  };

  return (
    <Popup header="Metre" onClose={onClose}>
      <MetreControls
        metre={newMetre}
        subdivision={newSubdivision}
        setMetre={setNewMetre}
        setSubdivision={setNewSubdivision}
      />
      <Buttons position="center">
        <BtnPrimary label="Confirm" onClick={handleConfirm} />
        <BtnPrimary label="Cancel" onClick={onClose} />
      </Buttons>
    </Popup>
  );
};

const mapStateToProps = ({ song }) => ({
  subdivision: song.info.subdivision,
  metre: song.info.metre,
});

export default connect(mapStateToProps, {
  updateSongInfo,
})(PopupSongMetre);
