import React from 'react';
import { connect } from 'react-redux';
import Drum from '../../components/drum/Drum';
import FindChords from '../../components/findChords/FindChords';
import FoundChords from '../../components/foundChords/FoundChords';
import Song from '../../components/song/Song';
import { saveScale } from '../../redux/scale/scale.actions';
import { SingleDrumContainer } from './singleDrum.styles';

// dummy data
import { dummySong } from './singleDrum.data';

const testScale = ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'];

const SingleDrum = ({ saveScale }) => {
  saveScale(testScale);

  return (
    <SingleDrumContainer>
      <Drum />
      <div>
        <FindChords />
        <FoundChords />
      </div>
      <Song song={dummySong} />
    </SingleDrumContainer>
  );
};

export default connect(null, { saveScale })(SingleDrum);
