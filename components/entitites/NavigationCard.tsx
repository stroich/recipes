import { FC } from 'react';

interface NavigationCardProps {
  title: string;
  data: string[];
}
const NavigationCard: FC<NavigationCardProps> = ({ title, data }) => {
  return (
    <div>
      <h5>{title}:</h5>
      <div className="flex flex-wrap w-[50%]">
        {data.map((subcat) => (
          <div key={Math.random()} className="bg-yellow-300 rounded-xl max-w-fit px-2">
            {subcat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationCard;
