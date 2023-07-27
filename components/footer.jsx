import Link from 'next/link';

import { primaryLinks, secondaryLinks, thirdLinks } from '../utils/constants';

// Компонент для ссылки с необходимыми стилями
const CustomLink = ({ href, children }) => (
  <Link href={href} className="text-white hover:text-blue-500 px-2 md:px-0">
    {children}
  </Link>
);

const Footer = () => {
  return (
    <>
      <div className="flex-grow"></div>
      <footer className="bg-black text-white py-4 shadow-md rounded-md">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
            <div className="md:flex md:flex-col">
              <h3 className="text-2xl font-bold mb-2">Компания</h3>
              <ul className="space-y-2">
                {primaryLinks.map((link) => (
                  <li key={link.title}>
                    <CustomLink href={link.path}>{link.title}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:text-center md:flex md:flex-col">
              <h3 className="text-2xl font-bold mb-2">Продукты</h3>
              <ul className="space-y-2">
                {secondaryLinks.map((link) => (
                  <li key={link.title}>
                    <CustomLink href={link.path}>{link.title}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:text-right md:flex md:flex-col">
              <h3 className="text-2xl font-bold mb-2">Поддержка</h3>
              <ul className="space-y-2">
                {thirdLinks.map((link) => (
                  <li key={link.title}>
                    <CustomLink href={link.path}>{link.title}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
