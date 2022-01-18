import React from 'react';
import { connect } from 'react-redux';
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
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import DividerLine from '../../shared/dividerLine/DividerLine';
import { Note, NotesList, TextLabel } from './notes.styles';

const Notes = ({
  addExtraNotes,
  addNoteToScale,
  isSongPlaying,
  notes,
  removeNoteFromScale,
  scale,
  sharpNotes,
  toggleSharps,
  transposeScale,
}) => {
  const { extra, round } = notes;

  const handleAdd = (note) => {
    if (isSongPlaying) return;
    addNoteToScale(note);
  };

  const handleRemove = (note) => {
    if (isSongPlaying) return;
    removeNoteFromScale(note);
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
        (!inScale && addExtraNotes && extra.length >= 8) ||
        (!inScale && !addExtraNotes && round.length >= 13);

      const handleClick = inScale
        ? () => handleRemove(noteName)
        : () => handleAdd(noteName);

      noteSelectors.push(
        <Note disabled={disabled} key={i} type={type} onClick={handleClick}>
          <span>{getNoteLabelFromName(noteName, sharpNotes)}</span>
        </Note>
      );
    }
    return noteSelectors;
  };

  return (
    <>
      <TextLabel>Transpose Scale</TextLabel>
      <Buttons>
        <BtnPrimary
          disabled={isSongPlaying}
          label="- 8va"
          light
          onClick={() => transposeScale(-12)}
        />
        <BtnPrimary
          disabled={isSongPlaying}
          label="Down"
          light
          onClick={() => transposeScale(-1)}
        />
        <BtnPrimary
          disabled={isSongPlaying}
          label="#/b"
          light
          onClick={toggleSharps}
        />
        <BtnPrimary
          disabled={isSongPlaying}
          label="Up"
          light
          onClick={() => transposeScale(1)}
        />
        <BtnPrimary
          disabled={isSongPlaying}
          label="+ 8va"
          light
          onClick={() => transposeScale(12)}
        />
      </Buttons>
      <DividerLine small />
      <NotesList>{getNotes()}</NotesList>
      <DividerLine small />
    </>
  );
};

const mapStateToProps = ({ scale, ui }) => ({
  sharpNotes: scale.info.sharpNotes,
  notes: scale.notes,
  scale: scale.parsed.pitched,
  addExtraNotes: ui.addExtraNotes,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, {
  addNoteToScale,
  removeNoteFromScale,
  toggleSharps,
  transposeScale,
})(Notes);
