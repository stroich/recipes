import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FC } from 'react';

import { primaryLinks } from '../../../constants/menuLinks';
import iconClose from '../../../public/assets/icons/close-icon.svg';

interface NavBarProps {
  isOpenBurger: boolean;
  headerHeight: number;
  closeMenu: () => void;
}
const NavBar: FC<NavBarProps> = ({ isOpenBurger, closeMenu, headerHeight }) => {
  const { pathname } = useRouter();

  const menuStyles = {
    transform: isOpenBurger ? `translateY(${headerHeight}px)` : ``,
  };

  return (
    <div
      className={`navigation lg:translate-y-0 z-10 w-full h-[100vh] lg:h-auto lg:w-auto rounded-l lg:p-0 lg:static lg:flex-row absolute flex flex-col bg-white top-0 right-0 p-10 transition-all duration-300 ease-in-out ${
        isOpenBurger ? `` : `transform translate-y-[-100%] lg:transform-none`
      }`}
      style={menuStyles}
    >
      <div className="text-end absolute top-4 right-4 cursor-pointer">
        <Image src={iconClose} alt={'close'} className={'lg:hidden'} onClick={closeMenu}></Image>
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
