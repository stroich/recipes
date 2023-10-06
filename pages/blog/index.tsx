import List from '../../components/features/RecipesList/List';
import HomeLayout from '../../components/shared/layouts/homeLayout';
import { articleMetadata } from '../../service/blogMetadata';

export async function getStaticProps() {
  const articles = await articleMetadata();
  return {
    props: {
      articles,
    },
    revalidate: 1,
  };
}

const Blog = ({ articles }) => {
  return (
    <HomeLayout title={'Блог'}>
      <section className="flex justify-center">
        <h2 className="grid">Популярные статьи:</h2>
        <List posts={articles} isRecipe={false} />
      </section>
    </HomeLayout>
  );
};

export default Blog;
