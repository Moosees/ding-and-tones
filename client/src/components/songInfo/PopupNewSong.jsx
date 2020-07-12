import React, { useState } from 'react';
import { connect } from 'react-redux';
import { optionsDifficulty } from '../../constants';
import { updateSong } from '../../redux/song/song.actions';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import InfoBox from '../infoBox/InfoBox';
import InfoSelect from '../infoBox/InfoSelect';
import InfoTextEdit from '../infoBox/InfoTextEdit';
import MetreControls from '../metreControls/MetreControls';
import Popup from '../popup/Popup';

const PopupNewSong = ({ onClose, updateSong }) => {
  const [difficulty, setDifficulty] = useState(1);
  const [metre, setMetre] = useState('s44');
  const [subdivision, setSubdivision] = useState(4);
  const [title, setTitle] = useState('');

  const handleConfirm = () => {
    if (title) {
      const info = {
        difficulty,
        metre,
        subdivision,
        title,
        isOwner: false,
        songId: null,
      };

      updateSong({ info, bars: {}, beats: {}, arrangement: [] });
      onClose();
    }
  };

  return (
    <Popup onClose={onClose}>
      <InfoBox>
        <InfoTextEdit
          editOnly
          placeholder={'Title'}
          type="title"
          value={title}
          handleChange={setTitle}
        ></InfoTextEdit>
      </InfoBox>
      <InfoBox>
        <InfoSelect
          value={difficulty}
          handleChange={setDifficulty}
          options={optionsDifficulty}
        >
          {'Difficulty: '}
        </InfoSelect>
      </InfoBox>
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

export default connect(null, {
  updateSong,
})(PopupNewSong);
