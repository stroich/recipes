import Head from 'next/head';

import { webSiteTitle } from '../../utils/constants/webSiteVars';
import { DateFormatter } from '../../utils/dateFormatter';
import AdvertisementPlaceholder from '../advertising/placeholder';
import Aside from '../aside';
import UserImg from '../author/userImg';
import UserName from '../author/userName';
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
      <header className="bg-gradient-to-r from-yellow-200 via-orange-300 to-pink-300 py-2 shadow-md rounded-md">
        <div className="container mx-auto text-black text-center">
          <h1 className="text-4xl font-bold">{pageTitle}</h1>
          <p className="text-lg mt-2">{subtitle + webSiteTitle}</p>
        </div>
      </header>
      <Navbar />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <main>
        <div className="flex-grow">{children}</div>
      </main>
      <div className="container mx-auto text-black text-center flex flex-row items-center justify-between shadow-md rounded-md">
        <div>
          <DateFormatter dateString={postMetadata.date} />
        </div>
        <div className="flex items-center space-x-4 gap-2">
          <UserImg />
          <UserName userName={postMetadata.author} />
        </div>
      </div>
      <AdvertisementPlaceholder />
    </>
  );
};
export default PostPageLayout;
