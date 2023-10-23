import Head from 'next/head';

const MainLayout = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex justify-between flex-col min-h-screen mx-auto">{children}</section>
    </>
  );
};

export default MainLayout;
