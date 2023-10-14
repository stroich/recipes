import { CATEGORIES } from '../../../constants/navigationProperties';

const getFilterNameFromSlug = (slug: string) => {
  let res = '';
  CATEGORIES.map((categories) => {
    return categories.data.map((category) => {
      if (category.slug === slug) {
        res = category.name;
      }
    });
  });

  return res;
};

export default getFilterNameFromSlug;
