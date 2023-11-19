import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { metreList } from '../../../assets/metre';
import { addNewBar } from '../../../redux/song/song.actions';
import Buttons from '../../shared/button/Buttons';
import PopupNewBar from './PopupNewBar';
import { AddBarBtn, AddBarContainer } from './addBar.styles';
import { createNewBar, songToBarSubdivision } from './addBar.utils';

const AddBar = () => {
  const dispatch = useDispatch();
  const { metre, subdivision, isSongPlaying } = useSelector(({ song, ui }) => ({
    metre: song.info.metre,
    subdivision: song.info.subdivision,
    isSongPlaying: ui.isSongPlaying,
  }));

  const [newBarOpen, setNewBarOpen] = useState(false);
  const { nameShort } = metreList[metre];

  const handleNewBar = (metre, subdivisionsString) => {
    const subdivisions = subdivisionsString.map((s) => parseInt(s));
    dispatch(addNewBar(createNewBar(metre, subdivisions)));
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

export default AddBar;
