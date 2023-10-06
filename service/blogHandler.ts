import parseMetadata from './postMetadataHelpers';
import processFiles from './processFiles';

const ARTICLES_FOLDER = '_source/_blog';

export async function getAllArticlesData() {
  return await processFiles(ARTICLES_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    return { content: matterResult.content, ...postMetadata };
  });
}
export const getArticlesData = async (slug) => {
  const matchingPosts = await processFiles(ARTICLES_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    if (postMetadata.slug === slug) {
      return { content: matterResult.content, postMetadata };
    }
  });

  const filteredPosts = matchingPosts.filter((post) => post !== undefined);

  if (filteredPosts.length) {
    return filteredPosts[0];
  }

  throw new Error(`Post with slug "${slug}" not found.`);
};
