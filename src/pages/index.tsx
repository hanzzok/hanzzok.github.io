import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';
import { useBlobity } from '../lib/hooks/use-blobity';
import { useTooltip } from '../lib/hooks/use-tooltip';
import { styled, theme } from '../stitches.config';

const Catchphrase = styled('h1', {
  fontSize: '4rem',
  userSelect: 'none',
  color: '$fg',
  fontWeight: '400',
});

const HighlightWrap = styled('span', {
  fontSize: '2rem',
  color: '$fgLight',
  fontWeight: '100',
  verticalAlign: 'middle',
});

const HighlightTarget = styled('span', {
  fontWeight: '700',
});

const Home: NextPage = () => {
  const betterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (betterRef.current) {
      const annotationList = [
        annotate(betterRef.current, {
          type: 'highlight',
          color: theme.colors['orange-200-a30'].computedValue,
        }),
        annotate(betterRef.current, {
          type: 'underline',
          color: theme.colors['red-700'].computedValue,
        }),
      ];

      for (const annotation of annotationList) {
        annotation.show();
      }

      return () => {
        for (const annotation of annotationList) {
          annotation.remove();
        }
      };
    }
  }, []);

  const highlightTooltip = useTooltip(
    'with .highlight and .underline decorator'
  );

  return (
    <div>
      <Head>
        <title>Hanzzok</title>
      </Head>

      <main>
        <Catchphrase>
          Write Documents <HighlightWrap>[</HighlightWrap>
          <HighlightTarget ref={betterRef} {...highlightTooltip}>
            Better
          </HighlightTarget>
          <HighlightWrap> .highlight .underline]</HighlightWrap>
        </Catchphrase>
        <p></p>
      </main>
    </div>
  );
};

export default Home;
