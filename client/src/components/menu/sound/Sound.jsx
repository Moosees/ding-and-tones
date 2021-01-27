import React, { useState } from 'react';
import BtnMenu from '../../shared/button/Menu';
import PopupSound from './PopupSound';

const Sound = () => {
  const [soundOpen, setSoundOpen] = useState(false);

  return (
    <>
      <BtnMenu
        icon="hearing"
        iconAlign={-2}
        label="Sound setup"
        onClick={() => setSoundOpen(true)}
      />
      {soundOpen && <PopupSound onClose={() => setSoundOpen(false)} />}
    </>
  );
};

export default Sound;
