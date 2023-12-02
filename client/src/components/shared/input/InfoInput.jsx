import React, { useEffect } from 'react';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import BtnIcon from '../button/BtnIcon';
import { InfoLayout } from '../layout/layout.styles';
import { TextInput } from './input.styles';

const InfoInput = ({
  autoFocus,
  editOnly,
  errors,
  handleChange,
  isValid,
  label,
  large,
  onSave = () => {},
  onClose = () => {},
  value,
}) => {
  // cleanup
  useEffect(() => () => onClose, [onClose]);

  const handleKeyDown = (e) => {
    if (!editOnly || e.code !== beatOptionToKeyCode['escape'])
      e.stopPropagation();

    if (e.code === beatOptionToKeyCode['enter']) return onSave();

    if (e.code === beatOptionToKeyCode['escape']) return onClose();
  };

  return (
    <InfoLayout as="label" $large={large}>
      <TextInput
        autoFocus={!editOnly || autoFocus}
        aria-label={label}
        // errors={errors}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
      />
      <span>{label}</span>
      <BtnIcon
        color={isValid ? 'BtnConfirm' : 'BtnClear'}
        editOnly={editOnly}
        icon={isValid ? 'check_circle_outline' : 'not_interested'}
        title={isValid ? 'Save' : 'Cancel'}
        onClick={isValid ? onSave : onClose}
      />
    </InfoLayout>
  );
};

export default InfoInput;
