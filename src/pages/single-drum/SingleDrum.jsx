import React from 'react';
import { connect } from 'react-redux';
import ChordControls from '../../components/chordControls/ChordControls';
import ChordList from '../../components/chordList/ChordList';
import Drum from '../../components/drum/Drum';
import DrumInfo from '../../components/drumInfo/DrumInfo';
import Song from '../../components/song/Song';
import SongInfo from '../../components/songInfo/SongInfo';
import { saveScale } from '../../redux/scale/scale.actions';
import { SingleDrumContainer } from './singleDrum.styles';

const SingleDrum = ({ scale, saveScale }) => {
  saveScale(scale);

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

const mapStateToProps = ({ scale }) => ({
  scale: scale.scaleSimple,
});

export default connect(mapStateToProps, { saveScale })(SingleDrum);
