import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditSong } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/BtnPrimary';

const EditButton = ({ light }) => {
  const dispatch = useDispatch();
  const { isEditingSong, isSongPlaying } = useSelector(({ ui }) => ({
    isEditingSong: ui.isEditingSong,
    isSongPlaying: ui.isSongPlaying,
  }));

  return (
    <BtnPrimary
      light={light}
      label={isEditingSong ? 'Tablature' : 'Edit'}
      disabled={isSongPlaying}
      onClick={() => dispatch(toggleEditSong())}
    />
  );
};

export default EditButton;
