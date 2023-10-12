import { FC } from 'react';

import ArticleCardOnMain from '../components/entitites/ArticleCardOnMain';
import RecipeCardOnMain from '../components/entitites/RecipeCardOnMain';
import HomeLayout from '../components/shared/layouts/homeLayout';
import PlateMethod from '../components/shared/PlateMethod/PlateMethod';
import { getRandomElementsFromArray } from '../components/shared/RandomElements/RamdomElements';
import { Folders, IArticle } from '../interfaces/interfaces';
import postMetadata from '../service/postMetadata';

interface IndexProps {
  posts: IArticle[];
  articles: IArticle[];
}

export async function getStaticProps() {
  const allPosts = await postMetadata(Folders.Recipes);
  const allArticles = await postMetadata(Folders.Posts);
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
const Index: FC<IndexProps> = ({ posts, articles }) => {
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
      <PlateMethod />
    </HomeLayout>
  );
};

export default Index;
