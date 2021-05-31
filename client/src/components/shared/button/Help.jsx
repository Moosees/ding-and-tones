import React from 'react';
import { helpContent } from '../../../assets/help';
import Tooltip from '../tooltip/Tooltip';
import BtnIcon from './Icon';

const Btn = () => <BtnIcon icon="help_outline" />;

const Help = ({ topic }) => {
  return (
    <Tooltip parent={Btn}>
      <div>{helpContent[topic].heading}</div>
    </Tooltip>
  );
};

export default Help;
