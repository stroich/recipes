import Image from 'next/image';
import React, { FC, useEffect } from 'react';

import MdToHtml from '../../components/features/MdToHtml/Md.ToHtml';
import Breadcrumb from '../../components/seo/breadcrumb';
import HomeLayout from '../../components/shared/layouts/homeLayout';
import SpinnerComponent from '../../components/shared/Spiner/Spiner';
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

  const [isLoading, setIsLoading] = React.useState(true);

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
                <span key={tag} className="bg-yellow-300 p-1 mr-1 rounded-xl font-bold">
                  #{tag}
                </span>
              ))}
            </div>
            <MdToHtml mdSource={content} />
          </div>
          <div className="flex-col">
            {isLoading && <SpinnerComponent />}
            {postMetadata.video ? (
              <video
                width="330"
                controls
                muted
                autoPlay
                onLoadedData={handleLoadedData}
                onLoadStart={handleLoadStart}
                onError={handleError}
              >
                <source src={postMetadata.video} type="video/mp4" />
                Your browser does not support the video.
              </video>
            ) : (
              <Image
                width="330"
                height="400"
                src={postMetadata.image}
                alt={'image'}
                onLoad={handleLoadedData}
                onError={handleError}
              />
            )}
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
