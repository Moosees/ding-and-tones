import React from 'react';
import { connect } from 'react-redux';
import { findChordsInScale } from '../../redux/chords/chords.actions';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  margin-bottom: 3rem;
`;

const ChordControls = ({ scale, chordList, findChordsInScale }) => {
  return (
    <ControlsContainer>
      <button onClick={() => findChordsInScale(scale, chordList)}>
        Find chords
      </button>
    </ControlsContainer>
  );
};

const mapStateToProps = ({ chords, scale }) => ({
  chordList: chords.chordList,
  scale: scale.scaleFull,
});

export default connect(mapStateToProps, {
  findChordsInScale,
})(ChordControls);
