import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../assets/themes';
import { store } from '../../redux/store';
import GlobalEffects from './effects/GlobalEffects';
import Keyboard from './effects/Keyboard';
import SoundOptions from './effects/SoundOptions';
import GlobalStyles from './globalStyles';
import Layout from './layout/Layout';
import DimensionsProvider from './providers/DimensionsProvider';
import HowlsProvider from './providers/HowlsProvider';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <DimensionsProvider>
        <HowlsProvider>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyles />
            <Keyboard />
            <SoundOptions />
            <GlobalEffects>
              <Layout />
            </GlobalEffects>
          </ThemeProvider>
        </HowlsProvider>
      </DimensionsProvider>
    </ReduxProvider>
  );
};

export default App;
