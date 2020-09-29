import React, { useState } from 'react';
import BtnControls from '../../shared/button/Controls';
import PopupSound from './PopupSound';

const Sound = () => {
  const [soundOpen, setSoundOpen] = useState(false);

  return (
    <>
      <BtnControls
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
