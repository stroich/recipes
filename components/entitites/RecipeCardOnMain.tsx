import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { IArticle } from '../../interfaces/interfaces';

const RecipeCardOnMain: FC<IArticle> = (recipe) => {
  return (
    <div className="w-72 bg-gray-200 mb-4 flex flex-col rounded-lg">
      <Image
        src={recipe.image}
        width={350}
        height={180}
        alt={'image'}
        loading="lazy"
        className="rounded-t-lg"
        style={{ objectFit: 'cover', height: 180 }}
      />
      <div className="flex flex-col justify-between py-3 p-4 h-full">
        <h4 className="mb-1 text-center">{recipe.title}</h4>
        <div className="my-3 text-base">{recipe.subtitle}</div>
        <div className="text-center">
          <Link
            href={`recipes/${recipe.slug}`}
            className="bg-cyan-500 py-1 px-5 rounded-xl text-xl w-52"
            prefetch={true}
          >
            {' '}
            Готовить{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCardOnMain;
