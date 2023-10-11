import FilterRecipesSection from '../../components/features/FilterRecipesSection/FilterRecipesSection';
import List from '../../components/features/List/List';
import Breadcrumb from '../../components/seo/breadcrumb';
import HomeLayout from '../../components/shared/layouts/homeLayout';
import { Folders } from '../../interfaces/interfaces';
import postMetadata from '../../service/postMetadata';

export async function getStaticProps() {
  const posts = await postMetadata(Folders.Recipes);
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

const breadcrumbs = [
  {label: 'Главная', href: '/'},
  {label: 'Рецепты', href: '/recipes'}
];

const Recipes = ({ posts }) => {
  return (
    <HomeLayout title={'Рецепты'}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <section className="flex justify-center">
        <FilterRecipesSection />
        <List posts={posts} isRecipe={true} />
      </section>
    </HomeLayout>
  );
};

export default Recipes;
