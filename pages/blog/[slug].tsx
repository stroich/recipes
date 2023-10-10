import React from 'react';

import MdToHtml from '../../components/features/MdToHtml/Md.ToHtml';
import HomeLayout from '../../components/shared/layouts/homeLayout';
import { Folders } from '../../interfaces/interfaces';
import { getRecipeData } from '../../service/postHandler';
import { getAllPostSlugs } from '../../service/postMetadata';

const Article = ({ postMetadata, content }) => {
  return (
    <HomeLayout title={postMetadata.title}>
      <section className="flex flex-col items-center justify-center">
        <h2 className="">{postMetadata.title}</h2>
        <div className={'max-w-screen-lg'}>
          <MdToHtml mdSource={content} />
        </div>
      </section>
    </HomeLayout>
  );
};

export async function getStaticPaths() {
  const postSlugs = await getAllPostSlugs(Folders.Posts);

  const paths = postSlugs.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const { content, postMetadata } = await getRecipeData(params.slug, Folders.Posts);
    return { props: { content, postMetadata } };
  } catch (error) {
    return { notFound: true };
  }
}

export default Article;
