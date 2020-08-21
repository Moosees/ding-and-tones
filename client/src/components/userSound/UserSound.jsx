import React, { useState } from 'react';
import BtnControls from '../button/Controls';
import PopupSound from './PopupSound';

const UserSound = ({ reverse }) => {
  const [soundOpen, setSoundOpen] = useState(false);

  return (
    <>
      <BtnControls
        reverse={reverse}
        label="Sound"
        icon="hearing"
        onClick={() => setSoundOpen(true)}
      />
      {soundOpen && <PopupSound onClose={() => setSoundOpen(false)} />}
    </>
  );
};

export default UserSound;
