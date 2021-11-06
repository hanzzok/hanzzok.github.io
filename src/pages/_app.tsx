import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Blobity from 'blobity';
import {
  applyGlobalStyles,
  applyRoughAnnotationStyles,
} from '../styles/global';
import {
  ColorScheme,
  usePreferredColorScheme,
} from '../lib/hooks/use-preferred-color-scheme';
import { DarkTheme, LightTheme } from '../styles/theme';
import { BlobityContext } from '../lib/hooks/use-blobity';

function applyTheme(scheme: ColorScheme | null) {
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
}

function MyApp({ Component, pageProps }: AppProps) {
  const [blobity, setBlobity] = useState<Blobity | null>(null);

  useEffect(() => {
    setBlobity(
      new Blobity({
        licenseKey: 'RanolP',
        font: '"Pretendard Variable", sans-serif',
        fontSize: 16,
        fontColor: '#ffffff',
        fontWeight: 400,
        color: '#666666',
      })
    );
  }, []);

  const scheme = usePreferredColorScheme();

  applyTheme(scheme);
  applyRoughAnnotationStyles();
  applyGlobalStyles();

  return (
    <BlobityContext.Provider value={blobity}>
      <Component {...pageProps} />
    </BlobityContext.Provider>
  );
}

export default MyApp;
