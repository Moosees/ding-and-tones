import React, { cloneElement, useState } from 'react';
import styled from 'styled-components';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import Popup from './Popup';

const Label = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 2rem 1.5rem;
`;

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
          <Buttons position="center">
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
