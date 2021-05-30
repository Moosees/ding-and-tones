import React from 'react';
import { helpContent } from '../../../assets/help';
import BtnIcon from './Icon';

const Help = ({ topic }) => {
  const openHelp = () => {
    console.log(helpContent[topic]);
  };

  return <BtnIcon icon="help_outline" onClick={openHelp} />;
};

export default Help;
