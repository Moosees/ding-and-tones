import React from 'react';
import { useSelector } from 'react-redux';
import { IconButton } from './button.styles';

const BtnIcon = ({
  color,
  disabled,
  editOnly,
  icon,
  onClick,
  position,
  small,
  title,
}) => {
  const isSongPlaying = useSelector(({ ui }) => ui.isSongPlaying);

  return (
    <IconButton
      aria-label={title}
      color={color ? `color${color}` : null}
      disabled={disabled || isSongPlaying}
      editOnly={editOnly}
      onClick={onClick}
      position={position}
      small={small}
      title={title}
    >
      <i className="material-icons">{icon}</i>
    </IconButton>
  );
};

export default BtnIcon;
