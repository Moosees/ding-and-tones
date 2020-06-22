import React, { useEffect, useState } from 'react';
import useValidate from '../../hooks/useValidate';
import { EditIcon, SaveIcon, TextInput } from './infoBox.styles';

const InfoText = ({
  children,
  editOnly,
  handleChange,
  placeholder,
  type,
  value,
}) => {
  const [editOpen, setEditOpen] = useState(editOnly);
  const [editValue, setEditValue] = useState(value);
  const [validate, handleValidate, errors, isEditing] = useValidate(
    editOnly ? value : editValue,
    editOnly ? handleChange : setEditValue,
    type
  );

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  const handleSave = () => {
    if (!isEditing) handleChange(editValue);
    setEditOpen(false);
  };

  return (
    <>
      {editOpen ? (
        <>
          <TextInput
            autoFocus
            errors={errors}
            placeholder={placeholder}
            value={validate}
            onChange={handleValidate}
          />
          {!editOnly && (
            <SaveIcon
              className="material-icons"
              disabled={isEditing}
              isEditing={isEditing}
              onClick={handleSave}
            >
              {isEditing ? 'not_interested' : 'check_circle_outline'}
            </SaveIcon>
          )}
        </>
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
