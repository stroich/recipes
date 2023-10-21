import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';

import { IArticle } from '../../../interfaces/interfaces';
import arrow from '../../../public/assets/icons/arrow-pagination.svg';
import Card from '../../entitites/Card';

interface ListProps {
  posts: Array<IArticle>;
  isRecipe: boolean;
}

const List: FC<ListProps> = ({ posts, isRecipe }) => {
  const router = useRouter();
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const mainRef = useRef<HTMLDivElement>(null);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPosts = posts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(posts.length / pageSize);

  const changeUrl = (page: number) => {
    const query = { ...router.query, page: page };
    router.push({
      pathname: router.pathname,
      query,
    });
  };

  const handleNextPage = () => {
    const nextPage = Math.min(currentPage * 1 + 1, totalPages);
    setCurrentPage(nextPage);
    changeUrl(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
    changeUrl(prevPage);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
    changeUrl(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
    changeUrl(totalPages);
  };

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ inline: 'start' });
    }
  }, [changeUrl]);

  useEffect(() => {
    const { page: currentPageAfterLoad } = router.query;
    if (currentPageAfterLoad) {
      setCurrentPage(Number(currentPageAfterLoad));
    } else {
      setCurrentPage(1);
    }
  }, [router.query]);

  return (
    <div className="md:mt-10" ref={mainRef}>
      <div className="flex flex-col justify-center items-center">
        {currentPosts.map((posts) => (
          <Card
            key={posts.slug}
            posts={posts}
            content={isRecipe ? 'Готовить' : 'Читать дальше'}
            href={isRecipe ? 'recipes' : 'blog'}
          />
        ))}
      </div>
      <div className="max-w-fit my-0 mx-auto font-bold flex p-3">
        {isRecipe && (
          <button className="flex p-1 ml-1" disabled={currentPage == 1} onClick={handleFirstPage}>
            <Image width={15} height={15} src={arrow} alt={'arrow'} className="rotate-180" />
            <Image width={15} height={15} src={arrow} alt={'arrow'} className="rotate-180" />
          </button>
        )}
        <button
          className="p-1 bg-yellow-300 rounded-3xl mr-1"
          onClick={handlePrevPage}
          disabled={currentPage == 1}
        >
          <Image width={15} height={15} src={arrow} alt={'arrow'} className="rotate-180" />
        </button>
        <span>
          Страница {currentPage} из {totalPages}
        </span>
        <button
          className="p-1 bg-yellow-300 rounded-2xl ml-1"
          onClick={handleNextPage}
          disabled={currentPage == totalPages}
        >
          <Image width={15} height={15} src={arrow} alt={'arrow'} />
        </button>
        {isRecipe && (
          <button
            className="flex p-1 ml-1"
            disabled={currentPage == totalPages}
            onClick={handleLastPage}
          >
            <Image width={15} height={15} src={arrow} alt={'arrow'} />
            <Image width={15} height={15} src={arrow} alt={'arrow'} />
          </button>
        )}
      </div>
    </div>
  );
};

export default List;
