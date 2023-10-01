import Head from 'next/head';

import Footer from '../footer';
import { SeoScripts } from '../seo/seoScripts';

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
        <SeoScripts />
      </section>
    </>
  );
};

export default MainLayout;
