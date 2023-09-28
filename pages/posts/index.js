import Link from 'next/link';

import PostsIndexLayout from '../../components/layouts/postsIndexLayout';
import postMetadata from '../../utils/postMetadata';

const PostsIndex = ({ posts }) => {
  return (
    <PostsIndexLayout>
      <ol className="mb-2 list-decimal ml-6">
        {posts.map((post) => (
          <li key={post.slug} className="m-2 text-lg">
            <Link href={`/posts/${post.slug}`} className="text-blue-500 hover:underline">
              <span>{post.title}</span>
            </Link>
          </li>
        ))}
      </ol>
    </PostsIndexLayout>
  );
};

export async function getStaticProps() {
  const posts = await postMetadata();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

export default PostsIndex;
