import Image from 'next/image';
import React, { FC, useEffect } from 'react';

import MdToHtml from '../../components/features/MdToHtml/Md.ToHtml';
import HomeLayout from '../../components/shared/layouts/homeLayout';
import SpinnerComponent from '../../components/shared/Spiner/Spiner';
import { getRecipeData } from '../../service/postHandler';
import { getAllPostSlugs } from '../../service/postMetadata';

const POSTS_FOLDER = '_source/_posts';

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
      <article className="border-0 px-20">
        <h2 className="text-center">{postMetadata.title}</h2>

        <div className="flex justify-around">
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
  const postSlugs = await getAllPostSlugs(POSTS_FOLDER);

  const paths = postSlugs.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const { content, postMetadata } = await getRecipeData(params.slug, POSTS_FOLDER);
    return { props: { content, postMetadata } };
  } catch (error) {
    return { notFound: true };
  }
}

export default Slug;
