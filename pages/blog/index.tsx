import List from '../../components/features/List/List';
import Breadcrumb from '../../components/seo/breadcrumb';
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

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Статьи', href: '/blog' },
];

const Blog = ({ articles }) => {
  return (
    <HomeLayout title={'Блог'}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <section className="flex justify-center">
        <h2 className="grid">Популярные статьи:</h2>
        <List posts={articles} isRecipe={false} />
      </section>
    </HomeLayout>
  );
};

export default Blog;
