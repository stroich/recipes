import Link from 'next/link';
import { useRouter } from 'next/router';

import { FC, useState } from 'react';

import { primaryLinks } from '../../../constants/menuLinks';

interface NavBarProps {
  isOpenBurger: boolean;
  closeMenu: () => void;
}
const NavBar: FC<NavBarProps> = ({ isOpenBurger, closeMenu }) => {
  const { pathname } = useRouter();

  return (
    <div
      className={`navigation rounded-l lg:p-0 lg:static lg:flex-row absolute flex flex-col bg-white top-0 right-0 p-10 transition-all duration-300 ease-in-out ${
        isOpenBurger ? 'transform -translate-y-0' : 'transform -translate-y-full lg:transform-none'
      }`}
    >
      <div className="text-end absolute top-4 right-4 cursor-pointer">
        <span className={'lg:hidden'} onClick={closeMenu}>
          X
        </span>
      </div>

      {primaryLinks.map(({ title, path, id }) => (
        <Link
          className={`mx-3 lg:p-0 p-5 border-b-4 border-solid border-white ${
            path === pathname ? 'border-yellow-400' : ''
          }`}
          href={path}
          key={id}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
