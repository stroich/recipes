import Image from 'next/image';
import Link from 'next/link';

import arrow from '../../public/assets/icons/arrow-pagination.svg';

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <nav aria-label="breadcrumb">
      <div className="flex items-baseline">
        {breadcrumbs.map(({ label, href }, i) => {
          const lastElement = i === breadcrumbs.length - 1;
          if (lastElement) {
            return (
              <div key={label} className="text-base text-customBlue" aria-current="page">
                {label}
              </div>
            );
          }
          return (
            <div key={label} className="flex items-baseline h-10">
              <Link href={href} className="text-base hover:border-b-2 border-amber-300 duration-75">
                {label}
              </Link>
              <Image width={10} height={10} src={arrow} alt={'/'} className="mx-2" />
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;
