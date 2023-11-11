import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Metre from '../../shared/metreControls/Metre';
import Subdivision from '../../shared/metreControls/Subdivision';
import Popup from '../../shared/popup/Popup';
import { songToBarSubdivision } from './addBar.utils';

const PopupNewBar = ({ handleNewBar, onClose }) => {
  const { songSubdivision, songMetre } = useSelector(({ song }) => ({
    songSubdivision: song.info.subdivision,
    songMetre: song.info.metre,
  }));

  const [metre, setMetre] = useState(songMetre);
  const [subdivision, setSubdivision] = useState(
    songToBarSubdivision(songMetre, songSubdivision).join('-')
  );

  const handleSetMetre = (newMetre) => {
    setMetre(newMetre);
    setSubdivision(songToBarSubdivision(newMetre, 8).join('-'));
  };

  const handleConfirm = () => {
    handleNewBar(metre, subdivision.split('-'));
    onClose();
  };

  return (
    <Popup header="New bar" onClose={onClose}>
      <Metre metre={metre} setMetre={handleSetMetre} />
      <Subdivision
        type="bar"
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

export default PopupNewBar;
