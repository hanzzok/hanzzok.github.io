import { x } from '@xstyled/emotion';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hanzzok</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <x.h1>Write Document Better</x.h1>
      </main>
    </div>
  );
};

export default Home;
