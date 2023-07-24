//components/mainLayout.js

import Head from "next/head";
import Link from "next/link";
import Footer from "./footer";

const MainLayout = ({pageTitle, children}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <header className="w-full bg-red-600 p-4">
          <nav>
            <Link href="/posts" className="text-black hover:text-gray-200">
              Posts
            </Link>
          </nav>
        </header>

        <main className="p-4 w-full max-w-screen-lg border border-red-500">
          {children}
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default MainLayout;
