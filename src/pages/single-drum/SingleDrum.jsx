import React from 'react';
import Drum from '../../components/drum/Drum';
import { sortScaleForDisplay } from './helpers/noteOrder';
import { createIntervalMap } from './helpers/chords';
import { SingleDrumContainer } from './singleDrum.styles';

// dummy data
const scale = ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'];

const SingleDrum = () => {
  const sortedScale = sortScaleForDisplay(scale);
  console.log(createIntervalMap(sortedScale));

  return (
    <SingleDrumContainer>
      <Drum scale={sortedScale} />
    </SingleDrumContainer>
  );
};

export default SingleDrum;
