import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSaveUserSoundMutation } from '../../../redux/api/api.slice';
import { selectAudioSrc } from '../../../redux/scale/scale.slice';
import BtnMenu from '../../shared/button/BtnMenu';
import PopupSound from './PopupSound';

const Sound = () => {
  const dispatch = useDispatch();
  const audioOption = useSelector(({ scale }) => scale.howls.audioSrc.option);
  const volume = useSelector(({ scale }) => scale.howls.volume);
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);
  const [saveUserSound] = useSaveUserSoundMutation();

  const [soundOpen, setSoundOpen] = useState(false);
  const [oldSound, setOldSound] = useState({ audioOption: null, volume: null });
  const [newOption, setNewOption] = useState(null);

  const handleOpen = () => {
    setOldSound({ audioOption, volume });
    setNewOption(audioOption);
    setSoundOpen(true);
  };

  const handleClose = () => {
    setSoundOpen(false);

    if (newOption !== audioOption) {
      dispatch(selectAudioSrc({ audioOption: newOption }));
    }

    if (
      !isSignedIn ||
      (oldSound.volume === volume && oldSound.audioOption === newOption)
    ) {
      return;
    }

    saveUserSound({ audioOption: newOption, volume });
  };

  return (
    <>
      <BtnMenu
        icon="hearing"
        iconAlign={-2}
        label="Sound setup"
        onClick={handleOpen}
      />
      {soundOpen && (
        <PopupSound
          onClose={handleClose}
          newOption={newOption}
          setNewOption={setNewOption}
        />
      )}
    </>
  );
};

export default Sound;
