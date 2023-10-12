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
  { label: 'Блог', href: '/blog' },
];

const Blog = ({ articles }) => {
  return (
    <HomeLayout title={'Блог'}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <section className="flex flex-col items-center">
        <List posts={articles} isRecipe={false} />
      </section>
    </HomeLayout>
  );
};

export default Blog;
