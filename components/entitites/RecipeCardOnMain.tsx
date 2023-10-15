import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';

import { IArticle } from '../../interfaces/interfaces';
import SpinnerComponent from '../shared/Spiner/Spiner';

type RecipeCardOnMainProps = {
  recipe: IArticle;
};

const RecipeCardOnMain: FC<RecipeCardOnMainProps> = ({ recipe }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(true);
  };

  return (
    <div className="w-72 bg-gray-100 mb-4 flex flex-col rounded-lg hover:shadow-2xl transition-all duration-200">
      <div className="relative shrink-0">
        {!isLoading && <SpinnerComponent />}
        <Link href={`recipes/${recipe.slug}`}>
          <Image
            src={recipe.image}
            width={350}
            height={180}
            alt={'image'}
            loading="lazy"
            className={`rounded-t-lg ${isLoading ? 'loaded' : ''}`}
            style={{ objectFit: 'cover', height: 180 }}
            onLoad={handleImageLoad}
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between p-2 h-full">
        <h4 className="mb-1">{recipe.title}</h4>
        <div className="my-3 text-base">{recipe.subtitle}</div>
        <div className="text-center">
          <Link
            href={`recipes/${recipe.slug}`}
            className="bg-customBlue py-1 px-5 rounded-xl text-xl w-52 font-cursive font-bold"
            prefetch={true}
          >
            {' '}
            Готовить{' '}
          </Link>
          {/*<button className="px-2 bg-gray-300 rounded-3xl">V</button>*/}
        </div>
      </div>
    </div>
  );
};

export default RecipeCardOnMain;
