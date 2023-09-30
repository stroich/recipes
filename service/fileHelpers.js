import fs from 'fs';
import path from 'path';

function getAllFilesRecursively(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      fileList = getAllFilesRecursively(path.join(dir, file), fileList);
    } else {
      if (file.endsWith('.md')) {
        fileList.push(path.join(dir, file));
      }
    }
  });

  return fileList;
}

export default getAllFilesRecursively;
