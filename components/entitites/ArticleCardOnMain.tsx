import Image from 'next/image';
import Link from 'next/link';

import React, { FC, useState } from 'react';

import { IArticle } from '../../interfaces/interfaces';
import SpinnerComponent from '../shared/Spiner/Spiner';

type ArticleCardOnMainProps = {
  article: IArticle;
};

const ArticleCardOnMain: FC<ArticleCardOnMainProps> = ({ article }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(true);
  };

  return (
    <div className="w-60 bg-gray-100 mb-6 flex flex-col rounded-lg justify-center items-center py-2 hover:shadow-xl transition-all duration-200">
      <h4 className="mb-2 px-3 text-lg">{article.title}</h4>
      <div className="w-full relative shrink-0">
        {!isLoading && <SpinnerComponent />}
        <Image
          src={article.image}
          width={200}
          height={100}
          alt={'image'}
          loading="lazy"
          className={`w-full ${isLoading ? 'loaded' : ''}`}
          style={{ objectFit: 'cover', height: 100 }}
          onLoad={handleImageLoad}
        />
      </div>
      <div className="flex flex-col justify-between py-2 px-2">
        <div className="my-3 text-sm">{article.subtitle}</div>
        <div className="text-center">
          <Link
            href={`blog/${article.slug}`}
            className="bg-customBlue py-1 px-5 rounded-xl text-lg w-20 font-cursive font-bold"
            prefetch={true}
          >
            {' '}
            Читать полностью...{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCardOnMain;
