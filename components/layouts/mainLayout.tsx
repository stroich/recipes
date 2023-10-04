import Head from 'next/head';

const MainLayout = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex justify-between flex-col min-h-screen mx-auto">{children}</section>
    </>
  );
};

export default MainLayout;
