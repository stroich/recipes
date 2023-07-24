import processFiles from './processFiles';
import parseMetadata from './postMetadataHelpers';

export async function getAllPostSlugs() {
  const folder = '_posts';

  const slugs = await processFiles(folder, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    return { category: postMetadata.category, slug: postMetadata.slug };
  });

  return slugs;
}

const postMetadata = async () => {
  const folder = '_posts';

  const posts = await processFiles(folder, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    return postMetadata;
  });

  return posts;
};

export default postMetadata;
