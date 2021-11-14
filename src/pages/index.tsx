import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';
import { useTooltip } from '../lib/hooks/use-tooltip';
import { styled, theme } from '../stitches.config';
import Link from 'next/link';

const Catchphrase = styled('h1', {
  fontSize: '4rem',
  userSelect: 'none',
  fontWeight: '400',
});

const HighlightWrap = styled('span', {
  fontSize: '2rem',
  color: '$fgLight',
  fontWeight: '200',
  verticalAlign: 'middle',
});

const HighlightTarget = styled('span', {
  fontWeight: '700',
});

const TryOutButton = styled('button', {
  border: 'none',
  borderRadius: '8px',
  fontSize: '2rem',
  color: '$fg',
  background: '$primary',
  padding: '1rem 2rem',
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
          <HighlightWrap>&nbsp;.highlight&nbsp;.underline]</HighlightWrap>
        </Catchphrase>
        <Link href="/playground">
          <a>
            <TryOutButton>Try Out</TryOutButton>
          </a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
