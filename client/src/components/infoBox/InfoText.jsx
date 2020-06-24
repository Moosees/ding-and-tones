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
  const [validate, handleValidate, errors, isValid] = useValidate(
    editOnly ? value : editValue,
    editOnly ? handleChange : setEditValue,
    type
  );

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  const handleKeyDown = (e) => {
    // enter
    if (e.keyCode === 13 && isValid) return handleSave();

    // escape
    if (e.keyCode === 27 && !editOnly) return setEditOpen(false);
  };

  const handleSave = () => {
    if (isValid) handleChange(editValue);
    if (!editOnly) setEditOpen(false);
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
            onKeyDown={handleKeyDown}
          />
          {editOpen && (
            <SaveIcon
              className="material-icons"
              disabled={!isValid}
              isValid={isValid}
              onClick={handleSave}
            >
              {isValid ? 'check_circle_outline' : 'not_interested'}
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
