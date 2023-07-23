// utils/getPostData.js
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const getPostData = async (category, slug) => {
  const files = fs.readdirSync("_posts");
  const filename = files.find((file) => {
    const fileContents = fs.readFileSync(path.join("_posts", file), "utf8");
    const matterResult = matter(fileContents);
    return matterResult.data.slug === slug && matterResult.data.category === category;
  });

  if (filename) {
    const fileContents = fs.readFileSync(path.join("_posts", filename), "utf8");
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
