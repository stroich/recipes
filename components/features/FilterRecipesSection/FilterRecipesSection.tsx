import { CATEGORIES } from '../../../constants/navigationProperties';
import NavigationCard from '../../entitites/NavigationCard';

const FilterRecipesSection = () => {
  return (
    <aside className="w-[33%]">
      <h2>Навигация:</h2>
      <div>
        {CATEGORIES.map((category) => (
          <NavigationCard key={Math.random()} title={category.title} data={category.data} />
        ))}
      </div>
    </aside>
  );
};

export default FilterRecipesSection;
