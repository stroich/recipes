import { FC, useState } from 'react';

import { CATEGORIES } from '../../../constants/navigationProperties';
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
  return (
    <aside className="w-[33%] sticky">
      <h2>Навигация:</h2>
      <div>
        {filterName && (
          <div className="mb-5 font-bold">
            <div className="mb-3">
              {' '}
              Поиск по:{' '}
              <span className="bg-yellow-300 rounded-xl max-w-fit px-2 py-0.5 mb-1 text-sm">
                #{filterName}
              </span>
            </div>
            <button
              className="bg-customBlue py-1 px-3 rounded-xl text-l w-52"
              onClick={resetFilters}
            >
              Сбросить фильтры
            </button>
          </div>
        )}

        {CATEGORIES.map((category) => (
          <NavigationCard
            key={Math.random()}
            title={category.title}
            data={category.data}
            handleFilterClick={handleFilterClick}
          />
        ))}
      </div>
    </aside>
  );
};

export default FilterRecipesSection;
