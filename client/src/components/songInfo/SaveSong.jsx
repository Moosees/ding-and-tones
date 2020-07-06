import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/alert/alert.actions';
import { updateSongInfo } from '../../redux/song/song.actions';
import BtnPrimary from '../button/Primary';
import { parseSongForSaving } from './saveSong.utils';

const SaveSong = ({
  bars,
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

    const songUpdate = parseSongForSaving(bars, song, scale);

    axios
      .post('/song', songUpdate)
      .then((res) => {
        if (res.status !== 200) throw new Error(`Status code: ${res.status}`);
        const { isOwner, songId, title } = res.data;

        updateSongInfo({ songId, isOwner });
        setAlert(`${title} saved`);
        setIsSaving(false);
      })
      .catch((error) => {
        setAlert('Save failed');
        setIsSaving(false);
      });
  };

  return (
    <BtnPrimary
      disabled={isSongPlaying || isSaving}
      label={saveAs ? 'Save as new' : 'Save changes'}
      onClick={handleSave}
    />
  );
};

const mapStateToProps = ({ bars, scale, song, ui }) => ({
  bars,
  scale,
  song,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, { setAlert, updateSongInfo })(SaveSong);
