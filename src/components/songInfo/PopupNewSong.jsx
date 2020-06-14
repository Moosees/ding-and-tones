import React from 'react';
import { connect } from 'react-redux';
import {
  setSongDifficulty,
  setSongTitle,
  setSongMetre,
  setSongSubdivision,
} from '../../redux/song/song.actions';
import { clearSong } from '../../redux/bars/bars.actions';
import InfoField from '../infoField/InfoField';
import MetreControls from '../metreControls/MetreControls';
import Popup from '../popup/Popup';
import ButtonMain from '../button/ButtonMain';
import { useState } from 'react';

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
      <ButtonMain label="Confirm" onClick={handleConfirm} />
      <ButtonMain label="Cancel" onClick={onClose} />
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
