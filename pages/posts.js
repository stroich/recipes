import Link from 'next/link';
import loadPosts from '../lib/loadPosts';

const PostsPage = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.slug}>
          <Link href={`/posts/${post.slug}`} passHref>
            <div>
              {post.slug}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const posts = loadPosts();

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
