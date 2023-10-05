import parseMetadata from './postMetadataHelpers';
import processFiles from './processFiles';

const POSTS_FOLDER = '_source/_posts';

export async function getAllRecipesData() {
  return await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    return { content: matterResult.content, ...postMetadata };
  });
}
export const getRecipeData = async (slug) => {
  const matchingPosts = await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
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
