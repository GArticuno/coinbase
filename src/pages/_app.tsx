import type { AppProps } from 'next/app';
import useStore from 'store';
import { ThemeProvider } from 'styled-components';
import { dark, light } from 'styles';

import GLobalStyle from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  const { isDark } = useStore();
  return (
    <>
      <GLobalStyle />
      <ThemeProvider theme={isDark ? dark : light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
