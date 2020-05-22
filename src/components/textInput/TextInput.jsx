import React, { useState } from 'react';

const TextInput = ({ value, setValue, disabled }) => {
  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    if (isEditing) {
      setValue(text);
      setIsEditing(false);
    } else {
      setText(value);
      setIsEditing(true);
    }
  };

  return (
    <>
      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={disabled}
        />
      ) : (
        <input value={value} readOnly />
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </>
  );
};

export default TextInput;
