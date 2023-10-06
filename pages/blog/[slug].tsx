import HomeLayout from '../../components/shared/layouts/homeLayout';
import { getArticlesData } from '../../service/blogHandler';
import { getAllArticleSlugs } from '../../service/blogMetadata';

export async function getStaticPaths() {
  const articleSlugs = await getAllArticleSlugs();
  const paths = articleSlugs.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const { content, articleMetadata } = await getArticlesData(params.slug);
    return { props: { content, articleMetadata } };
  } catch (error) {
    return { notFound: true };
  }
}

const Article = ({ content, articleMetadata }) => {
  const { title, subtitle, date, author, language, category, taxonomy, ingredients, weight, slug } =
    articleMetadata;
  return (
    <HomeLayout title={title}>
      <section className="flex justify-center">
        <h2 className="grid">{title}</h2>
      </section>
    </HomeLayout>
  );
};

export default Article;
