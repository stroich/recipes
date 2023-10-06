import { FC } from 'react';

import Card from '../../entitites/Card';

interface Recipe {
  title: string;
  subtitle: string;
  author: string;
  tags: Array<string>;
  weight: number;
  image: string;
  slug: string;
}

interface ListProps {
  posts: Array<Recipe>;
  isRecipe: boolean;
}

const List: FC<ListProps> = ({ posts, isRecipe }) => {
  const sortedPosts = posts.sort((a, b) => a.weight - b.weight);
  return (
    <div>
      <div className="flex flex-col">
        {sortedPosts.map((posts) => (
          <Card
            key={posts.slug}
            posts={posts}
            content={isRecipe ? 'Готовить' : 'Читать дальше'}
            href={isRecipe ? 'recipes' : 'blog'}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
