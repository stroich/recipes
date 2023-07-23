// lib/loadPosts.js
const fs = require('fs');
const path = require('path');

function loadPosts() {
  const directoryPath = path.join(process.cwd(), '_posts');
  return fs.readdirSync(directoryPath).map(filename => {
    const filePath = path.join(directoryPath, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const slug = filename.replace(/\.md$/, '');
    return {
      content,
      slug,
    };
  });
}

module.exports = loadPosts;
