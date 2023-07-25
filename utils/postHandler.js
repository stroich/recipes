// utils/postHandler.js
import processFiles from "./processFiles";
import parseMetadata from "./postMetadataHelpers";
import {POSTS_FOLDER} from "./constants/folderVars";

export const getPostData = async (category, slug) => {
  const matchingPosts = await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    if (postMetadata.slug === slug && (category === null || postMetadata.category === category)) {
      return { content: matterResult.content, postMetadata };
    }
  });

  // Фильтрация пустых результатов (оптимизация для случая, когда не все файлы соответствуют)
  const filteredPosts = matchingPosts.filter((post) => post !== undefined);

  if (filteredPosts.length) {
    return filteredPosts[0];
  }

  throw new Error(`Post with slug "${slug}" and category "${category}" not found.`);
};
