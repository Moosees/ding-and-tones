import React, { useState } from 'react';
import { EditIcon, SaveIcon, TextInput } from './styles';

const InfoText = ({ children, editOnly, handleChange, placeholder, value }) => {
  const [isEditing, setIsEditing] = useState(editOnly);
  return (
    <>
      {isEditing ? (
        <>
          <TextInput
            autoFocus
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
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
