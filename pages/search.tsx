import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import RecipeCardOnMain from '../components/entitites/RecipeCardOnMain';
import HomeLayout from '../components/shared/layouts/homeLayout';
import { Folders } from '../interfaces/interfaces';
import postMetadata from '../service/postMetadata';

export async function getStaticProps() {
  const posts = await postMetadata(Folders.Recipes);
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

const SearchPage = ({ posts }) => {
  const router = useRouter();
  const { t } = router.query;

  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const searchPosts = async () => {
      if (t) {
        const regexT = new RegExp(`${t}`, 'igu');
        const regexTMinusOne = new RegExp(`${t.slice(0, -1)}`, 'igu');

        const filtered = posts.filter((post) => {
          return regexT.test(post.title) || regexTMinusOne.test(post.title);
        });
        setFilteredPosts(filtered);
      }
    };
    searchPosts();
  }, [t]);

  return (
    <HomeLayout title={'Блог'}>
      <div className="md:px-16 m-3">
        <h2 className={'my-10'}>Результаты поиска по запросу: {t}</h2>

        {filteredPosts.length !== 0 && (
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 justify-items-center">
            {filteredPosts.map((post) => (
              <RecipeCardOnMain key={post.slug} recipe={post} />
            ))}
          </div>
        )}
        {filteredPosts.length === 0 && <h4 className={'my-36 text-center'}>Ничего не найдено</h4>}
      </div>
    </HomeLayout>
  );
};

export default SearchPage;
