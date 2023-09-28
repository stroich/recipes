import fs from 'fs';

import matter from 'gray-matter';

import getAllFilesRecursively from './fileHelpers';

const processFiles = async (folder, callback) => {
  const filePaths = getAllFilesRecursively(folder);
  const results = [];

  filePaths.forEach((filepath) => {
    const fileContents = fs.readFileSync(filepath, 'utf8');
    const matterResult = matter(fileContents);
    const result = callback(matterResult, filepath);
    results.push(result);
  });

  return results;
};

export default processFiles;
