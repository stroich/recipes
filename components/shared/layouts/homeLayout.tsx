import Head from 'next/head';

import Footer from '../../widgets/Footer/Footer';
import Header from '../../widgets/Header/Header';

const HomeLayout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <main className="py-1 shadow-md rounded-md w-full">{children}</main>
      <Footer />
    </>
  );
};
export default HomeLayout;
