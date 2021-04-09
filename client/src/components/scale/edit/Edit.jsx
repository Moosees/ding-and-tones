import React from 'react';
import { connect } from 'react-redux';
import { MAX_NOTE_VALUE, MIN_NOTE_VALUE } from '../../../assets/constants';
import { noteValueToName } from '../../../assets/intervals';
import {
  addNoteToScale,
  removeNoteFromScale,
  transposeScale,
} from '../../../redux/scale/scale.actions';
import {
  toggleExtraNotes,
  toggleExtraPosEdit,
} from '../../../redux/ui/ui.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import Checkbox from '../../shared/checkbox/Checkbox';
import DividerLine from '../../shared/dividerLine/DividerLine';
import { EditContainer, Note, Notes, TextLabel } from './edit.styles';

const getNotes = (
  extra,
  round,
  fnAdd,
  fnRemove,
  isSongPlaying,
  addExtraNotes
) => {
  const extraNotes = extra.map(({ note }) => note);
  const notes = [];

  for (let i = MIN_NOTE_VALUE; i <= MAX_NOTE_VALUE; ++i) {
    const noteName = noteValueToName[i];
    const isNoteInRound = round.includes(noteName);
    const isNoteInExtra = extraNotes.includes(noteName);
    const isNoteInScale = isNoteInRound || isNoteInExtra;
    const disabled =
      (!isNoteInScale && addExtraNotes && extraNotes.length >= 8) ||
      (!isNoteInScale && !addExtraNotes && round.length >= 14);

    const handleClick = isNoteInScale
      ? () => fnRemove(noteName)
      : () => fnAdd(noteName);

    notes.push(
      <Note
        disabled={disabled}
        key={i}
        inRound={isNoteInRound}
        inExtra={isNoteInExtra}
        onClick={handleClick}
      >
        <span>{noteName}</span>
      </Note>
    );
  }
  return notes;
};

const Edit = ({
  addExtraNotes,
  addNoteToScale,
  extra,
  isEditingExtraPos,
  isSongPlaying,
  removeNoteFromScale,
  round,
  toggleExtraNotes,
  toggleExtraPosEdit,
  transposeScale,
}) => {
  const handleAdd = (note) => {
    if (isSongPlaying) return;
    addNoteToScale(note);
  };

  const handleRemove = (note) => {
    if (isSongPlaying) return;
    removeNoteFromScale(note);
  };

  const notes = getNotes(
    extra,
    round,
    handleAdd,
    handleRemove,
    isSongPlaying,
    addExtraNotes
  );

  return (
    <EditContainer>
      <TextLabel>Transpose Scale</TextLabel>
      <Buttons position="center">
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
      <Notes>{notes}</Notes>
      <DividerLine small />
      <Buttons position="center">
        <Checkbox
          asBtn
          light
          label="Add"
          checked={addExtraNotes}
          onChange={toggleExtraNotes}
        />
        <Checkbox
          asBtn
          light
          label="Move"
          checked={isEditingExtraPos}
          onChange={toggleExtraPosEdit}
        />
      </Buttons>
      <TextLabel>Extra/Bottom Notes</TextLabel>
    </EditContainer>
  );
};

const mapStateToProps = ({ scale, ui }) => ({
  extra: scale.notes.extra,
  round: scale.notes.round,
  addExtraNotes: ui.addExtraNotes,
  isEditingExtraPos: ui.isEditingExtraPos,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, {
  addNoteToScale,
  removeNoteFromScale,
  toggleExtraNotes,
  toggleExtraPosEdit,
  transposeScale,
})(Edit);
