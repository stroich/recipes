// pages/_app.js
import MainLayout from "../components/mainLayout";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  const pageTitle = pageProps.pageTitle || "pageTitle not set";
  return (
    <MainLayout pageTitle={pageTitle}>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
