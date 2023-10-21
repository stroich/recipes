import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

import ArticleCardOnMain from '../components/entitites/ArticleCardOnMain';
import RecipeCardOnMain from '../components/entitites/RecipeCardOnMain';
import HomeLayout from '../components/shared/layouts/homeLayout';
import PlateMethod from '../components/shared/PlateMethod/PlateMethod';
import { getRandomElementsFromArray } from '../components/shared/RandomElements/RamdomElements';
import { CATEGORIES } from '../constants/navigationProperties';
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
  const [allRecipes, setAllRecipes] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const initialRecipes = posts.reduce((recipes, post) => {
      recipes[post.slug] = false;
      return recipes;
    }, {});

    setAllRecipes(initialRecipes);
  }, [posts]);

  return (
    <HomeLayout title={'Кушать будешь?'}>
      <section className="flex flex-col md:flex-row justify-between container m-auto 2xl:px-20  md:px-10 px-3">
        <div className="md:m-3 m-auto">
          <h2>Популярные рецепты:</h2>
          <div className=" grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2">
            {posts.map((post) => (
              <RecipeCardOnMain
                key={post.slug}
                recipe={post}
                allCompositions={allRecipes}
                setRecipeStatus={setAllRecipes}
              />
            ))}
          </div>
        </div>
        <div className="lg:bg-yellow-50 p-6 m-auto md:m-0">
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
      <section className="container m-auto 2xl:px-20  md:px-10 px-3">
        <h2>Каталог рецептов:</h2>
        <div className="flex gap-20">
          {CATEGORIES.map((category) => (
            <div key={category.title}>
              <h4>{category.title}:</h4>
              <div className="flex flex-col my-5">
                {category.data.map((subcat) => (
                  <Link
                    href={`/recipes?filter=${subcat.slug}`}
                    key={subcat.slug}
                    className="bg-yellow-300 rounded-xl max-w-fit px-2 mr-1 mb-1 text-sm font-bold hover:shadow transition-all duration-100"
                  >
                    #{subcat.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </HomeLayout>
  );
};

export default Index;
