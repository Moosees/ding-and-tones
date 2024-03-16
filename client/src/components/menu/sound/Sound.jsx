import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAudioOption } from '../../../assets/sound/audioOptions';
import { useSaveUserSoundMutation } from '../../../redux/user/userSlice';
import BtnMenu from '../../shared/button/BtnMenu';
import PopupSound from './PopupSound';

const Sound = () => {
  const audioSrc = useSelector(({ howls }) => howls.info.audioSrc);
  const volume = useSelector(({ howls }) => howls.info.volume);
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);
  const [saveUserSound] = useSaveUserSoundMutation();

  const [soundOpen, setSoundOpen] = useState(false);
  const [oldSound, setOldSound] = useState({ audioSrc: null, volume: null });

  const handleOpen = () => {
    setOldSound({ audioSrc, volume });
    setSoundOpen(true);
  };

  const handleClose = () => {
    setSoundOpen(false);

    if (
      !isSignedIn ||
      (oldSound.volume === volume && oldSound.audioSrc === audioSrc)
    ) {
      return;
    }

    saveUserSound({ audioOption: getAudioOption(audioSrc), volume });
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
