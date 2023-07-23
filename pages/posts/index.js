// pages/posts/index.js
import Link from "next/link";
import getPostMetadata from "../../utils/getPostMetadata";

const PostsIndex = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          {/* Обновите элемент <Link> здесь: */}
          <Link href={`/posts/${post.slug}`} passHref>
            <span>{post.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const posts = getPostMetadata();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

export default PostsIndex;
