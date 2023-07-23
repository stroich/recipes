import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { getAllFilesRecursively } from "./fileHelpers"; // импортируйте здесь

const getPostData = async (category, slug) => {
  const folder = "_posts";
  const filepaths = getAllFilesRecursively(folder);
  const filepath = filepaths.find((filepath) => {
    const fileContents = fs.readFileSync(filepath, "utf8");
    const matterResult = matter(fileContents);
    return matterResult.data.slug === slug && matterResult.data.category === category;
  });

  if (filepath) {
    const fileContents = fs.readFileSync(filepath, "utf8");
    const matterResult = matter(fileContents);
    const postMetadata = {
      title: matterResult.data.title,
      date: matterResult.data.date.toISOString(),
      subtitle: matterResult.data.subtitle || "",
      author: matterResult.data.author || "",
      slug,
      category,
    };

    return { content: matterResult.content, postMetadata };
  }

  throw new Error(`Post with slug "${slug}" and category "${category}" not found.`);
};

export default getPostData;
