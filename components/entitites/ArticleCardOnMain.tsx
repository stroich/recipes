import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { IArticle } from '../../interfaces/interfaces';

type ArticleCardOnMainProps = {
  article: IArticle;
};

const ArticleCardOnMain: FC<ArticleCardOnMainProps> = ({ article }) => {
  return (
    <div className="w-80 bg-gray-200 mb-4 flex flex-col rounded-lg justify-center items-center p-3">
      <h4 className="mb-2 text-center">{article.title}</h4>
      <Image
        src={article.image}
        width={470}
        height={180}
        alt={'image'}
        loading="lazy"
        className="mx-5"
        style={{ objectFit: 'cover' }}
      />
      <div className="flex flex-col justify-between py-3 px-2">
        <div className="my-3">{article.subtitle}</div>
        <div className="text-center">
          <Link
            href={`blog/${article.slug}`}
            className="bg-cyan-500 py-1 px-5 rounded-xl text-xl w-52"
            prefetch={true}
          >
            {' '}
            Читать дальше{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCardOnMain;
