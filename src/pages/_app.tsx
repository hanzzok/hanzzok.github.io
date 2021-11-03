import type { AppProps } from 'next/app';
import { ColorModeProvider, Preflight, ThemeProvider } from '@xstyled/emotion';
import { MyTheme } from '../styles/theme';
import dynamic from 'next/dynamic';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={MyTheme}>
      <ColorModeProvider>
        <Preflight />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
