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
  const [postWithFilter, setPostWithFilter] = useState(posts);

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

  useEffect(() => {
    const { filter: filterSlug } = router.query;
    if (filterSlug) {
      const filterNameAfterLoad = getFilterNameFromSlug(filterSlug as string);
      setPostWithFilter(posts.filter((post) => post.tags.some((el) => el === filterNameAfterLoad)));
    }
  }, [router.query, posts]);

  return (
    <HomeLayout title={'Рецепты'}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <section className="flex justify-between">
        <FilterRecipesSection handleFilterClick={handleFilterClick} />
        <List posts={postWithFilter} isRecipe={true} />
      </section>
    </HomeLayout>
  );
};

export default Recipes;
