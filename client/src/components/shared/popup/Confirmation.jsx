import React, { cloneElement, useState } from 'react';
import BtnPrimary from '../button/BtnPrimary';
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
          <Popup.Flex>
            <BtnPrimary label="Confirm" onClick={handleConfirm} />
            <BtnPrimary
              light
              label="Cancel"
              onClick={() => setPopupOpen(false)}
            />
          </Popup.Flex>
        </Popup>
      )}
    </>
  );
};

export default Confirmation;
