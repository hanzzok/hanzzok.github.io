import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Blobity from 'blobity';
import {
  applyGlobalStyles,
  applyRoughAnnotationStyles,
} from '../styles/global';
import {
  ColorScheme,
  usePreferredColorScheme,
} from '../lib/hooks/use-preferred-color-mode';
import { DarkTheme, LightTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    new Blobity({
      licenseKey: 'RanolP',
    });
  }, []);

  const scheme = usePreferredColorScheme();

  useEffect(() => {
    switch (scheme) {
      case ColorScheme.Dark: {
        document.body.className = DarkTheme;
        break;
      }
      case ColorScheme.Light: {
        document.body.className = LightTheme;
        break;
      }
    }
  }, [scheme]);

  applyRoughAnnotationStyles();
  applyGlobalStyles();

  return <Component {...pageProps} />;
}

export default MyApp;
