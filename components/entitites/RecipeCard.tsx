import Image from 'next/image';
import Link from 'next/link';

const RecipeCard = ({ posts }) => {
  return (
    <div className="max-w-2xl h-40 bg-gray-200 mb-4 flex flex-nowrap rounded-lg">
      <Image
        src={posts.image}
        width={160}
        height={60}
        alt={'image'}
        loading="lazy"
        className="rounded-l-lg mr-5"
      />
      <div className="flex flex-col justify-between py-3 px-2">
        <div>
          <h4 className="mb-2">{posts.title}</h4>
          <div>{posts.subtitle}</div>
        </div>
        <Link
          href={`recipes/${posts.slug}`}
          className="bg-cyan-500 py-1 px-5 rounded-xl text-xl w-40"
        >
          {' '}
          Готовить{' '}
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
