import React from 'react';
import { helpContent } from '../../../assets/help';
import Tooltip from '../tooltip/Tooltip';
import BtnIcon from './BtnIcon';
import { HelpContainer } from './button.styles';

const Btn = () => <BtnIcon icon="help_outline" />;

const BtnHelp = ({ topic }) => {
  return (
    <Tooltip parent={Btn}>
      <HelpContainer>
        <h3>{helpContent[topic].title}</h3>
        {helpContent[topic].content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </HelpContainer>
    </Tooltip>
  );
};

export default BtnHelp;
