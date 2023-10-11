import Image from 'next/image';
import { FC, useState } from 'react';

import arrow from '../../../public/assets/icons/arrow-pagination.svg';
import Card from '../../entitites/Card';
import {IArticle} from "../../../interfaces/interfaces";

interface ListProps {
  posts: Array<IArticle>;
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
    <div className="mt-10">
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
      <div className="max-w-fit my-0 mx-auto font-bold flex">
        <button
          className="p-1 bg-yellow-300 rounded-3xl mr-1"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <Image width={15} height={15} src={arrow} alt={'arrow'} className="rotate-180" />
        </button>
        <span>
          Страница {currentPage} из {totalPages}
        </span>
        <button
          className="p-1 bg-yellow-300 rounded-2xl ml-1"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <Image width={15} height={15} src={arrow} alt={'arrow'} />
        </button>
      </div>
    </div>
  );
};

export default List;
