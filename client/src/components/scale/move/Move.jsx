import React, { useState } from 'react';
import { connect } from 'react-redux';
import { moveExtraNotes } from '../../../redux/scale/scale.actions';
import { MoveContainer, Note, PositionWrapper } from './move.styles';

const Move = ({ extra, moveExtraNotes }) => {
  const [grabbed, setGrabbed] = useState(null);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const notesTemplate = Array.from({ length: 8 });

  extra.forEach(({ note, pos }) => {
    notesTemplate[pos] = note;
  });

  const handleMove = (note, pos) => {
    if (pos !== grabbed) moveExtraNotes(grabbed, pos, !!note);

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
    <MoveContainer>
      <PositionWrapper>{notes}</PositionWrapper>
    </MoveContainer>
  );
};

const mapStateToProps = ({ scale }) => ({
  extra: scale.notes.extra,
});

export default connect(mapStateToProps, { moveExtraNotes })(Move);
