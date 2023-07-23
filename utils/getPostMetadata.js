// utils/getPostMetadata.js
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const getPostMetadata = () => {
  const folder = "_posts";
  const files = fs.readdirSync(folder);
  let posts = [];

  files.forEach((fileName) => {
    const fileContents = fs.readFileSync(path.join(folder, fileName), "utf8");
    const matterResult = matter(fileContents);
    const postMetadata = {
      title: matterResult.data.title,
      date: matterResult.data.date.toISOString(),
      subtitle: matterResult.data.subtitle || "",
      author: matterResult.data.author || "",
      slug: matterResult.data.slug || fileName.replace(".md", ""),
      category: matterResult.data.category,
    };

    posts.push(postMetadata);
  });

  return posts;
};

export default getPostMetadata;
