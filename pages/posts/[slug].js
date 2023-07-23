import fs from "fs";
import matter from "gray-matter";
import { useRouter } from "next/router";
import path from "path";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "../../utils/getPostMetadata";
import Link from "next/link";

const Post = ({ postMetadata, content }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link href="/"> {/* Добавьте ссылку здесь */}
        <a>Вернуться на главную</a>
      </Link>
      <h2>{postMetadata.title}</h2>
      <p>{postMetadata.date}</p>
      <p>{postMetadata.subtitle}</p>
      <p>{postMetadata.author}</p>
      <Markdown>{content}</Markdown> // Обновлено для использования компонента Markdown
    </div>
  );
};

export async function getStaticPaths() {
  const posts = getPostMetadata();
  const slugs = posts.map((post) => post.slug);
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const fileContents = fs.readFileSync(path.join("_posts", `${slug}.md`), "utf8");
  const matterResult = matter(fileContents);

  const postMetadata = {
    title: matterResult.data.title,
    date: matterResult.data.date.toISOString(),
    subtitle: matterResult.data.subtitle || "",
    author: matterResult.data.author || "",
    slug,
  };

  const content = matterResult.content;

  return {
    props: {
      postMetadata,
      content,
    },
    revalidate: 1,
  };
}

export default Post;
