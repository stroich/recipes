import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { IArticle } from '../../interfaces/interfaces';

interface CardProps {
  posts: IArticle;
  content: string;
  href: string;
}

const Card: FC<CardProps> = ({ posts, content, href }) => {
  return (
    <div className="max-w-2xl h-40 bg-gray-200 mb-4 flex flex-nowrap rounded-lg hover:shadow-xl transition-all duration-200">
      <Image
        src={posts.image}
        width={160}
        height={60}
        alt={'image'}
        loading="lazy"
        className="rounded-l-lg mr-5"
        style={{ objectFit: 'cover' }}
      />
      <div className="flex flex-col justify-between py-3 px-2">
        <div>
          <h4 className="mb-2">{posts.title}</h4>
          <div>{posts.subtitle}</div>
        </div>
        <Link
          href={`${href}/${posts.slug}`}
          className="bg-customBlue py-1 px-5 rounded-xl text-xl w-52"
          prefetch={true}
        >
          {' '}
          {content}{' '}
        </Link>
      </div>
    </div>
  );
};

export default Card;
