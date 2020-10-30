import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { optionsDifficulty } from '../../../assets/constants';
import useValidate from '../../../hooks/useValidate';
import { setSongState } from '../../../redux/song/song.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoInput from '../../shared/infoBox/InfoInput';
import InfoSelect from '../../shared/infoBox/InfoSelect';
import MetreControls from '../../shared/metreControls/MetreControls';
import Popup from '../../shared/popup/Popup';

const PopupNewSong = ({ onClose, setSongState, updateValidation }) => {
  const [difficulty, setDifficulty] = useState(1);
  const [metre, setMetre] = useState('s44');
  const [subdivision, setSubdivision] = useState(4);

  const [title, setTitle, errors, isTitleValid] = useValidate('title');
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
      updateValidation(title);
      onClose();
    }
  };

  return (
    <Popup header="New song" onClose={onClose}>
      <InfoInput
        editOnly
        errors={errors}
        handleChange={setTitle}
        isValid={isTitleValid}
        placeholder={'Title'}
        value={title}
      />
      <InfoSelect
        value={difficulty}
        handleChange={setDifficulty}
        options={optionsDifficulty}
      >
        {'Difficulty: '}
      </InfoSelect>
      <MetreControls
        hasLabel
        metre={metre}
        subdivision={subdivision}
        setMetre={setMetre}
        setSubdivision={setSubdivision}
      />
      <Buttons position="center">
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
