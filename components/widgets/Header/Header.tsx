import Image from 'next/image';

import Logo from '../../../public/assets/img/logo.svg';
import imgBanner from '../../../public/assets/img/mainBanner.png';
import Banner from '../../shared/banner/banner';
import NavBar from '../../shared/navbar/navBar';
import SearchBox from '../../shared/searchBox/SearchBox';

const Header = () => {
  return (
    <header className="bg-cyan-500 shadow-md pb-0">
      <div className=" mt-5 bg-white p-5">
        <div className="flex justify-between items-center  max-w-5xl mx-auto">
          <div className="flex">
            <Image src={Logo} alt={'Logo'} width={40} height={40} />
            <h3 className="text-neutral-800 ml-5">Кушать будешь?</h3>
          </div>
          <NavBar />
          <SearchBox />
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
