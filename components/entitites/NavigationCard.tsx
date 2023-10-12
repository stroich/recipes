import { FC } from 'react';

interface NavigationCardProps {
  title: string;
  data: string[];
}
const NavigationCard: FC<NavigationCardProps> = ({ title, data }) => {
  return (
    <div className="mb-5">
      <h5 className="font-bold">{title}:</h5>
      <div className="flex flex-wrap w-[50%]">
        {data.map((subcat) => (
          <button
            key={subcat}
            className="bg-yellow-300 rounded-xl max-w-fit px-2 mr-1 mb-1 font-bold hover:shadow transition-all duration-100"
          >
            #{subcat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationCard;
