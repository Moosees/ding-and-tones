import React from 'react';
import { connect } from 'react-redux';
import { loadScale } from '../../redux/scale/scale.actions';
import {
  ScaleContainer,
  ScaleLabel,
  ScaleList,
  ScaleNotes,
} from './scalesFound.styles';

const ScalesFound = ({ loadScale, scalesFound }) => {
  const searchResults = scalesFound.map((result, i) => {
    const { name, label, layout, scale, isOwner } = result;
    return (
      <ScaleContainer
        key={i}
        onClick={() =>
          loadScale({ name, label, layout, scaleSimple: scale.round })
        }
      >
        <ScaleLabel>
          {name}
          {isOwner ? '*' : ''}
        </ScaleLabel>
        <ScaleNotes>{label}</ScaleNotes>
      </ScaleContainer>
    );
  });

  return <ScaleList>{searchResults}</ScaleList>;
};

const mapStateToProps = ({ search }) => ({
  scalesFound: search.scalesFound,
});

export default connect(mapStateToProps, { loadScale })(ScalesFound);
