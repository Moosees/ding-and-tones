import React, { useState } from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../../assets/metre';
import { addNewBar } from '../../../redux/song/song.actions';
import Buttons from '../../shared/button/Buttons';
import { AddBarBtn, AddBarContainer } from './addBar.styles';
import { createNewBar, songToBarSubdivision } from './addBar.utils';
import PopupNewBar from './PopupNewBar';

const AddBar = ({ addNewBar, isSongPlaying, songInfo }) => {
  const [newBarOpen, setNewBarOpen] = useState(false);
  const { metre, subdivision } = songInfo;
  const { nameShort } = metreList[metre];

  const handleNewBar = (metre, subdivisions) => {
    addNewBar(createNewBar(metre, subdivisions));
  };

  return (
    <AddBarContainer>
      <p>Add bar</p>
      <Buttons>
        <AddBarBtn
          disabled={isSongPlaying}
          isSongPlaying={isSongPlaying}
          onClick={() =>
            handleNewBar(metre, songToBarSubdivision(metre, subdivision))
          }
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
