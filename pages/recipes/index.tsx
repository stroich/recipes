import FilterRecipesSection from '../../components/features/FilterRecipesSection/FilterRecipesSection';
import List from '../../components/features/List/List';
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

const Recipes = ({ posts }) => {
  return (
    <HomeLayout title={'Рецепты'}>
      <section className="flex justify-center">
        <FilterRecipesSection />
        <List posts={posts} isRecipe={true} />
      </section>
    </HomeLayout>
  );
};

export default Recipes;
