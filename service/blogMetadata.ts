import parseMetadata from './postMetadataHelpers';
import processFiles from './processFiles';

const ARTICLE_FOLDER = '_source/_blog';

export async function getAllArticleSlugs() {
  return await processFiles(ARTICLE_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    console.log(postMetadata);
    return { slug: postMetadata.slug };
  });
}

export const articleMetadata = async () => {
  return await processFiles(ARTICLE_FOLDER, (matterResult, filepath) => {
    return parseMetadata(matterResult, filepath);
  });
};
