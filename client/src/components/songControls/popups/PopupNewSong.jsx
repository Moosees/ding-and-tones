import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { optionsDifficulty } from '../../../assets/constants';
import useValidate from '../../../hooks/useValidate';
import { createNewSong } from '../../../redux/song/song.actions';
import BtnPrimary from '../../shared/button/BtnPrimary';
import InfoInput from '../../shared/input/InfoInput';
import Metre from '../../shared/metreControls/Metre';
import Subdivision from '../../shared/metreControls/Subdivision';
import Popup from '../../shared/popup/Popup';
import Select from '../../shared/select/Select';

const PopupNewSong = ({ onClose }) => {
  const dispatch = useDispatch();

  const [difficulty, setDifficulty] = useState(1);
  const [metre, setMetre] = useState('s44');
  const [subdivision, setSubdivision] = useState(8);

  const [title, setTitle, titleErrors, isTitleValid] = useValidate('songTitle');
  const navigate = useNavigate();

  const handleSetSubdivision = (subdivision) =>
    setSubdivision(parseInt(subdivision));

  const handleConfirm = () => {
    if (isTitleValid) {
      const info = {
        bpm: 80,
        difficulty,
        metre,
        subdivision,
        title,
      };
      const ui = {
        composer: 'Anonymous',
        isOwner: false,
        songId: null,
      };

      dispatch(
        createNewSong({ info, ui, bars: {}, beats: {}, arrangement: [] })
      );
      navigate('/song');
      onClose();
    }
  };

  return (
    <Popup header="New song" onClose={onClose}>
      <InfoInput
        autoFocus
        large
        editOnly
        handleChange={setTitle}
        isValid={isTitleValid}
        label={titleErrors.length ? titleErrors[0] : 'Song title:'}
        value={title}
      />
      <Metre
        metre={metre}
        setMetre={setMetre}
        setSubdivision={handleSetSubdivision}
      />
      <Subdivision
        type="song"
        metre={metre}
        subdivision={subdivision}
        setSubdivision={handleSetSubdivision}
      />
      <Select
        large
        value={difficulty}
        handleChange={setDifficulty}
        options={optionsDifficulty}
        label="Difficulty: "
      />
      <Popup.Flex>
        <BtnPrimary
          label="Confirm"
          disabled={!isTitleValid}
          onClick={handleConfirm}
        />
        <BtnPrimary light label="Cancel" onClick={onClose} />
      </Popup.Flex>
    </Popup>
  );
};

export default PopupNewSong;
