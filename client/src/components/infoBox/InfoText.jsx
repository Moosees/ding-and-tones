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
  value = '',
}) => {
  const [editOpen, setEditOpen] = useState(false);

  const onClose = () => {
    handleClose();
    setEditOpen(false);
  };

  const onSave = () => {
    handleSave();
    setEditOpen(false);
  };

  return (
    <>
      {editOpen ? (
        <InfoTextEdit
          errors={errors}
          placeholder={placeholder}
          value={value}
          handleChange={handleChange}
          onClose={onClose}
          onSave={onSave}
          isValid={isValid}
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
