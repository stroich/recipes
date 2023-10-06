import React, { FC } from 'react';

import MdToHtml from '../../components/features/MdToHtml/Md.ToHtml';
import HomeLayout from '../../components/shared/layouts/homeLayout';
import { getRecipeData } from '../../service/postHandler';
import { getAllPostSlugs } from '../../service/postMetadata';
<<<<<<< HEAD
=======

const POSTS_FOLDER = '_source/_posts';
>>>>>>> main

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
}

interface SlugProps {
  postMetadata: IRecipeMetadata;
  content: string;
}

const Slug: FC<SlugProps> = ({ postMetadata, content }) => {
  return (
    <HomeLayout title={'Кушать будешь?'}>
      <article className="border-0">
        <h2 className="items-center">{postMetadata.title}</h2>
        <div>
          {postMetadata.tags.map((tag) => (
            <span key={tag} className="bg-yellow-300 p-1 mr-1 rounded-xl">#{tag}</span>
          ))}
        </div>
        <MdToHtml mdSource={content} />
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
