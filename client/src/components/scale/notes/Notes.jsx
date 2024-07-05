import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MAX_NOTE_VALUE, MIN_NOTE_VALUE } from '../../../assets/constants';
import {
  getNoteLabelFromName,
  noteValueToName,
} from '../../../assets/intervals';
import {
  toggleSharps,
  transposeScale,
} from '../../../redux/scale/scale.actions';
import {
  addNoteToScale,
  removeNoteFromScale,
} from '../../../redux/scale/scale.slice';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Buttons from '../../shared/button/Buttons';
import DividerLine from '../../shared/dividerLine/DividerLine';
import { Note, NotesList, TextLabel } from './notes.styles';

const Notes = ({ isAddingExtraNotes }) => {
  const dispatch = useDispatch();
  const sharpNotes = useSelector(({ scale }) => scale.info.sharpNotes);
  const extra = useSelector(({ scale }) => scale.notes.extra);
  const round = useSelector(({ scale }) => scale.notes.round);
  const scale = useSelector(({ scale }) => scale.parsed.pitched);
  const isSongPlaying = useSelector(
    ({ song }) => song.songPlayer.isSongPlaying,
  );

  const handleAdd = (newNote) => {
    if (isSongPlaying) return;

    dispatch(addNoteToScale({ newNote, isAddingExtraNotes }));
  };

  const handleRemove = (note) => {
    if (isSongPlaying) return;

    dispatch(removeNoteFromScale({ noteToRemove: note }));
  };

  const getNotes = () => {
    const noteValues = scale.reduce(
      (acc, { noteValue, type }) => ({ ...acc, [noteValue]: type }),
      {},
    );
    const noteSelectors = [];

    for (let i = MIN_NOTE_VALUE; i <= MAX_NOTE_VALUE; ++i) {
      const noteName = noteValueToName[i];

      const inScale = !!noteValues[i];
      const type = inScale ? noteValues[i] : 'outside';

      const disabled =
        (!inScale && isAddingExtraNotes && extra.length >= 8) ||
        (!inScale && !isAddingExtraNotes && round.length >= 13);

      const handleClick = inScale
        ? () => handleRemove(noteName)
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
    dispatch(transposeScale(destination));
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
