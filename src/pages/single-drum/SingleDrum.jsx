import React, { useState } from 'react';
import { connect } from 'react-redux';
import ChordsList from '../../components/chordsList/ChordsList';
import Drum from '../../components/drum/Drum';
import Song from '../../components/song/Song';
import { saveScale } from '../../redux/scale/scale.actions';
import { SingleDrumContainer } from './singleDrum.styles';

// dummy data
import { dummySong } from './singleDrum.data';

const testScale = ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'];

const SingleDrum = ({ saveScale }) => {
  const [chordFocus, setChordFocus] = useState(null);
  saveScale(testScale);

  return (
    <SingleDrumContainer>
      <Drum chordFocus={chordFocus} />
      <ChordsList setChordFocus={setChordFocus} />
      <Song song={dummySong} />
    </SingleDrumContainer>
  );
};

export default connect(null, { saveScale })(SingleDrum);
