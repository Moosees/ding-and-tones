import React from 'react';
import { connect } from 'react-redux';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import InfoField from '../infoField/InfoField';
import { InfoContainer } from './scaleInfo.styles';

const ScaleInfo = ({ name, layout, scale }) => {
  return (
    <InfoContainer>
      <InfoField label={'Name: ' + name} onEdit={true} />
      <InfoField label={scale.join(', ')} onEdit={true} />
      <InfoField label={'Layout: ' + layout} onEdit={true} />
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
