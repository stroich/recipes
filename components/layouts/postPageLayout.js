import Head from 'next/head';

import { webSiteTitle } from '../../utils/constants/webSiteVars';
import { DateFormatter } from '../../utils/dateFormatter';
import { Navbar } from '../navBar';
import Breadcrumb from '../seo/breadcrumb';

const PostPageLayout = ({ postMetadata, children }) => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Posts', href: '/posts' },
    { label: postMetadata.title, href: `/posts/${postMetadata.category}/${postMetadata.slug}` },
  ];

  const pageTitle = postMetadata.title;
  const subtitle = postMetadata.subtitle;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={postMetadata.subtitle} />
      </Head>
      <header className="bg-gradient-to-r from-yellow-200 via-orange-300 to-pink-300 py-2">
        <div className="container mx-auto text-black text-center">
          <h1 className="text-4xl font-bold">{pageTitle}</h1>
          <p className="text-lg mt-2">{subtitle + webSiteTitle}</p>
        </div>
      </header>
      <Navbar />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      {children}
      <DateFormatter dateString={postMetadata.date} />
    </>
  );
};
export default PostPageLayout;
