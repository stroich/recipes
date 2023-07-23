// next.config.js
const loadPosts = require('./lib/loadPosts');

module.exports = {
  async rewrites() {
    const posts = loadPosts();
    const postRewrites = posts.map(post => ({
      source: `/posts/${post.slug}`,
      destination: `/posts/${post.slug}`,
    }));

    return [
      {
        source: '/',
        destination: '/posts',
      },
      ...postRewrites,
    ];
  },
};
