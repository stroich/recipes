// utils/postHandler.js
import processFiles from "./processFiles";
import parseMetadata from "./postMetadataHelpers";
import {POSTS_FOLDER} from "./constants/folderVars";

export async function getAllPostsData() {
  return await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    return {content: matterResult.content, ...postMetadata};
  });
}
export const getPostData = async (category, slug) => {
  category = category || null;
  const matchingPosts = await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    if (postMetadata.slug === slug && (category === null || postMetadata.category === category)) {
      return { content: matterResult.content, postMetadata };
    }
  });

  const filteredPosts = matchingPosts.filter((post) => post !== undefined);

  if (filteredPosts.length) {
    return filteredPosts[0];
  }

  throw new Error(`Post with slug "${slug}" and category "${category}" not found.`);
};
