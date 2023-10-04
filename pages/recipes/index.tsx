import FilterRecipesSection from '../../components/features/FilterRecipesSection/FilterRecipesSection';
import RecipesList from '../../components/features/RecipesList/RecipesList';
import HomeLayout from '../../components/shared/layouts/homeLayout';
import postMetadata from '../../service/postMetadata';

export async function getStaticProps() {
  const posts = await postMetadata();
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
        <RecipesList posts={posts} />
      </section>
    </HomeLayout>
  );
};

export default Recipes;
