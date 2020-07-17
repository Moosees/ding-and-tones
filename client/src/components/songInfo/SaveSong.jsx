import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/alert/alert.actions';
import { updateSongInfo } from '../../redux/song/song.actions';
import BtnPrimary from '../button/Primary';
import { parseSongForSaving } from './saveSong.utils';

const SaveSong = ({
  isSaveable,
  isSongPlaying,
  saveAs,
  setAlert,
  scale,
  song,
  updateSongInfo,
}) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);

    const songUpdate = parseSongForSaving(song, scale, saveAs);

    axios
      .post('/song', songUpdate)
      .then((res) => {
        if (res.status === 200) {
          const { isOwner, songId, title } = res.data;

          updateSongInfo({ songId, isOwner });
          setAlert(`"${title}" saved`);
          setIsSaving(false);
        }
      })
      .catch((error) => {
        setAlert('Save failed');
        setIsSaving(false);
      });
  };

  return (
    <BtnPrimary
      disabled={isSongPlaying || isSaving || !isSaveable}
      label={saveAs ? 'Save as new' : 'Save changes'}
      onClick={handleSave}
    />
  );
};

const mapStateToProps = ({ scale, song, ui }) => ({
  scale,
  song,
  isSaveable: ui.isSaveable,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, { setAlert, updateSongInfo })(SaveSong);
