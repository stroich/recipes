import Link from 'next/link';
import { FC } from 'react';

interface NavigationCardProps {
  title: string;
  data: Array<{ name: string; slug: string }>;
}
const NavigationCard: FC<NavigationCardProps> = ({ title, data }) => {
  return (
    <div className="mb-5">
      <h5 className="font-bold">{title}:</h5>
      <div className="flex flex-wrap w-[50%]">
        {data.map((subcat) => (
          <Link
            href={`/recipes/category/${subcat.slug}`}
            key={subcat.slug}
            className="bg-yellow-300 rounded-xl max-w-fit px-2 mr-1 mb-1 text-sm font-bold hover:shadow transition-all duration-100"
          >
            #{subcat.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationCard;
