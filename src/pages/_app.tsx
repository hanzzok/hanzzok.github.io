import type { AppProps } from 'next/app';
import { ColorModeProvider, Preflight, ThemeProvider } from '@xstyled/emotion';
import { MyTheme } from '../styles/theme';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Blobity from 'blobity';
import { GlobalStyles, RoughAnnotationStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    new Blobity({
      licenseKey: 'RanolP',
    });
  }, []);

  return (
    <ThemeProvider theme={MyTheme}>
      <ColorModeProvider>
        <Preflight />
        <RoughAnnotationStyles />
        <GlobalStyles />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
