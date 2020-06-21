import React, { useState } from 'react';
import useValidate from '../../hooks/useValidate';
import { EditIcon, SaveIcon, TextInput } from './styles';

const InfoText = ({
  children,
  editOnly,
  handleChange,
  placeholder,
  type,
  value,
}) => {
  const [isEditing, setIsEditing] = useState(editOnly);
  const [validate, handleValidate, errors] = useValidate(
    value,
    handleChange,
    type
  );
  return (
    <>
      {isEditing ? (
        <>
          <TextInput
            autoFocus
            errors={errors}
            placeholder={placeholder}
            value={validate}
            onChange={handleValidate}
          />
          {!editOnly && <SaveIcon onClick={() => setIsEditing(false)} />}
        </>
      ) : (
        <>
          {children}
          <EditIcon onClick={() => setIsEditing(true)} />
        </>
      )}
    </>
  );
};

export default InfoText;
