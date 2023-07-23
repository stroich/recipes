import React from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "./footer";

const InnerLayout = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/posts">
          Posts
        </Link>
        {/* Здесь можно добавить шапку вашего сайта, например, навигацию */}
      </header>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default InnerLayout;
