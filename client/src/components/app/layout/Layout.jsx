import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../../assets/themes';
import useDimensions from '../../../hooks/useDimensions';
import Alert from '../../alert/Alert';
import Privacy from '../../privacy/Privacy';
import GlobalStyles from './GlobalStyles';
import Large from './Large';
import { Viewport } from './layout.styles';
import Mobile from './Mobile';

const Layout = () => {
  const { isMobile } = useDimensions();

  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Viewport id="outsideTarget" isMobile={isMobile}>
        {isMobile ? <Mobile /> : <Large />}
        <Privacy />
        <Alert />
      </Viewport>
    </ThemeProvider>
  );
};

export default Layout;
