import React, { useEffect, useState } from 'react';
import { EditIcon } from './infoBox.styles';
import InfoTextEdit from './InfoTextEdit';

const InfoText = ({ children, handleChange, placeholder, type, value }) => {
  const [editOpen, setEditOpen] = useState(false);

  // close edit mode if something else changes text
  useEffect(() => {
    setEditOpen(false);
  }, [value]);

  const handleClose = () => {
    setEditOpen(false);
  };

  const handleOpen = () => {
    setEditOpen(true);
  };

  const handleSave = (value) => {
    handleChange(value);
    handleClose();
  };

  return (
    <>
      {editOpen ? (
        <InfoTextEdit
          placeholder={placeholder}
          type={type}
          value={value}
          onClose={handleClose}
          onSave={handleSave}
        />
      ) : (
        <>
          {children}
          <EditIcon className="material-icons" onClick={handleOpen}>
            edit
          </EditIcon>
        </>
      )}
    </>
  );
};

export default InfoText;
