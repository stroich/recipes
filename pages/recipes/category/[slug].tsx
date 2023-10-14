import { useRouter } from 'next/router';

import Breadcrumb from '../../../components/seo/breadcrumb';
import HomeLayout from '../../../components/shared/layouts/homeLayout';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'Рецепты', href: '/recipes' },
    { label: slug, href: `/recipes/category/${slug}` },
  ];
  return (
    <HomeLayout title={'Подкатегория'}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
    </HomeLayout>
  );
};

export default Slug;
