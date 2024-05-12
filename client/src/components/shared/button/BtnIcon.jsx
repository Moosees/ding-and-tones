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
  const isSongPlaying = useSelector(
    ({ song }) => song.songPlayer.isSongPlaying
  );

  return (
    <IconButton
      aria-label={title}
      disabled={disabled || isSongPlaying}
      onClick={onClick}
      title={title} // tooltip
      $color={color ? `color${color}` : null}
      $editOnly={editOnly}
      $position={position}
      $small={small}
    >
      <i className="material-icons">{icon}</i>
    </IconButton>
  );
};

export default BtnIcon;
