import { getColorModeInitScriptElement } from '@xstyled/core';
import { x } from '@xstyled/emotion';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Hanzzok: Write Documents Better" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <x.body backgroundColor="bg">
          {getColorModeInitScriptElement()}
          <Main />
          <NextScript />
        </x.body>
      </Html>
    );
  }
}

export default MyDocument;
