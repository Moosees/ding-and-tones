import React from 'react';
import { connect } from 'react-redux';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import InfoBox from '../infoBox/InfoBox';
import InfoText from '../infoBox/InfoText';
import { InfoContainer } from './scaleInfo.styles';

const ScaleInfo = ({ name, layout, scale }) => {
  return (
    <InfoContainer>
      <InfoBox>
        <InfoText>{'Scale: ' + name}</InfoText>
      </InfoBox>
      <InfoBox>{scale.join(', ')}</InfoBox>
      <Buttons>
        <BtnPrimary label="Save Scale" />
      </Buttons>
    </InfoContainer>
  );
};

const mapStateToProps = ({ scale }) => ({
  name: scale.name,
  scale: scale.scaleSimple,
  layout: scale.layout,
});

export default connect(mapStateToProps)(ScaleInfo);
