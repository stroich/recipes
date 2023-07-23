import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { getAllFilesRecursively } from "./fileHelpers"; // импортируйте здесь

const getPostMetadata = () => {
  const folder = "_posts";
  const filepaths = getAllFilesRecursively(folder);
  let posts = [];

  filepaths.forEach((filepath) => {
    const fileContents = fs.readFileSync(filepath, "utf8");
    const matterResult = matter(fileContents);
    const postMetadata = {
      title: matterResult.data.title,
      date: matterResult.data.date.toISOString(),
      subtitle: matterResult.data.subtitle || "",
      author: matterResult.data.author || "",
      slug: matterResult.data.slug || path.basename(filepath).replace(".md", ""),
      category: matterResult.data.category,
    };

    posts.push(postMetadata);
  });

  return posts;
};

export default getPostMetadata;
