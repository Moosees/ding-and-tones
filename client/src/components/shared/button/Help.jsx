import React from 'react';
import BtnIcon from './Icon';

const Help = ({ topic }) => {
  const openHelp = () => {
    console.log(topic);
  };

  return <BtnIcon icon="help_outline" onClick={openHelp} />;
};

export default Help;
