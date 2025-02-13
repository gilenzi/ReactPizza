import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {ThemeProvider} from 'styled-components';
import {theme} from './config/theme.ts';
import {GlobalStyles} from './config/global-styles.ts';
import {Provider} from 'react-redux';
import {store} from './state/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
