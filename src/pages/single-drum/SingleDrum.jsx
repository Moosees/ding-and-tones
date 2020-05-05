import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ChordControls from '../../components/chordControls/ChordControls';
import ChordList from '../../components/chordList/ChordList';
import Drum from '../../components/drum/Drum';
import DrumInfo from '../../components/drumInfo/DrumInfo';
import Song from '../../components/song/Song';
import SongInfo from '../../components/songInfo/SongInfo';
import { saveScale } from '../../redux/scale/scale.actions';
import { SingleDrumContainer } from './singleDrum.styles';

// const dummyScale = ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'];
const dummyScale = ['A2', 'C3', 'E3', 'C3', 'F3', 'G3', 'A3', 'B3', 'E4', 'C4'];

// this page is just a placeholder
const SingleDrum = ({ saveScale }) => {
  useEffect(() => {
    saveScale('A Integral', 'round', dummyScale);
  }, [saveScale]);

  return (
    <SingleDrumContainer>
      <div>
        <DrumInfo />
        <Drum />
      </div>
      <div>
        <ChordControls />
        <ChordList />
      </div>
      <div>
        <SongInfo />
        <div style={{ height: '1rem' }}></div>
        <Song />
      </div>
    </SingleDrumContainer>
  );
};

export default connect(null, { saveScale })(SingleDrum);
