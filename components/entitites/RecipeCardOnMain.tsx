import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';

import { IArticle } from '../../interfaces/interfaces';
import SpinnerComponent from '../shared/Spiner/Spiner';

type RecipeCardOnMainProps = {
  recipe: IArticle;
  allCompositions: { [key: string]: boolean };
  setRecipeStatus: (allCompositions) => void;
  search?: string | string[];
};

const RecipeCardOnMain: FC<RecipeCardOnMainProps> = ({
  recipe,
  allCompositions,
  setRecipeStatus,
  search,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isComposition, setIsComposition] = useState({});

  const compositionStyle = {
    borderBottom: '4px solid #09AAB4',
    transformOrigin: 'top center',
    transform: isComposition[recipe.slug] ? 'scaleY(1)' : 'scaleY(0)',
    transition: 'transform 0.2s ease-in',
  };

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

  const isMatch = (word: string, search: string | string[] | undefined) => {
    const searchMinusOne = search.slice(0, -1);
    const searchTermsMinusOne = Array.isArray(searchMinusOne) ? searchMinusOne : [searchMinusOne];
    if (!search) return false;
    const searchTerms = Array.isArray(search) ? search : [search];
    let result = searchTerms.some((term) => word.toLowerCase().includes(term.toLowerCase()));
    if (!result && searchMinusOne.length > 3) {
      result = searchTermsMinusOne.some((term) => word.toLowerCase().includes(term.toLowerCase()));
    }

    return result;
  };

  const isMatchColor = (word, search) => {
    const regex = new RegExp(search, 'i');
    const parts = word.split(regex);
    return parts.map((part, partIndex) => (
      <span key={partIndex}>
        {partIndex > 0 && <span className="bg-customBlue">{search.trim()}</span>}
        {part.trim()}
      </span>
    ));
  };

  const titleWords = recipe.title.split(' ');

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
        <h4 className="mb-1">
          {search &&
            titleWords.map((word, index) =>
              isMatch(word, search) ? (
                <span key={Math.random()}>{isMatchColor(word, search)} </span>
              ) : (
                <span key={Math.random()}>{`${word} `}</span>
              )
            )}
          {!search && recipe.title}
        </h4>
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
        className="composition text-start absolute bg-gray-100 rounded-b-lg w-full p-1 top-full z-10 pt-2"
        style={compositionStyle}
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
