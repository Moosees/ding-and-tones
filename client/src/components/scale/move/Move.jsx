import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveExtraNotes } from '../../../redux/scale/scale.actions';
import { TextLabel } from '../edit/edit.styles';
import { MoveContainer, Note, PositionWrapper } from './move.styles';

const Move = () => {
  const dispatch = useDispatch();
  const extra = useSelector(({ scale }) => scale.notes.extra);

  const [grabbed, setGrabbed] = useState(null);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const notesTemplate = Array.from({ length: 8 });

  for (const { note, pos } of extra) {
    notesTemplate[pos] = note;
  }

  const handleMove = (note, pos) => {
    if (pos !== grabbed) {
      dispatch(moveExtraNotes(grabbed, pos, !!note));
    }

    setGrabbed(null);
    setIsGrabbing(false);
  };

  const handleGrab = (note, pos) => {
    if (!note) return;

    setGrabbed(pos);
    setIsGrabbing(true);
  };

  const notes = notesTemplate.map((note, i) => {
    return (
      <Note
        key={i}
        isVisible={isGrabbing || note}
        isGrabbed={grabbed === i}
        onClick={
          isGrabbing ? () => handleMove(note, i) : () => handleGrab(note, i)
        }
      >
        {note}
      </Note>
    );
  });

  return (
    <>
      <MoveContainer>
        <PositionWrapper>{notes}</PositionWrapper>
      </MoveContainer>
      <TextLabel>
        {isGrabbing ? 'Pick destination' : 'Pick note to move'}
      </TextLabel>
    </>
  );
};

export default Move;
