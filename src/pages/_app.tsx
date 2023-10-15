import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Layout from '../../components/layout/layout';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
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
