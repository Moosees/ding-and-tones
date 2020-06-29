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
  const [scales, setScales] = useState([]);

  useEffect(() => {
    if (!scales.length)
      axios
        .get('/scale')
        .then((res) => {
          if (res.status !== 200) throw new Error('Could not get scales');
          setScales(res.data);
        })
        .catch((error) => console.error(error));
  }, [scales.length]);

  const scaleList = useMemo(
    () =>
      scales.map((scale) => {
        return (
          <ScaleContainer
            key={scale._id}
            onClick={() =>
              loadScale(scale.name, scale.layout, scale.scale.simple)
            }
          >
            <ScaleLabel>{scale.name}</ScaleLabel>
            <ScaleNotes>({scale.scale.simple.join(', ')})</ScaleNotes>
          </ScaleContainer>
        );
      }),
    [loadScale, scales]
  );

  return <ScaleList>{scaleList}</ScaleList>;
};

export default connect(null, { loadScale })(ScalesFound);
