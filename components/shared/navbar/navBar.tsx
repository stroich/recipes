import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { primaryLinks } from '../../../constants/menuLinks';

interface NavBarProps {
  isOpenBurger: boolean;
}
const NavBar: FC<NavBarProps> = ({ isOpenBurger }) => {
  const { pathname } = useRouter();

  return (
    <nav
      className={`navigation md:translate-x-0 md:translate-y-0 z-30 w-full h-full md:h-auto md:w-auto rounded-l md:p-0 md:static md:flex-row fixed flex flex-col items-center md:items-start bg-white top-44 right-0 p-10 transition-all duration-300 ease-in-out 
      ${
        isOpenBurger
          ? 'transform translate-x-[0%]'
          : 'transform translate-x-[100%] lg:transform-none'
      }`}
    >
      {primaryLinks.map(({ title, path, id }) => (
        <Link
          className={`mx-3 my-2 md:my-0 w-fit p-0 md:p-3 lg:m-5 border-b-4 border-solid border-white ${
            path === pathname ? 'border-yellow-400' : ''
          }`}
          href={path}
          key={id}
          onClick={() => {
            document.body.classList.remove('overflow-hidden');
          }}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
