import fs from "fs";
import matter from "gray-matter";
import getAllFilesRecursively from "./fileHelpers";
import parseMetadata from "./postMetadataHelpers";

export const getPostData = async (category, slug) => {
  const folder = "_posts";
  const filepaths = getAllFilesRecursively(folder);
  const filepath = filepaths.find((filepath) => {
    const fileContents = fs.readFileSync(filepath, "utf8");
    const matterResult = matter(fileContents);
    const postMetadata = parseMetadata(matterResult, filepath);
    return postMetadata.slug === slug && (category === null || postMetadata.category === category);
  });

  if (filepath) {
    const fileContents = fs.readFileSync(filepath, "utf8");
    const matterResult = matter(fileContents);
    const postMetadata = parseMetadata(matterResult, filepath);
    return {content: matterResult.content, postMetadata};
  }

  throw new Error(`Post with slug "${slug}" and category "${category}" not found.`);
};

