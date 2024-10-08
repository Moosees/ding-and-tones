import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MAX_NOTE_VALUE, MIN_NOTE_VALUE } from '../../../assets/constants';
import {
  getNoteLabelFromName,
  noteValueToName,
} from '../../../assets/intervals';
import {
  addNoteToScale,
  removeNoteFromScale,
  toggleSharps,
  transposeScale,
} from '../../../redux/scale/scale.slice';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Buttons from '../../shared/button/Buttons';
import DividerLine from '../../shared/dividerLine/DividerLine';
import { Note, NotesList, TextLabel } from './notes.styles';

const Notes = ({ isAddingExtraNotes }) => {
  const dispatch = useDispatch();
  const sharpNotes = useSelector(({ scale }) => scale.info.sharpNotes);
  const scale = useSelector(({ scale }) => scale.parsed.pitched);
  const isSongPlaying = useSelector(
    ({ song }) => song.songPlayer.isSongPlaying,
  );

  const handleAdd = (newNote) => {
    if (isSongPlaying) return;

    dispatch(addNoteToScale({ newNote, isAddingExtraNotes }));
  };

  const handleRemove = (note, type) => {
    if (isSongPlaying) return;

    dispatch(removeNoteFromScale({ noteToRemove: note, type }));
  };

  const getNotes = () => {
    const lengths = { inner: 0, extra: 0 };
    const noteValues = scale.reduce((acc, { noteValue, type }) => {
      if (type === 'dings') ++lengths.inner;
      if (type === 'round') ++lengths.inner;
      if (type === 'extra') ++lengths.extra;

      return { ...acc, [noteValue]: type };
    }, {});

    const noteSelectors = [];

    for (let i = MIN_NOTE_VALUE; i <= MAX_NOTE_VALUE; ++i) {
      const noteName = noteValueToName[i];

      const inScale = !!noteValues[i];
      const type = inScale ? noteValues[i] : 'outside';

      const disabled =
        (!inScale && isAddingExtraNotes && lengths.extra >= 8) ||
        (!inScale && !isAddingExtraNotes && lengths.inner >= 13) ||
        (inScale && !isAddingExtraNotes && lengths.inner === 1);

      const handleClick = inScale
        ? () => handleRemove(noteName, type)
        : () => handleAdd(noteName);

      noteSelectors.push(
        <Note disabled={disabled} key={i} onClick={handleClick} $type={type}>
          <span>{getNoteLabelFromName(noteName, sharpNotes)}</span>
        </Note>,
      );
    }
    return noteSelectors;
  };

  const handleTransposeScale = (destination) => {
    dispatch(transposeScale({ destination }));
  };

  return (
    <>
      <TextLabel>Transpose Scale</TextLabel>
      <Buttons>
        <BtnPrimary
          disabled={isSongPlaying}
          label="- 8va"
          light
          onClick={() => handleTransposeScale(-12)}
        />
        <BtnPrimary
          disabled={isSongPlaying}
          label="Down"
          light
          onClick={() => handleTransposeScale(-1)}
        />
        <BtnPrimary
          disabled={isSongPlaying}
          label="#/b"
          light
          onClick={() => dispatch(toggleSharps())}
        />
        <BtnPrimary
          disabled={isSongPlaying}
          label="Up"
          light
          onClick={() => handleTransposeScale(1)}
        />
        <BtnPrimary
          disabled={isSongPlaying}
          label="+ 8va"
          light
          onClick={() => handleTransposeScale(12)}
        />
      </Buttons>
      <DividerLine small />
      <NotesList>{getNotes()}</NotesList>
      <DividerLine small />
    </>
  );
};

export default Notes;
