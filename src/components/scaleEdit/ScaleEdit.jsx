import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { noteValueToName } from '../../intervals.data';
import {
  addNoteToScale,
  removeNoteFromScale,
  transposeScale,
} from '../../redux/scale/scale.actions';
import ButtonMain from '../button/ButtonMain';
import { Buttons, EditContainer, Note, Notes } from './scaleEdit.styles';

const getNotes = (scale, fnAdd, fnRemove) => {
  const notes = [];
  // c2 to c5
  for (let i = 24; i <= 60; ++i) {
    const noteName = noteValueToName[i];
    const isNoteInScale = scale.includes(noteName);

    const handleClick = isNoteInScale
      ? () => fnRemove(noteName)
      : () => fnAdd(noteName);

    notes.push(
      <Note key={i} inScale={isNoteInScale} onClick={handleClick}>
        {noteName}
      </Note>
    );
  }
  return notes;
};

const ScaleEdit = ({
  scale,
  addNoteToScale,
  removeNoteFromScale,
  transposeScale,
}) => {
  const notes = useMemo(
    () => getNotes(scale, addNoteToScale, removeNoteFromScale),
    [scale, addNoteToScale, removeNoteFromScale]
  );

  return (
    <EditContainer>
      <Notes>{notes}</Notes>
      <Buttons>
        <ButtonMain label="Up" light onClick={() => transposeScale(1)} />
        <ButtonMain label="Down" light onClick={() => transposeScale(-1)} />
      </Buttons>
    </EditContainer>
  );
};

const mapStateToProps = ({ scale }) => ({
  scale: scale.scaleSimple,
});

export default connect(mapStateToProps, {
  addNoteToScale,
  removeNoteFromScale,
  transposeScale,
})(ScaleEdit);
