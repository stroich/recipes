import FilterRecipesSection from '../../components/features/FilterRecipesSection/FilterRecipesSection';
import List from '../../components/features/RecipesList/List';
import HomeLayout from '../../components/shared/layouts/homeLayout';
import postMetadata from '../../service/postMetadata';

const POSTS_FOLDER = '_source/_posts';

export async function getStaticProps() {
  const posts = await postMetadata(POSTS_FOLDER);
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
