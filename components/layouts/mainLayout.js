//components/mainLayout.js

import Head from 'next/head';

import Footer from '../footer';

const MainLayout = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col min-h-screen max-w-4xl bg-gradient-to-r from-green-50 to-green-50  mx-auto sm:p-2 md:py-3 md:px-4">
        {children}
        <Footer />
      </section>
    </>
  );
};

export default MainLayout;
