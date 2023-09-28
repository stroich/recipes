import Image from 'next/image';

import { defaultLink } from './Link/myLink';

import logo from '../public/assets/img/webpage/logo.png';

import { primaryLinks } from '../utils/constants';

const logoLoader = ({ src, width, quality }) => {
  return `${logo}=${quality || 75}`;
};
export const Navbar = () => {
  return (
    <nav className="pt-2">
      <div className="mx-auto px-2 flex justify-between items-center">
        <div className="text-black font-bold">
          <Image src={logo} alt="Logo" height={30} />
        </div>
        <div className="space-x-6">
          {primaryLinks.map((link) => defaultLink(link.path, link.title))}
        </div>
      </div>
    </nav>
  );
};
