import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import loadPosts from '../../lib/loadPosts';

const PostPage = ({ content }) => {
  const router = useRouter();

  return (
    <div>
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <Markdown>{content}</Markdown>
      )}
    </div>
  );
};

export async function getStaticPaths() {
  const posts = loadPosts();

  return {
    paths: posts.map(post => ({
      params: { id: post.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const posts = loadPosts();
  const match = posts.find(post => post.slug === id);
  const { content } = matter(match.content);

  return {
    props: {
      content,
    },
  };
}

export default PostPage;
