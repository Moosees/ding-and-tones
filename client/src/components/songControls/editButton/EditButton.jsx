import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditSong } from '../../../redux/song/song.slice';
import BtnPrimary from '../../shared/button/BtnPrimary';

const EditButton = ({ light }) => {
  const dispatch = useDispatch();
  const isEditingSong = useSelector(({ song }) => song.ui.isEditingSong);
  const isSongPlaying = useSelector(
    ({ song }) => song.songPlayer.isSongPlaying
  );

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
