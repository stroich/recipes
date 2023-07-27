//components/mainLayout.js

import Head from 'next/head';

import Aside from '../aside';
import Footer from '../footer';

const MainLayout = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col min-h-screen max-w-5xl mx-auto">
        {children}
        <Footer />
      </section>
    </>
  );
};

export default MainLayout;
