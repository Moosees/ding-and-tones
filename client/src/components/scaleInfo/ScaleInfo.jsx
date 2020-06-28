import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setScaleName } from '../../redux/scale/scale.actions';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import InfoBox from '../infoBox/InfoBox';
import InfoText from '../infoBox/InfoText';
import { InfoContainer } from './scaleInfo.styles';

const ScaleInfo = ({ layout, name, scale, setScaleName }) => {
  const handleSave = () => {
    axios
      .post('/scale', { name, scale: { simple: scale }, layout })
      .then((res) => {
        if (res.status !== 201) throw new Error('Could not save scale');
        //do something to show that scale is saved
      })
      .catch((error) => console.error(error));
  };

  return (
    <InfoContainer>
      <InfoBox>
        <InfoText
          placeholder="Scale name"
          type="title"
          value={name}
          handleChange={setScaleName}
        >
          {'Scale: ' + name}
        </InfoText>
      </InfoBox>
      <InfoBox>{scale.join(', ')}</InfoBox>
      <Buttons>
        <BtnPrimary label="Save Scale" onClick={handleSave} />
      </Buttons>
    </InfoContainer>
  );
};

const mapStateToProps = ({ scale }) => ({
  name: scale.name,
  scale: scale.scaleSimple,
  layout: scale.layout,
});

export default connect(mapStateToProps, { setScaleName })(ScaleInfo);
