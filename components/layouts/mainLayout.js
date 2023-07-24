//components/mainLayout.js

import Head from "next/head";
import Footer from "../footer";

const MainLayout = ({pageTitle, children}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <section
        className="flex flex-col min-h-screen bg-indigo-100 p-8 font-sans max-w-4xl mx-auto"
      >
        {children}
        <Footer/>
      </section>
    </>);
};

export default MainLayout;
