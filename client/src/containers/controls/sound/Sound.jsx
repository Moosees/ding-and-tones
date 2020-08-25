import React, { useState } from 'react';
import BtnControls from '../../../components/button/Controls';
import PopupSound from './PopupSound';

const Sound = ({ reverse }) => {
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

export default Sound;
