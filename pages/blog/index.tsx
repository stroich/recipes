import List from '../../components/features/RecipesList/List';
import HomeLayout from '../../components/shared/layouts/homeLayout';
import postMetadata from '../../service/postMetadata';

const POSTS_FOLDER = '_source/_blog';

export async function getStaticProps() {
  const articles = await postMetadata(POSTS_FOLDER);
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
