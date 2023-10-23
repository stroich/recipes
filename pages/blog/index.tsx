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
    <HomeLayout
      title={'Блог о здоровом образе жизни на портале «Кушать будешь?»'}
      description={
        'Изучайте полезные статьи о правильном питании на нашем сайте. Узнайте советы и рекомендации экспертов о здоровом образе жизни, сбалансированном питании и здоровых пищевых привычках, чтобы достичь оптимального благополучия и формы.'
      }
      keywords={
        'правильное питание, вегетарианство, похудение, сбалансированная диета, здоровое меню'
      }
    >
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
