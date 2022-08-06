import React, { useState } from 'react';
import BtnPrimary from '../../shared/button/Primary';
import PopupRotation from './PopupRotation';

const Rotation = ({ rotateDrum, rotation }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <BtnPrimary label="Rotate" onClick={() => setPopupOpen(true)} />
      {popupOpen && <PopupRotation onClose={() => setPopupOpen(false)} />}
    </>
  );
};

export default Rotation;
