import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewBar } from '../../../redux/song/song.actions';
import BtnPrimary from '../../shared/button/Primary';
import { createNewBar } from './addBar.utils';
import PopupNewBar from './PopupNewBar';

const AddBar = ({ addNewBar, isSongPlaying, songInfo }) => {
  const [newBarOpen, setNewBarOpen] = useState(false);
  const { metre, subdivision } = songInfo;

  const handleNewBar = (metre, subdivision) => {
    addNewBar(createNewBar(metre, subdivision));
  };

  return (
    <>
      <div>
        <BtnPrimary
          label="Add Bar"
          disabled={isSongPlaying}
          onClick={() => handleNewBar(metre, subdivision)}
        />
        <BtnPrimary
          label="Custom Bar"
          disabled={isSongPlaying}
          onClick={() => setNewBarOpen(true)}
          handleNewBar={handleNewBar}
        />
      </div>
      {newBarOpen && (
        <PopupNewBar
          onClose={() => setNewBarOpen(false)}
          handleNewBar={handleNewBar}
        />
      )}
    </>
  );
};

const mapStateToProps = ({ scale, song, ui, user }) => ({
  isSongPlaying: ui.isSongPlaying,
  songInfo: song.info,
});

export default connect(mapStateToProps, { addNewBar })(AddBar);
