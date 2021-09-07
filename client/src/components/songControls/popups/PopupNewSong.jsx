import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { optionsDifficulty } from '../../../assets/constants';
import useValidate from '../../../hooks/useValidate';
import { setSongState } from '../../../redux/song/song.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoInput from '../../shared/input/InfoInput';
import Metre from '../../shared/metreControls/Metre';
import Subdivision from '../../shared/metreControls/Subdivision';
import Popup from '../../shared/popup/Popup';
import Select from '../../shared/select/Select';

const PopupNewSong = ({ onClose, setSongState }) => {
  const [difficulty, setDifficulty] = useState(1);
  const [metre, setMetre] = useState('s44');
  const [subdivision, setSubdivision] = useState(4);

  const [title, setTitle, titleErrors, isTitleValid] = useValidate('title');
  const { push } = useHistory();

  const handleConfirm = () => {
    if (isTitleValid) {
      const info = {
        bpm: 100,
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

      setSongState({ info, ui, bars: {}, beats: {}, arrangement: [] });
      push('/song');
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
        subdivision={subdivision}
        setMetre={setMetre}
        setSubdivision={setSubdivision}
      />
      <Subdivision
        metre={metre}
        subdivision={subdivision}
        setSubdivision={setSubdivision}
      />
      <Select
        large
        value={difficulty}
        handleChange={setDifficulty}
        options={optionsDifficulty}
        label="Difficulty: "
      />
      <Buttons>
        <BtnPrimary
          label="Confirm"
          disabled={!isTitleValid}
          onClick={handleConfirm}
        />
        <BtnPrimary light label="Cancel" onClick={onClose} />
      </Buttons>
    </Popup>
  );
};

export default connect(null, {
  setSongState,
})(PopupNewSong);
