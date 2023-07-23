import fs from "fs";
import matter from "gray-matter";
import  getAllFilesRecursively  from "./fileHelpers";
import  parseMetadata from "./postMetadataHelpers";

export function getAllPostSlugs() {
  const folder = "_posts";
  const filepaths = getAllFilesRecursively(folder);
  const slugs = [];

  filepaths.forEach((filepath) => {
    const fileContents = fs.readFileSync(filepath, "utf8");
    const matterResult = matter(fileContents);
    const postMetadata = parseMetadata(matterResult, filepath);
    slugs.push({ category: postMetadata.category, slug: postMetadata.slug });
  });

  return slugs;
}

 const postMetadata = () => {
  const folder = "_posts";
  const filepaths = getAllFilesRecursively(folder);
  let posts = [];

  filepaths.forEach((filepath) => {
    const fileContents = fs.readFileSync(filepath, "utf8");
    const matterResult = matter(fileContents);
    const postMetadata = parseMetadata(matterResult, filepath);
    posts.push(postMetadata);
  });

  return posts;
};
export default postMetadata;
