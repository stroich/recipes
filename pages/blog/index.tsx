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
      <div className="md:px-16">
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <section className="flex flex-col items-center">
          <List posts={articles} isRecipe={false} />
        </section>
      </div>
    </HomeLayout>
  );
};

export default Blog;
