import React, { useState } from 'react';
import BtnIcon from '../button/Icon';
import InfoTextEdit from './InfoTextEdit';

const InfoText = ({
  children,
  errors = [],
  handleChange = () => {},
  handleClose = () => {},
  handleSave = () => {},
  isValid = true,
  placeholder = '',
  size,
  value = '',
}) => {
  const [editOpen, setEditOpen] = useState(false);

  const onClose = () => {
    handleClose();
    setEditOpen(false);
  };

  const onSave = () => {
    if (!isValid) return;
    handleSave();
    setEditOpen(false);
  };

  return (
    <>
      {editOpen ? (
        <InfoTextEdit
          errors={errors}
          handleChange={handleChange}
          isValid={isValid}
          onClose={onClose}
          onSave={onSave}
          placeholder={placeholder}
          size={size}
          value={value}
        />
      ) : (
        <>
          {children}
          <BtnIcon label="edit" icon="edit" onClick={() => setEditOpen(true)} />
        </>
      )}
    </>
  );
};

export default InfoText;
