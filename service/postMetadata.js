import parseMetadata from './postMetadataHelpers';
import processFiles from './processFiles';

export async function getAllPostSlugs(path) {
  return await processFiles(path, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    return { slug: postMetadata.slug };
  });
}

const postMetadata = async (path) => {
  return await processFiles(path, (matterResult, filepath) => {
    return parseMetadata(matterResult, filepath);
  });
};

export default postMetadata;
