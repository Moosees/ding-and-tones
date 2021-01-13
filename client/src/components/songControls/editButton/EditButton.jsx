import React from 'react';
import { connect } from 'react-redux';
import { toggleEditSong } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/Primary';

const EditButton = ({
  isEditingSong,
  isSongPlaying,
  light,
  toggleEditSong,
}) => {
  return (
    <BtnPrimary
      light={light}
      label={isEditingSong ? 'View Song' : 'Edit Song'}
      disabled={isSongPlaying}
      onClick={toggleEditSong}
    />
  );
};

const mapStateToProps = ({ ui }) => ({
  isEditingSong: ui.isEditingSong,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, { toggleEditSong })(EditButton);
