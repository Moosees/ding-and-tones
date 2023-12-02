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
} from '../../../redux/scale/scale.actions';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Buttons from '../../shared/button/Buttons';
import DividerLine from '../../shared/dividerLine/DividerLine';
import { Note, NotesList, TextLabel } from './notes.styles';

const Notes = () => {
  const dispatch = useDispatch();
  const { sharpNotes, extra, round, scale, isAddingExtraNotes, isSongPlaying } =
    useSelector(({ scale, ui }) => ({
      sharpNotes: scale.info.sharpNotes,
      extra: scale.notes.extra,
      round: scale.notes.round,
      scale: scale.parsed.pitched,
      isAddingExtraNotes: ui.isAddingExtraNotes,
      isSongPlaying: ui.isSongPlaying,
    }));

  const handleAdd = (note) => {
    if (isSongPlaying) return;

    dispatch(addNoteToScale(note));
  };

  const handleRemove = (note) => {
    if (isSongPlaying) return;

    dispatch(removeNoteFromScale(note));
  };

  const getNotes = () => {
    const noteValues = scale.reduce(
      (acc, { noteValue, type }) => ({ ...acc, [noteValue]: type }),
      {}
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
        </Note>
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
