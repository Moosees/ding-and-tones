import React, { useState } from 'react';
import { EditIcon } from './infoBox.styles';
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
          <EditIcon
            className="material-icons"
            onClick={() => setEditOpen(true)}
          >
            edit
          </EditIcon>
        </>
      )}
    </>
  );
};

export default InfoText;
