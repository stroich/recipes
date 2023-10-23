import Image from 'next/image';
import { FC, useState } from 'react';

import { CATEGORIES } from '../../../constants/navigationProperties';
import closeIcon from '../../../public/assets/icons/close-icon.svg';
import iconFiltering from '../../../public/assets/icons/equalizer-line.svg';
import NavigationCard from '../../entitites/NavigationCard';

interface FilterRecipesSectionProps {
  filterName: string;
  handleFilterClick: (f: string, n: string) => void;
  resetFilters: () => void;
}

const FilterRecipesSection: FC<FilterRecipesSectionProps> = ({
  handleFilterClick,
  filterName,
  resetFilters,
}) => {
  const [isOpenFiltering, setIsOpenFiltering] = useState(false);

  const filterStyle = {
    transition: 'transform 0.3s ease-in',
  };

  const showFilterStyle = {
    transformOrigin: 'top center',
    transform: filterName ? 'scaleY(1)' : 'scaleY(0)',
    transition: 'transform 0.3s ease-in-out',
    height: filterName ? 'auto' : 0,
  };

  return (
    <>
      <div className="bg-white h-fit md:hidden sticky z-20 top-0 flex justify-between items-center">
        <Image
          className={`${isOpenFiltering ? 'saturate-50' : ''}  cursor-pointer`}
          src={iconFiltering}
          alt={'filtering'}
          onClick={() => setIsOpenFiltering(!isOpenFiltering)}
        />
        {filterName && (
          <div className="font-bold md:hidden">
            <span>
              {' '}
              Поиск по:{' '}
              <span className="bg-yellow-300 rounded-xl max-w-fit px-2 py-0.5 mb-1 text-sm">
                #{filterName}
              </span>
            </span>
          </div>
        )}
      </div>

      <aside
        className={`fixed z-30 top-0 h-full pt-10 md: ${
          isOpenFiltering ? 'translate-x-0' : '-translate-x-full'
        } bg-white md:h-fit w-full md:w-[23%] md:translate-x-0 md:sticky md:top-0 md:pt-0`}
        style={filterStyle}
      >
        <div
          className="md:hidden absolute top-5 right-5 cursor-pointer"
          onClick={() => setIsOpenFiltering(false)}
        >
          <Image src={closeIcon} alt={'close'} width={30} height={30} />
        </div>
        <h2>Навигация:</h2>
        <div>
          <div className="mb-5 font-bold" style={showFilterStyle}>
            <div className="mb-3">
              {' '}
              Поиск по:{' '}
              <span className="bg-yellow-300 rounded-xl max-w-fit px-2 py-0.5 mb-1 text-sm">
                #{filterName}
              </span>
            </div>
            <button
              className="bg-customBlue py-1 px-3 rounded-xl text-l w-52"
              onClick={() => {
                resetFilters();
                setIsOpenFiltering(false);
              }}
            >
              Сбросить фильтры
            </button>
          </div>

          {CATEGORIES.map((category) => (
            <NavigationCard
              key={Math.random()}
              title={category.title}
              data={category.data}
              handleFilterClick={handleFilterClick}
              setIsOpenFiltering={setIsOpenFiltering}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default FilterRecipesSection;
