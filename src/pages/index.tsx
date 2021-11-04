import { th, useTheme, x } from '@xstyled/emotion';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

const Home: NextPage = () => {
  const theme = useTheme() as any;
  const betterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (betterRef.current) {
      const annotationList = [
        annotate(betterRef.current, {
          type: 'highlight',
          color: theme.colors['amber-200-a30'],
        }),
        annotate(betterRef.current, {
          type: 'underline',
          color: theme.colors['red-700'],
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
  }, [theme.colors]);

  return (
    <div>
      <Head>
        <title>Hanzzok</title>
      </Head>

      <main>
        <x.h1 fontSize="6xl" userSelect="none" color="fg">
          Write Documents{' '}
          <x.span fontSize="3xl" color="fgLight">
            [
            <x.span fontSize="6xl" color="fg" ref={betterRef}>
              Better
            </x.span>{' '}
            .highlight .underline]
          </x.span>
        </x.h1>
      </main>
    </div>
  );
};

export default Home;
