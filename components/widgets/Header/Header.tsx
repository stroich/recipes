import Image from 'next/image';

import Link from 'next/link';

import { useEffect, useState } from 'react';

import imgBurger from '../../../public/assets/icons/burger.svg';
import Logo from '../../../public/assets/img/logo.png';
import imgBanner from '../../../public/assets/img/mainBanner.png';
import Banner from '../../shared/banner/banner';
import NavBar from '../../shared/navbar/navBar';
import SearchBox from '../../shared/searchBox/SearchBox';

const Header = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  function updateHeaderHeight() {
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.clientHeight);
    }
  }

  useEffect(() => {
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  function workWithMenu() {
    setIsOpenBurger(!isOpenBurger);
    updateHeaderHeight();
  }

  return (
    <header className={`bg-customBlue shadow-md pb-0 overflow-x-hidden`}>
      <div className=" mt-5 bg-white 2xl:px-20  sm:px-10 px-3 py-5">
        <div className="container m-auto flex justify-between items-center">
          <Link href={'/'} className="flex items-center">
            <Image
              className={'w-12 h-12 md:w-20 md:h-50 lg:w-20 lg:h-20'}
              src={Logo}
              alt={'Logo'}
            />
            <h3 className="text-neutral-800 lg:ml-5 md:ml-1.5 hidden sm:block">Кушать будешь?</h3>
          </Link>
          <NavBar
            isOpenBurger={isOpenBurger}
            closeMenu={workWithMenu}
            headerHeight={headerHeight}
          />
          <SearchBox />
          <div className="lg:hidden h-auto" onClick={workWithMenu}>
            <Image
              className={`${
                isOpenBurger ? 'transform rotate-90 transition-all duration-300 ease-in-out' : ''
              }`}
              src={imgBurger}
              alt={'Burger'}
            ></Image>
          </div>
        </div>
      </div>
      <Banner
        imageUrl={imgBanner.src}
        text="Секреты вдохновения в каждом блюде: гармония с собой, забота о здоровье
 и любовь к активному образу жизни!"
      />
    </header>
  );
};

export default Header;
