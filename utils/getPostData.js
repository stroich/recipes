// utils/getPostData.js
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const getPostData = async (slug) => {
  const fileContents = fs.readFileSync(path.join("_posts", `${slug}.md`), "utf8");
  const matterResult = matter(fileContents);
  const postMetadata = {
    title: matterResult.data.title,
    date: matterResult.data.date.toISOString(),
    subtitle: matterResult.data.subtitle || "",
    author: matterResult.data.author || "",
    slug,
  };

  return { content: matterResult.content, postMetadata };
};

export default getPostData;
