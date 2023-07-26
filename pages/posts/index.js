import Link from 'next/link';

import PostsIndexLayout from '../../components/layouts/postsIndexLayout';
import postMetadata from '../../utils/postMetadata';

const PostsIndex = ({ posts }) => {
  return (
    <PostsIndexLayout>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.category}/${post.slug}`}
              className="text-blue-500 hover:underline"
            >
              <span>{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
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
