import { FC, useState } from 'react';

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
  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPosts = posts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(posts.length / pageSize);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <div>
      <div className="flex flex-col">
        {currentPosts.map((posts) => (
          <Card
            key={posts.slug}
            posts={posts}
            content={isRecipe ? 'Готовить' : 'Читать дальше'}
            href={isRecipe ? 'recipes' : 'blog'}
          />
        ))}
      </div>
      <div className="max-w-fit my-0 mx-auto font-bold">
        <button
          className="p-1 px-3 bg-yellow-300 rounded-3xl mr-1"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span>
          Страница {currentPage} из {totalPages}
        </span>
        <button
          className="py-0.5 px-3 bg-yellow-300 rounded-2xl ml-1"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default List;
