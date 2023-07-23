import Link from "next/link";
import postMetadata from "../../utils/postMetadata";
import InnerLayout from "../../components/mainLayout";

const PostsIndex = ({ posts }) => {
  return (
    <InnerLayout >
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.category}/${post.slug}`}>
            <span>{post.title}</span>
          </Link>
        </li>
      ))}
    </ul>
    </InnerLayout>
  );
};

export async function getStaticProps() {
  const posts = postMetadata();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

export default PostsIndex;
