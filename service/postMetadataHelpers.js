import path from 'path';

function parseMetadata(matterResult, filepath) {
  return {
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle || '',
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
