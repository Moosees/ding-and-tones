import React, { useEffect } from 'react';
import BtnIcon from '../button/Icon';
import { InfoContainer, TextInput, TextInputLabel } from './infoBox.styles';

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
    <InfoContainer>
      <TextInputLabel>
        <TextInput
          autoFocus
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
    </InfoContainer>
  );
};

export default InfoInput;
