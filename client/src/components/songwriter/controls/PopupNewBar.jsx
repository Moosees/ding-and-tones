import React, { useState } from 'react';
import { connect } from 'react-redux';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import Metre from '../../shared/metreControls/Metre';
import Subdivision from '../../shared/metreControls/Subdivision';
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
      <Metre
        hasLabel
        metre={metre}
        subdivision={subdivision}
        setMetre={setMetre}
        setSubdivision={setSubdivision}
      />
      <Subdivision
        hasLabel
        metre={metre}
        subdivision={subdivision}
        setSubdivision={setSubdivision}
      />
      <Buttons position="center">
        <BtnPrimary label="Confirm" onClick={handleConfirm} />
        <BtnPrimary light label="Cancel" onClick={onClose} />
      </Buttons>
    </Popup>
  );
};

const mapStateToProps = ({ song }) => ({
  songSubdivision: song.info.subdivision,
  songMetre: song.info.metre,
});

export default connect(mapStateToProps)(PopupNewBar);
