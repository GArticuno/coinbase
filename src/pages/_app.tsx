import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GLobalStyle from '../styles/global';

const theme = {
  colors: {
    primary: '#fb2943',
  },
};

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GLobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
