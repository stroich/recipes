import path from 'path';

function parseMetadata(matterResult, filepath) {
  return {
    title: matterResult.data.title,
    date: matterResult.data.date?.toISOString() || new Date().toISOString(),
    subtitle: matterResult.data.subtitle || '',
    author: matterResult.data.author || '',
    slug: matterResult.data.slug || path.basename(filepath).replace('.md', ''),
    category: matterResult.data.category || 'default',
  };
}

export default parseMetadata;
