import React from 'react';
import Drum from '../../components/drum/Drum';
import { createIntervalMap } from './helpers/intervals';
import { sortScaleForDisplay } from './helpers/noteOrder';
import { SingleDrumContainer } from './singleDrum.styles';

// dummy data
const testScale = ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'];

const SingleDrum = () => {
  const scale = sortScaleForDisplay(createIntervalMap(testScale));

  return (
    <SingleDrumContainer>
      <Drum scale={scale} />
    </SingleDrumContainer>
  );
};

export default SingleDrum;
