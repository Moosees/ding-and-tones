import React, { useState } from 'react';
import { connect } from 'react-redux';
import { optionsDifficulty } from '../../assets/constants';
import useValidate from '../../hooks/useValidate';
import { setSongState } from '../../redux/song/song.actions';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import InfoBox from '../infoBox/InfoBox';
import InfoSelect from '../infoBox/InfoSelect';
import InfoTextEdit from '../infoBox/InfoTextEdit';
import MetreControls from '../metreControls/MetreControls';
import Popup from '../popup/Popup';
import { useHistory } from 'react-router-dom';

const PopupNewSong = ({ onClose, setSongState }) => {
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
      onClose();
    }
  };

  return (
    <Popup header="New song" onClose={onClose}>
      <InfoBox>
        <InfoTextEdit
          editOnly
          errors={errors}
          placeholder={'Title'}
          value={title}
          handleChange={setTitle}
          isValid={isTitleValid}
        />
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
