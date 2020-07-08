import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setIsSaveable } from '../../redux/ui/ui.actions';
import { EditIcon } from './infoBox.styles';
import InfoTextEdit from './InfoTextEdit';
import { useEffect } from 'react';

const InfoText = ({
  children,
  handleChange,
  placeholder,
  setIsSaveable,
  type,
  value,
}) => {
  const [editOpen, setEditOpen] = useState(false);

  // close edit mode if something else changes text
  useEffect(() => {
    setEditOpen(false);
  }, [value]);

  const handleClose = () => {
    setIsSaveable(true);
    setEditOpen(false);
  };

  const handleOpen = () => {
    setIsSaveable(false);
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

export default connect(null, { setIsSaveable })(InfoText);
