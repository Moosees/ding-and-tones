import React, { useState } from 'react';
import BtnIcon from '../button/Icon';
import { InfoContainer } from '../layout/layout.styles';
import InfoInput from './InfoInput';

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
    if (!isValid) return;
    handleSave();
    setEditOpen(false);
  };

  return (
    <>
      {editOpen ? (
        <InfoInput
          errors={errors}
          handleChange={handleChange}
          isValid={isValid}
          onClose={onClose}
          onSave={onSave}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <InfoContainer>
          {children}
          <BtnIcon title="Edit" icon="edit" onClick={() => setEditOpen(true)} />
        </InfoContainer>
      )}
    </>
  );
};

export default InfoText;
