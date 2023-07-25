import {Navbar} from "../navBar";
import Head from "next/head";
import Breadcrumb from "../seo/breadcrumb";
import DateFormatter from "../../utils/dateFormatter";


const PostPageLayout = ({postMetadata, children}) => {
  const breadcrumbs = [
    {label: "Home", href: "/"},
    {label: "Posts", href: "/posts"},
    {label: postMetadata.title, href: `/posts/${postMetadata.category}/${postMetadata.slug}`},
  ];

  const pageTitle = postMetadata.title;
  const subtitle = postMetadata.subtitle;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={postMetadata.subtitle}/>
      </Head>
      <header className="bg-indigo-900 text-white">
        <div className="container mx-auto py-8">
          <h1 className="text-5xl font-bold">{pageTitle}</h1>
          <p className="text-xl mt-4">{subtitle}</p>
        </div>
      </header>
      <Navbar/>
      <Breadcrumb breadcrumbs={breadcrumbs}/>
      {children}
      <DateFormatter dateString={postMetadata.date}/>

    </>
  );
};
export default PostPageLayout;
