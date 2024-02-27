import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserSound } from '../../../redux/howls/howls.actions';
import BtnMenu from '../../shared/button/BtnMenu';
import PopupSound from './PopupSound';

const Sound = () => {
  const dispatch = useDispatch();
  const audioSrc = useSelector(({ howls }) => howls.info.audioSrc);
  const volume = useSelector(({ howls }) => howls.info.volume);

  const [soundOpen, setSoundOpen] = useState(false);
  const [oldSound, setOldSound] = useState({ audioOption: null, volume: null });

  const handleOpen = () => {
    setOldSound({ audioSrc, volume });
    setSoundOpen(true);
  };

  const handleClose = () => {
    setSoundOpen(false);

    if (oldSound.volume !== volume || oldSound.audioSrc !== audioSrc) {
      dispatch(saveUserSound());
    }
  };

  return (
    <>
      <BtnMenu
        icon="hearing"
        iconAlign={-2}
        label="Sound setup"
        onClick={handleOpen}
      />
      {soundOpen && <PopupSound onClose={handleClose} />}
    </>
  );
};

export default Sound;
