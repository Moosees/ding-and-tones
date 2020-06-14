import React, { useState } from 'react';
import { connect } from 'react-redux';
import { clearSong } from '../../redux/bars/bars.actions';
import {
  setSongDifficulty,
  setSongMetre,
  setSongSubdivision,
  setSongTitle,
} from '../../redux/song/song.actions';
import BtnPrimary from '../button/Primary';
import InfoField from '../infoField/InfoField';
import MetreControls from '../metreControls/MetreControls';
import Popup from '../popup/Popup';

const PopupNewSong = ({
  clearSong,
  onClose,
  setSongDifficulty,
  setSongMetre,
  setSongSubdivision,
  setSongTitle,
}) => {
  const [difficulty, setDifficulty] = useState('Difficulty');
  const [metre, setMetre] = useState('s44');
  const [subdivision, setSubdivision] = useState(4);
  const [title, setTitle] = useState('Title');

  const handleConfirm = () => {
    setSongDifficulty(difficulty);
    setSongMetre(metre);
    setSongSubdivision(subdivision);
    setSongTitle(title);
    clearSong();
    onClose();
  };

  return (
    <Popup onClose={onClose}>
      <InfoField label={title} onEdit={setTitle} input />
      <InfoField label={difficulty} onEdit={setDifficulty} />
      <MetreControls
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

export default connect(null, {
  clearSong,
  setSongDifficulty,
  setSongSubdivision,
  setSongMetre,
  setSongTitle,
})(PopupNewSong);
