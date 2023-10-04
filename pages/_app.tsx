import Head from 'next/head';

import MainLayout from '../components/shared/layouts/mainLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const pageTitle = pageProps.pageTitle || 'pageTitle not set';
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MainLayout pageTitle={pageTitle}>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
