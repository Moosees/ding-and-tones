import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditSong } from '../../../redux/song/song.slice';
import BtnPrimary from '../../shared/button/BtnPrimary';

const EditButton = ({ light }) => {
  const dispatch = useDispatch();
  const isEditingSong = useSelector(({ ui }) => ui.isEditingSong);
  const isSongPlaying = useSelector(({ ui }) => ui.isSongPlaying);

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
