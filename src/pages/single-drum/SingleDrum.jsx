import React from 'react';
import { connect } from 'react-redux';
import Drum from '../../components/drum/Drum';
import FindChords from '../../components/findChords/FindChords';
import FoundChords from '../../components/foundChords/FoundChords';
import Song from '../../components/song/Song';
import { saveScale } from '../../redux/scale/scale.actions';
import { SingleDrumContainer } from './singleDrum.styles';

const SingleDrum = ({ scale, saveScale }) => {
  saveScale(scale);

  return (
    <SingleDrumContainer>
      <Drum />
      <div>
        <FindChords />
        <FoundChords />
      </div>
      <Song />
    </SingleDrumContainer>
  );
};

const mapStateToProps = ({ scale }) => ({
  scale: scale.scaleSimple
});

export default connect(mapStateToProps, { saveScale })(SingleDrum);
