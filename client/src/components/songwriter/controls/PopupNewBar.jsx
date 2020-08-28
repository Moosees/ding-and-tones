import React, { useState } from 'react';
import { connect } from 'react-redux';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import MetreControls from '../../shared/metreControls/MetreControls';
import Popup from '../../shared/popup/Popup';

const PopupNewBar = ({ handleNewBar, songMetre, onClose, songSubdivision }) => {
  const [metre, setMetre] = useState(songMetre);
  const [subdivision, setSubdivision] = useState(songSubdivision);

  const handleConfirm = () => {
    handleNewBar(metre, subdivision);
    onClose();
  };

  return (
    <Popup header="New bar" onClose={onClose}>
      <MetreControls
        metre={metre}
        subdivision={subdivision}
        setMetre={setMetre}
        setSubdivision={setSubdivision}
      />
      <Buttons position="center">
        <BtnPrimary label="Confirm" onClick={handleConfirm} />
        <BtnPrimary label="Cancel" onClick={onClose} />
      </Buttons>
    </Popup>
  );
};

const mapStateToProps = ({ song }) => ({
  songSubdivision: song.info.subdivision,
  songMetre: song.info.metre,
});

export default connect(mapStateToProps)(PopupNewBar);