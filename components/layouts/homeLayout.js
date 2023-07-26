// components/HomeLayout.js

import Head from 'next/head';

import { webSiteSlogan, webSiteTitle } from '../../utils/constants/webSiteVars';
import { Navbar } from '../navBar';

const HomeLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{webSiteTitle}</title>
      </Head>
      <header className="bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100 py-2">
        <div className="container mx-auto text-black text-center">
          <h1 className="text-4xl font-bold">{webSiteTitle}</h1>
          <p className="text-lg mt-2">{webSiteSlogan}</p>
        </div>
      </header>
      <Navbar />

      <main>{children}</main>
    </>
  );
};
export default HomeLayout;
