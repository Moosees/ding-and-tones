import React, { useState } from 'react';
import { connect } from 'react-redux';
import BtnPrimary from '../button/Primary';
import MetreControls from '../metreControls/MetreControls';
import Popup from '../popup/Popup';

const PopupNewBar = ({ handleNewBar, songMetre, onClose, songSubdivision }) => {
  const [metre, setMetre] = useState(songMetre);
  const [subdivision, setSubdivision] = useState(songSubdivision);

  const handleConfirm = () => {
    handleNewBar(metre, subdivision);
    onClose();
  };

  return (
    <Popup onClose={onClose}>
      <MetreControls
        column
        metre={metre}
        subdivision={subdivision}
        setMetre={setMetre}
        setSubdivision={setSubdivision}
      />
      <BtnPrimary label="Confirm" onClick={handleConfirm} />
      <BtnPrimary label="Cancel" onClick={onClose} />
    </Popup>
  );
};

const mapStateToProps = ({ song }) => ({
  songSubdivision: song.subdivision,
  songMetre: song.metre,
});

export default connect(mapStateToProps)(PopupNewBar);
