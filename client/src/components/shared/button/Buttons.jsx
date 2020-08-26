import React from 'react';
import { ButtonGroup } from './button.styles';

const Buttons = ({ children, position }) => (
  <ButtonGroup position={position}>{children}</ButtonGroup>
);

export default Buttons;
