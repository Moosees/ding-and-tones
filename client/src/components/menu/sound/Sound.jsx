import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSaveUserSoundMutation } from '../../../redux/user/user.api';
import BtnMenu from '../../shared/button/BtnMenu';
import PopupSound from './PopupSound';

const Sound = () => {
  const audioOption = useSelector(({ howls }) => howls.audioSrc.option);
  const volume = useSelector(({ howls }) => howls.volume);
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);
  const [saveUserSound] = useSaveUserSoundMutation();

  const [soundOpen, setSoundOpen] = useState(false);
  const [oldSound, setOldSound] = useState({ audioOption: null, volume: null });

  const handleOpen = () => {
    setOldSound({ audioOption, volume });
    setSoundOpen(true);
  };

  const handleClose = () => {
    setSoundOpen(false);

    if (
      !isSignedIn ||
      (oldSound.volume === volume && oldSound.audioOption === audioOption)
    ) {
      return;
    }

    saveUserSound({ audioOption, volume });
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
