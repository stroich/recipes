import parseMetadata from './postMetadataHelpers';
import processFiles from './processFiles';
import { POSTS_FOLDER } from '../constants/webSiteVars';

export async function getAllPostSlugs() {
  return await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    return { slug: postMetadata.slug };
  });
}

const postMetadata = async () => {
  return await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    return parseMetadata(matterResult, filepath);
  });
};

export default postMetadata;
