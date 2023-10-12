import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { IArticle } from '../../interfaces/interfaces';

type ArticleCardOnMainProps = {
  article: IArticle;
};

const ArticleCardOnMain: FC<ArticleCardOnMainProps> = ({ article }) => {
  return (
    <div className="w-80 bg-gray-100 mb-6 flex flex-col rounded-lg justify-center items-center py-2">
      <h4 className="mb-2 px-3">{article.title}</h4>
      <Image
        src={article.image}
        width={300}
        height={180}
        alt={'image'}
        loading="lazy"
        className="w-full"
        style={{ objectFit: 'cover', height: 180 }}
      />
      <div className="flex flex-col justify-between py-2 px-2">
        <div className="my-3">{article.subtitle}</div>
        <div className="text-center">
          <Link
            href={`blog/${article.slug}`}
            className="bg-cyan-500 py-1 px-5 rounded-xl text-xl w-52 font-cursive font-bold"
            prefetch={true}
          >
            {' '}
            Читать полностью...{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCardOnMain;
