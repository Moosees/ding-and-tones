import React, { useEffect } from 'react';
import { SaveIcon, TextInput } from './infoBox.styles';

const InfoTextEdit = ({
  errors,
  handleChange,
  isValid,
  onSave = () => {},
  onClose = () => {},
  placeholder,
  type,
  value,
}) => {
  // cleanup
  useEffect(() => () => onClose, [onClose]);

  const handleKeyDown = (e) => {
    // enter
    if (e.keyCode === 13) return onSave();

    // escape
    if (e.keyCode === 27) return onClose();
  };

  return (
    <>
      <TextInput
        autoFocus
        errors={errors}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        value={value}
      />
      <SaveIcon
        className="material-icons"
        isValid={isValid}
        onClick={isValid ? onSave : onClose}
      >
        {isValid ? 'check_circle_outline' : 'not_interested'}
      </SaveIcon>
    </>
  );
};

export default InfoTextEdit;
