import React, { useState } from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../../assets/metre';
import { addNewBar } from '../../../redux/song/song.actions';
import Buttons from '../../shared/button/Buttons';
import { AddBarBtn, AddBarContainer } from './addBar.styles';
import { createNewBar } from './addBar.utils';
import PopupNewBar from './PopupNewBar';

const AddBar = ({ addNewBar, isSongPlaying, songInfo }) => {
  const [newBarOpen, setNewBarOpen] = useState(false);
  const { metre, subdivision } = songInfo;
  const { nameShort } = metreList[metre];

  const handleNewBar = (metre, subdivision) => {
    addNewBar(createNewBar(metre, subdivision));
  };

  return (
    <AddBarContainer>
      <p>Add bar</p>
      <Buttons>
        <AddBarBtn
          disabled={isSongPlaying}
          isSongPlaying={isSongPlaying}
          onClick={() => handleNewBar(metre, subdivision)}
        >
          {nameShort}
        </AddBarBtn>
        <AddBarBtn
          disabled={isSongPlaying}
          isSongPlaying={isSongPlaying}
          onClick={() => setNewBarOpen(true)}
        >
          X/X
        </AddBarBtn>
      </Buttons>
      {newBarOpen && (
        <PopupNewBar
          onClose={() => setNewBarOpen(false)}
          handleNewBar={handleNewBar}
        />
      )}
    </AddBarContainer>
  );
};

const mapStateToProps = ({ scale, song, ui, user }) => ({
  isSongPlaying: ui.isSongPlaying,
  songInfo: song.info,
});

export default connect(mapStateToProps, { addNewBar })(AddBar);
