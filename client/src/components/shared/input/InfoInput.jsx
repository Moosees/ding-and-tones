import React, { useEffect } from 'react';
import BtnIcon from '../button/Icon';
import { InfoLayout } from '../layout/layout.styles';
import { TextInput, TextInputLabel } from './input.styles';

const InfoInput = ({
  editOnly,
  errors,
  handleChange,
  isValid,
  onSave = () => {},
  onClose = () => {},
  placeholder,
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
    <InfoLayout>
      <TextInputLabel>
        <TextInput
          autoFocus
          aria-label={placeholder}
          errors={errors}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={''}
          value={value}
        />
        <span>{placeholder}</span>
        <BtnIcon
          color={isValid ? 'BtnConfirm' : 'BtnClear'}
          editOnly={editOnly}
          icon={isValid ? 'check_circle_outline' : 'not_interested'}
          title={isValid ? 'Save' : 'Cancel'}
          onClick={isValid ? onSave : onClose}
        />
      </TextInputLabel>
    </InfoLayout>
  );
};

export default InfoInput;
