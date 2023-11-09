import React from 'react';
import { connect } from 'react-redux';
import { toggleEditSong } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/BtnPrimary';

const EditButton = ({
  isEditingSong,
  isSongPlaying,
  light,
  toggleEditSong,
}) => {
  return (
    <BtnPrimary
      light={light}
      label={isEditingSong ? 'Tablature' : 'Edit'}
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
