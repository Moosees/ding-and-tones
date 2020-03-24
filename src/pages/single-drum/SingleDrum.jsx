import React, { useState } from 'react';
import ChordsList from '../../components/chordsList/ChordsList';
import Drum from '../../components/drum/Drum';
import Song from '../../components/song/Song';
import { createIntervalMap } from '../../helpers/intervals.helpers';
import { sortScaleForDisplay } from '../../helpers/noteOrder';
import { SingleDrumContainer } from './singleDrum.styles';

// dummy data
import { dummySong } from './singleDrum.data';
const testScale = ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'];
const scale = sortScaleForDisplay(createIntervalMap(testScale));

const SingleDrum = () => {
  const [chordFocus, setChordFocus] = useState(null);

  return (
    <SingleDrumContainer>
      <Drum scale={scale} chordFocus={chordFocus} />
      <ChordsList scale={scale} setChordFocus={setChordFocus} />
      <Song song={dummySong} />
    </SingleDrumContainer>
  );
};

export default SingleDrum;
