import Link from 'next/link';
import React, { FC } from 'react';

import MdToHtml from '../../components/features/MdToHtml/Md.ToHtml';
import Breadcrumb from '../../components/seo/breadcrumb';
import { getSlugFromFilterName } from '../../components/shared/getFilterNameFromSlug/getFilterNameFromSlug';
import HomeLayout from '../../components/shared/layouts/homeLayout';
import SpinnerComponent from '../../components/shared/Spiner/Spiner';
import VideoWidget from '../../components/widgets/VideoWidget/VideoWidget';
import { Folders } from '../../interfaces/interfaces';
import { getRecipeData } from '../../service/postHandler';
import { getAllPostSlugs } from '../../service/postMetadata';

interface IRecipeMetadata {
  title: string;
  subtitle: string;
  date: string;
  author: string;
  image: string;
  language: string;
  slug: string;
  tags: string[];
  weight: number;
  video: string;
}

interface SlugProps {
  postMetadata: IRecipeMetadata;
  content: string;
}

const Slug: FC<SlugProps> = ({ postMetadata, content }) => {
  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'Рецепты', href: '/recipes' },
    { label: `${postMetadata.title}`, href: `/recipes/${postMetadata.slug}` },
  ];

  const [isLoading, setIsLoading] = React.useState(false);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
  };

  return (
    <HomeLayout title={'Кушать будешь?'}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <article className="border-0">
        <h2 className="text-center">{postMetadata.title}</h2>
        <div className="flex justify-between">
          <div className="w-[40%]">
            <div>
              {postMetadata.tags.map((tag) => (
                <Link
                  href={`/recipes?filter=${getSlugFromFilterName(tag)}`}
                  key={tag}
                  className="bg-yellow-300 text-sm p-1 mr-1 rounded-xl font-bold hover:shadow transition-all duration-100"
                >
                  #{tag}
                </Link>
              ))}
            </div>
            <MdToHtml mdSource={content} />
          </div>
          <div className="flex-col h-60 w-[330px]">
            {isLoading && <SpinnerComponent />}
            <VideoWidget
              videoLink={postMetadata.video}
              imageLink={postMetadata.image}
              handleLoadedData={handleLoadedData}
              handleLoadStart={handleLoadStart}
              handleError={handleError}
              isLoading={isLoading}
            />
          </div>
        </div>
      </article>
    </HomeLayout>
  );
};

export async function getStaticPaths() {
  const postSlugs = await getAllPostSlugs(Folders.Recipes);

  const paths = postSlugs.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const { content, postMetadata } = await getRecipeData(params.slug, Folders.Recipes);
    return { props: { content, postMetadata } };
  } catch (error) {
    return { notFound: true };
  }
}

export default Slug;
