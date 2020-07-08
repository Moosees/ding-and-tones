import React, { useEffect, useState } from 'react';
import useValidate from '../../hooks/useValidate';
import { SaveIcon, TextInput } from './infoBox.styles';

const InfoTextEdit = ({
  handleChange,
  onSave,
  onClose,
  placeholder,
  type,
  value,
}) => {
  const [text, setText] = useState(value);
  const [validateValue, handleValidate, errors, isValid] = useValidate(
    handleChange ? value : text,
    handleChange || setText,
    type
  );

  useEffect(() => onClose, [onClose]);

  const handleKeyDown = (e) => {
    // enter
    if (e.keyCode === 13) return trySave();

    // escape
    if (e.keyCode === 27) return onClose();
  };

  const trySave = () => {
    if (isValid) onSave(text);
  };

  return (
    <>
      <TextInput
        autoFocus
        errors={errors}
        placeholder={placeholder}
        value={validateValue}
        onChange={handleValidate}
        onKeyDown={handleChange ? undefined : handleKeyDown}
      />
      <SaveIcon
        className="material-icons"
        editOnly={!!handleChange}
        isValid={isValid}
        onClick={handleChange ? undefined : trySave}
      >
        {isValid ? 'check_circle_outline' : 'not_interested'}
      </SaveIcon>
    </>
  );
};

export default InfoTextEdit;
