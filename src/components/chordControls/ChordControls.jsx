import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { findChordsInScale } from '../../redux/chords/chords.actions';
import Checkbox from '../checkbox/Checkbox';

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChordControls = ({ chordList, scale, findChordsInScale }) => {
  const allChords = chordList.map((chord, i) => (
    <Checkbox key={i} label={chord.name} />
  ));

  useEffect(() => {
    if (allChords) findChordsInScale(scale, chordList);
  }, [allChords, findChordsInScale, scale]);

  return <ControlsContainer>{allChords}</ControlsContainer>;
};

const mapStateToProps = ({ chords, scale }) => ({
  chordList: chords.chordList,
  scale: scale.scaleFull,
});

export default connect(mapStateToProps, {
  findChordsInScale,
})(ChordControls);
