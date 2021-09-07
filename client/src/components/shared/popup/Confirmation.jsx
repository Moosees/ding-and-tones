import React, { cloneElement, useState } from 'react';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import Popup from './Popup';
import { Label } from './popup.styles';

const Confirmation = ({ children, header, label, onConfirm }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setPopupOpen(false);
  };

  return (
    <>
      {cloneElement(children, {
        onClick: () => setPopupOpen(true),
      })}
      {popupOpen && (
        <Popup header={header} onClose={() => setPopupOpen(false)}>
          <Label>{label}</Label>
          <Buttons>
            <BtnPrimary label="Confirm" onClick={handleConfirm} />
            <BtnPrimary
              light
              label="Cancel"
              onClick={() => setPopupOpen(false)}
            />
          </Buttons>
        </Popup>
      )}
    </>
  );
};

export default Confirmation;
