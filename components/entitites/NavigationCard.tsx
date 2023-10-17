import { FC } from 'react';

interface NavigationCardProps {
  title: string;
  data: Array<{ name: string; slug: string }>;
  handleFilterClick: (name: string, slug: string) => void;
  setIsOpenFiltering: (isOpen: boolean) => void;
}
const NavigationCard: FC<NavigationCardProps> = ({
  title,
  data,
  handleFilterClick,
  setIsOpenFiltering,
}) => {
  function clickButton(name, slug) {
    handleFilterClick(name, slug);
    if (window.innerWidth <= 767) {
      setIsOpenFiltering(false);
    }
  }

  return (
    <div className="mb-5">
      <h5 className="font-bold">{title}:</h5>
      <div className="flex flex-wrap w-full">
        {data.map((subcat) => (
          <button
            onClick={() => clickButton(subcat.name, subcat.slug)}
            key={subcat.slug}
            className="bg-yellow-300 rounded-xl max-w-fit px-2 mr-1 mb-1 text-sm font-bold hover:shadow transition-all duration-100"
          >
            #{subcat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationCard;
