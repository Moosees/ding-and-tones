import React from 'react';
import { connect } from 'react-redux';
import { IconButton } from './button.styles';

const BtnIcon = ({
  color,
  disabled,
  editOnly,
  label,
  icon,
  isSongPlaying,
  onClick,
  reverse,
  title,
}) => {
  return (
    <IconButton
      aria-label={label}
      color={color ? `color${color}` : null}
      disabled={disabled || isSongPlaying}
      editOnly={editOnly}
      onClick={onClick}
      reverse={reverse}
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
