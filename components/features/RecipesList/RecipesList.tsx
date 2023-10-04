import { FC } from 'react';

import RecipeCard from '../../entitites/RecipeCard';

const RecipesList: FC = ({ posts }) => {
  const sortedPosts = posts.sort((a, b) => a.weight - b.weight);
  return (
    <div>
      <div className="flex flex-col">
        {sortedPosts.map((posts) => (
          <RecipeCard key={Math.random()} posts={posts} />
        ))}
      </div>
    </div>
  );
};

export default RecipesList;
