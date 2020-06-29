import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { loadScale } from '../../redux/scale/scale.actions';
import {
  ScaleContainer,
  ScaleLabel,
  ScaleList,
  ScaleNotes,
} from './scalesFound.styles';

const ScalesFound = ({ loadScale }) => {
  const [scalesFound, setScalesFound] = useState([]);

  useEffect(() => {
    if (!scalesFound.length)
      axios
        .get('/scale')
        .then((res) => {
          if (res.status !== 200) throw new Error('Could not get scales');
          setScalesFound(res.data);
        })
        .catch((error) => console.error(error));
  }, [scalesFound.length]);

  const searchResults = useMemo(
    () =>
      scalesFound.map((result) => {
        const { _id, name, label, layout, scale } = result;
        return (
          <ScaleContainer
            key={_id}
            onClick={() =>
              loadScale({ name, label, layout, scaleSimple: scale.round })
            }
          >
            <ScaleLabel>{name}</ScaleLabel>
            <ScaleNotes>{label}</ScaleNotes>
          </ScaleContainer>
        );
      }),
    [loadScale, scalesFound]
  );

  return <ScaleList>{searchResults}</ScaleList>;
};

export default connect(null, { loadScale })(ScalesFound);
