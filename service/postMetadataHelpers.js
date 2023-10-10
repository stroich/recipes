import path from 'path';

function parseMetadata(matterResult, filepath) {
  console.log(matterResult);
  return {
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle || '',
    date:
      matterResult.data.date instanceof Date
        ? matterResult.data.date.toISOString()
        : new Date().toISOString(),
    author: matterResult.data.author || 'admin',
    language: matterResult.data.language || 'en',
    tags: matterResult.data.tags || '',
    weight: matterResult.data.weight || 100,
    slug: matterResult.data.slug || path.basename(filepath).replace('.md', ''),
    image: matterResult.data.image || '',
    video: matterResult.data.video || '',
  };
}

export default parseMetadata;
