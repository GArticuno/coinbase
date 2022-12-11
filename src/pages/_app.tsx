import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { light } from 'styles';

import GLobalStyle from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GLobalStyle />
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
