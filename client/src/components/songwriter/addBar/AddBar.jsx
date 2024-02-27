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
  const metre = useSelector(({ song }) => song.info.metre);
  const subdivision = useSelector(({ song }) => song.info.subdivision);
  const isSongPlaying = useSelector(({ ui }) => ui.isSongPlaying);

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
          onClick={() =>
            handleNewBar(metre, songToBarSubdivision(metre, subdivision))
          }
          $isSongPlaying={isSongPlaying}
        >
          {nameShort}
        </AddBarBtn>
        <AddBarBtn
          disabled={isSongPlaying}
          onClick={() => setNewBarOpen(true)}
          $isSongPlaying={isSongPlaying}
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
