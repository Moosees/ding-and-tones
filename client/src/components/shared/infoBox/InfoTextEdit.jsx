import React, { useEffect } from 'react';
import BtnIcon from '../button/Icon';
import { TextInput } from './infoBox.styles';

const InfoTextEdit = ({
  editOnly,
  errors,
  handleChange,
  isValid,
  onSave = () => {},
  onClose = () => {},
  placeholder,
  size,
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
        size={size}
        value={value}
      />
      <BtnIcon
        color={isValid ? 'BtnConfirm' : 'BtnClear'}
        editOnly={editOnly}
        icon={isValid ? 'check_circle_outline' : 'not_interested'}
        label={isValid ? 'save' : 'cancel'}
        onClick={isValid ? onSave : onClose}
      />
    </>
  );
};

export default InfoTextEdit;
