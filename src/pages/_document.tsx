import { getColorModeInitScriptElement } from '@xstyled/core';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {getColorModeInitScriptElement()}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
