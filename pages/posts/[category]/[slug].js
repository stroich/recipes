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
      <main className="text-black rounded-lg my-2 flex flex-col sm:flex-row gap-2">
        <div className="flex-grow">
          <MdToHtml mdSource={content} />
        </div>
        <Aside />
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
