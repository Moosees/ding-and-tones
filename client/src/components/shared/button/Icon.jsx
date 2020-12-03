import React from 'react';
import { connect } from 'react-redux';
import { IconButton } from './button.styles';

const BtnIcon = ({
  color,
  disabled,
  editOnly,
  icon,
  isSongPlaying,
  onClick,
  position,
  title,
}) => {
  return (
    <IconButton
      aria-label={title}
      color={color ? `color${color}` : null}
      disabled={disabled || isSongPlaying}
      editOnly={editOnly}
      onClick={onClick}
      position={position}
      title={title}
    >
      <i className="material-icons">{icon}</i>
    </IconButton>
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(BtnIcon);
