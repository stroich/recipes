import Image from 'next/image';
import Link from 'next/link';

import React, { FC, useState } from 'react';

import { IArticle } from '../../interfaces/interfaces';
import SpinnerComponent from '../shared/Spiner/Spiner';

interface CardProps {
  posts: IArticle;
  content: string;
  href: string;
}

const Card: FC<CardProps> = ({ posts, content, href }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(true);
  };

  return (
    <div className=" w-[700px] h-40 bg-gray-200 mb-4 flex flex-nowrap rounded-lg hover:shadow-xl transition-all duration-200">
      <div className="h-40 w-40 relative shrink-0 mr-3">
        {!isLoading && <SpinnerComponent />}
        <Image
          src={posts.image}
          layout="fill"
          objectFit="cover"
          alt={'image'}
          className={`rounded-l-lg h-full block ${isLoading ? 'loaded' : ''}`}
          onLoad={handleImageLoad}
        />
      </div>
      <div className="flex flex-col justify-between py-3 px-2">
        <div>
          <h4 className="mb-2">{posts.title}</h4>
          <div>{posts.subtitle}</div>
        </div>
        <Link
          href={`${href}/${posts.slug}`}
          className="bg-customBlue py-1 px-5 rounded-xl text-xl w-52"
          prefetch={true}
        >
          {' '}
          {content}{' '}
        </Link>
      </div>
    </div>
  );
};

export default Card;
