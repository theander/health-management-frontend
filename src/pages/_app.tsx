import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Layout from '../../components/layout/layout';
import { SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { AppProps } from 'next/app';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  // useEffect(() => {
  //   import('../../node_modules/bootstrap/dist/js/bootstrap');
  // }, []);
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
