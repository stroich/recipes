import Link from 'next/link';
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
  const articles = getRandomElementsFromArray(allArticles, 3);
  const posts = getRandomElementsFromArray(allPosts, 9);
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
      <section className="flex flex-col md:flex-row justify-between container m-auto 2xl:px-20  md:px-10 px-3">
        <div className="md:m-3 m-auto">
          <h2>Популярные рецепты:</h2>
          <div className=" grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-2">
            {posts.map((post) => (
              <RecipeCardOnMain key={post.slug} recipe={post} />
            ))}
          </div>
        </div>
        <div className="bg-yellow-50 p-6 m-auto md:m-0">
          <h5 className="mb-4 font-cursive text-center">Популярное в блоге:</h5>
          {articles.map((article) => (
            <ArticleCardOnMain key={article.slug} article={article} />
          ))}
          <Link
            href={'/blog'}
            className="block mx-auto mt-32 bg-yellow-300 py-1 px-5 rounded-xl text-lg font-cursive font-bold"
          >
            Читать все статьи
          </Link>
        </div>
      </section>
      <PlateMethod />
    </HomeLayout>
  );
};

export default Index;
