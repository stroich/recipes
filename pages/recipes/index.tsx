import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import FilterRecipesSection from '../../components/features/FilterRecipesSection/FilterRecipesSection';
import List from '../../components/features/List/List';
import Breadcrumb from '../../components/seo/breadcrumb';
import getFilterNameFromSlug from '../../components/shared/getFilterNameFromSlug/getFilterNameFromSlug';
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
  const router = useRouter();
  const [postWithFilter, setPostWithFilter] = useState(
    posts.sort((post1, post2) => (post1.weight > post2.weight ? -1 : 1))
  );
  const [filterName, setFilterName] = useState('');

  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'Рецепты', href: '/recipes' },
  ];

  const handleFilterClick = (filterName, filterSlug) => {
    router.push({
      pathname: '/recipes',
      query: { filter: filterSlug },
    });
    setPostWithFilter(posts.filter((post) => post.tags.some((el) => el === filterName)));
  };

  const resetFilters = () => {
    router.push({
      pathname: '/recipes',
    });
    setPostWithFilter(posts);
    setFilterName('');
  };

  useEffect(() => {
    const { filter: filterSlug } = router.query;
    if (filterSlug) {
      const filterNameAfterLoad = getFilterNameFromSlug(filterSlug as string);
      setFilterName(filterNameAfterLoad);
      setPostWithFilter(posts.filter((post) => post.tags.some((el) => el === filterNameAfterLoad)));
    }
  }, [router.query, posts]);

  return (
    <HomeLayout
      title="Рецепты для вашего здоровья на портале «Кушать будешь?»"
      description={
        'Портал «Кушать будешь?» - это вкусные рецепты для правильного питания. Откройте мир вкусных и здоровых блюд. Попробуйте сегодня и начните свой путь к здоровому образу жизни с нашими рецептами.'
      }
      keywords={
        'полезные завтраки, пп завтрак, завтрак пп, пп ужин, низкокалорийные блюда, рецепты пп, пп блюда, пп десерты, пп сладости, сладости без сахара,  десерт без сахара, пп рецепты на неделю, пп сырники рецепт'
      }
    >
      <div className="md:px-16">
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <section className="flex flex-col md:flex-row md:justify-between justify-center">
          <FilterRecipesSection
            handleFilterClick={handleFilterClick}
            filterName={filterName}
            resetFilters={resetFilters}
          />
          <List posts={postWithFilter} isRecipe={true} />
        </section>
      </div>
    </HomeLayout>
  );
};

export default Recipes;
