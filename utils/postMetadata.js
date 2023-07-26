// utils/postMetadata.js
import { POSTS_FOLDER } from './constants/webSiteVars';
import parseMetadata from './postMetadataHelpers';
import processFiles from './processFiles';

export async function getAllPostSlugs() {
  const slugs = await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    const category = postMetadata.category === 'default' ? '' : postMetadata.category;
    return { category: category, slug: postMetadata.slug };
  });

  return slugs;
}

const postMetadata = async () => {
  const posts = await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    return postMetadata;
  });

  return posts;
};

export default postMetadata;
