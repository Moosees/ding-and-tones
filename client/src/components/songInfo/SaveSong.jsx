import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/alert/alert.actions';
import BtnPrimary from '../button/Primary';
import { parseSongForSaving } from './saveSong.utils';

const SaveSong = ({
  bars,
  isSongPlaying,
  saveAs = true,
  setAlert,
  scale,
  song,
}) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);

    const songUpdate = parseSongForSaving(bars, song, scale, saveAs);

    axios
      .post('/song', songUpdate)
      .then((res) => {
        if (res.status !== 201) throw new Error(`Status code: ${res.status}`);
        // const { isOwner, songId, title } = res.data;

        console.log(res.data.arrangement);

        setIsSaving(false);
        setAlert(`${song.title} saved`);
      })
      .catch((error) => {
        setIsSaving(false);
        setAlert('Save failed');
      });
  };

  return (
    <BtnPrimary
      disabled={isSongPlaying || isSaving}
      label="Save Song"
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

export default connect(mapStateToProps, { setAlert })(SaveSong);
