import React, { useState } from 'react';
import BtnControls from '../button/Controls';
import PopupSound from './PopupSound';

const UserSound = ({ reverse }) => {
  const [soundOpen, setSoundOpen] = useState(false);

  return (
    <>
      <BtnControls
        icon="hearing"
        iconAlign={3}
        label="Sound setup"
        onClick={() => setSoundOpen(true)}
        reverse={reverse}
      />
      {soundOpen && <PopupSound onClose={() => setSoundOpen(false)} />}
    </>
  );
};

export default UserSound;
