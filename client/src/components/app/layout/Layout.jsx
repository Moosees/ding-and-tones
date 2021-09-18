import React from 'react';
import useDimensions from '../../../hooks/useDimensions';
import Alert from '../../alert/Alert';
import Privacy from '../../Privacy/Privacy';
import Large from './Large';
import { Viewport } from './layout.styles';
import Mobile from './Mobile';

const Layout = () => {
  const { isMobile } = useDimensions();

  return (
    <Viewport id="outsideTarget" isMobile={isMobile}>
      {isMobile ? <Mobile /> : <Large />}
      <Privacy />
      <Alert />
    </Viewport>
  );
};

export default Layout;
