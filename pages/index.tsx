import ArticleCardOnMain from '../components/entitites/ArticleCardOnMain';
import Card from '../components/entitites/Card';
import RecipeCardOnMain from '../components/entitites/RecipeCardOnMain';
import List from '../components/features/RecipesList/List';
import HomeLayout from '../components/shared/layouts/homeLayout';
import { getRandomElementsFromArray } from '../components/shared/RandomElements/RamdomElements';
import postMetadata from '../service/postMetadata';

const POSTS_FOLDER = '_source/_posts';
const ARTICLES_FOLDER = '_source/_blog';

export async function getStaticProps() {
  const allPosts = await postMetadata(POSTS_FOLDER);
  const allArticles = await postMetadata(ARTICLES_FOLDER);
  const articles = getRandomElementsFromArray(allArticles, 2);
  const posts = getRandomElementsFromArray(allPosts, 4);
  return {
    props: {
      posts,
      articles,
    },
    revalidate: 1,
  };
}
const Index = ({ posts, articles }) => {
  return (
    <HomeLayout title={'Кушать будешь?'}>
      <section className="flex justify-center">
        <div className="m-3">
          <h2 className="grid">Популярные рецепты:</h2>
          <div className="m-3 grid grid-cols-2 gap-2">
            {posts.map((post) => (
              <RecipeCardOnMain key={post.slug} recipe={post} />
            ))}
          </div>
        </div>
        <div className="m-3">
          {articles.map((article) => (
            <ArticleCardOnMain key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </HomeLayout>
  );
};

export default Index;
