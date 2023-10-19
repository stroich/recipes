import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';

import { IArticle } from '../../interfaces/interfaces';
import SpinnerComponent from '../shared/Spiner/Spiner';

type RecipeCardOnMainProps = {
  recipe: IArticle;
  allCompositions: { [key: string]: boolean };
  setRecipeStatus: (allCompositions) => void;
};

const RecipeCardOnMain: FC<RecipeCardOnMainProps> = ({
  recipe,
  allCompositions,
  setRecipeStatus,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isComposition, setIsComposition] = useState({});

  useEffect(() => {
    setIsComposition(allCompositions);
  }, [allCompositions]);

  const handleImageLoad = () => {
    setIsLoading(true);
  };

  const handleClick = (slug: string) => {
    setIsComposition((prevState) => {
      const updatedState = { ...prevState };
      updatedState[slug] = !isComposition[slug];
      return updatedState;
    });
    setRecipeStatus((prevState) => {
      const updatedState = { ...prevState };
      for (const key in updatedState) {
        if (key === slug) {
          updatedState[key] = !updatedState[key];
        } else {
          updatedState[key] = false;
        }
      }
      return updatedState;
    });
  };

  return (
    <div
      className={`recipe-card-main w-72 bg-gray-100 mb-4 flex flex-col ${
        isComposition[recipe.slug] ? 'rounded-t-lg' : 'rounded-lg'
      } hover:shadow-xl transition-all duration-200 relative`}
    >
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
          <button
            className="px-2 absolute right-10 font-bold"
            onClick={() => {
              handleClick(recipe.slug);
            }}
          >
            ...
          </button>
        </div>
      </div>
      <div
        className={`composition text-start absolute bg-gray-100 max-h-0 opacity-0 invisible ${
          isComposition[recipe.slug] ? 'open' : ''
        }
        rounded-b-lg w-full p-2 top-full z-10 transition-all ease-in-out duration-200 pt-2 border-b-4 border-slate-300
        `}
      >
        <span className="font-bold">Состав:</span>
        <ul>
          {recipe.composition.map((el) => (
            <li key={Math.random()}>- {el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCardOnMain;
