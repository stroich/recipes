import Head from 'next/head';

import Footer from '../../widgets/Footer/Footer';
import Header from '../../widgets/Header/Header';

const HomeLayout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" lang="ru" content={description} />
        <meta name="keywords" content={keywords} />

        <meta property="og:site_name" content="Кушать-будешь.org" />
        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content="https://github.com/stroich/recipes/assets/115462690/a1b9fc16-bb4a-405b-b15c-da9ed68b243d"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:description" content={description} />
      </Head>
      <Header />
      <main className="py-1 shadow-md rounded-md w-full">{children}</main>
      <Footer />
    </>
  );
};
export default HomeLayout;
