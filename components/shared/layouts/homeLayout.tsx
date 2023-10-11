import Head from 'next/head';

import Footer from '../../widgets/Footer/Footer';
import Header from '../../widgets/Header/Header';

const HomeLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="py-2 shadow-md rounded-md px-40">{children}</main>
      <Footer />
    </>
  );
};
export default HomeLayout;
