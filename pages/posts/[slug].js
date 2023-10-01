import Aside from '../../components/aside';
import DisqusComments from '../../components/disqusComments/disqusComments';
import PostPageLayout from '../../components/layouts/postPageLayout';
import { MdToHtml } from '../../components/markdown';
import { getPostData } from '../../service/postHandler';
import { getAllPostSlugs } from '../../service/postMetadata';

const PostPage = ({ postMetadata, content }) => {
  const { title, subtitle, date, author, language, category, taxonomy, ingredients, weight, slug } =
    postMetadata;
  return (
    <PostPageLayout postMetadata={postMetadata}>
      {/*<header></header>*/}
      <main className="text-black rounded-lg my-2 grid sm:grid-cols-5 grid-cols-1 gap-2">
        <div className="sm:col-start-1 sm:col-end-5">
          <article lang={language} className="bg-white shadow-md rounded-md text-gray-800 my-1 p-2">
            <p>title: {title}</p>
            <p>subtitle: {subtitle}</p>
            <p>date: {date}</p>
            <p>author: {author}</p>
            <p>category: {category}</p>
            <p>ingredients: {ingredients}</p>
            <p>weight: {weight}</p>
            <p>slug: {slug}</p>
            <p>taxonomy: {taxonomy}</p>
            <p>language: {language}</p>
            <p>{console.log(postMetadata)}</p>
            <hr />
            <MdToHtml mdSource={content} />
          </article>
          <DisqusComments postMetadata={postMetadata} />
        </div>
        <Aside />
      </main>
    </PostPageLayout>
  );
};

export async function getStaticPaths() {
  const postSlugs = await getAllPostSlugs();

  const paths = postSlugs.map(({ slug }) => ({
    // Извлекаем slug из каждого объекта
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const { content, postMetadata } = await getPostData(params.slug);
    return { props: { content, postMetadata } };
  } catch (error) {
    return { notFound: true };
  }
}

export default PostPage;
