import List from '../../components/features/List/List';
import HomeLayout from '../../components/shared/layouts/homeLayout';
import { Folders } from '../../interfaces/interfaces';
import postMetadata from '../../service/postMetadata';

export async function getStaticProps() {
  const articles = await postMetadata(Folders.Posts);
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
