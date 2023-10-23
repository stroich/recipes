import Head from 'next/head';

import MainLayout from '../components/shared/layouts/mainLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const pageTitle = pageProps.pageTitle || 'pageTitle not set';
  return (
    <MainLayout pageTitle={pageTitle}>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
