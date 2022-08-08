import React, { useState } from 'react';
import { connect } from 'react-redux';
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
        large
        hasLabel
        metre={metre}
        subdivision={subdivision}
        setMetre={setMetre}
        setSubdivision={setSubdivision}
      />
      <Subdivision
        large
        hasLabel
        metre={metre}
        subdivision={subdivision}
        setSubdivision={setSubdivision}
      />
      <Popup.Flex>
        <BtnPrimary label="Confirm" onClick={handleConfirm} />
        <BtnPrimary light label="Cancel" onClick={onClose} />
      </Popup.Flex>
    </Popup>
  );
};

const mapStateToProps = ({ song }) => ({
  songSubdivision: song.info.subdivision,
  songMetre: song.info.metre,
});

export default connect(mapStateToProps)(PopupNewBar);
