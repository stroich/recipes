// pages/posts/[category]/[slug].js

import Aside from '../../../components/aside';
import PostPageLayout from '../../../components/layouts/postPageLayout';
import { MdToHtml } from '../../../components/markdown';
import { getPostData } from '../../../utils/postHandler';
import { getAllPostSlugs } from '../../../utils/postMetadata';

const PostPage = ({ postMetadata, content }) => {
  return (
    <PostPageLayout postMetadata={postMetadata}>
      <header></header>
      <main className="text-black shadow-md rounded-lg my-2 flex flex-col sm:flex-row">
        <div className="flex-grow w-2/3">
          <MdToHtml mdSource={content} />
        </div>
        <aside className="bg-gray-200 rounded-lg p-4 my-1 mr-1">
          <Aside />
        </aside>
      </main>
    </PostPageLayout>
  );
};

export async function getStaticPaths() {
  const postSlugs = await getAllPostSlugs();

  const slugsWithCategory = postSlugs.map(({ category, slug }) => ({
    params: { category, slug },
  }));

  return {
    paths: slugsWithCategory,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  const slug = params.slug;

  try {
    const { content, postMetadata } = await getPostData(category, slug);
    return { props: { content, postMetadata } };
  } catch (error) {
    return { notFound: true };
  }
}

export default PostPage;
