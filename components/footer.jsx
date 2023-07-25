// Created on 23.07.23 by 22:01:

import Link from "next/link";
import {primaryLinks, secondaryLinks, thirdLinks} from "../utils/constants";

const Footer = () => {
  return (
    <>
      <div className="flex-grow"></div>
      <footer className="bg-black text-white text-center py-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Компания</h3>
              <ul className="space-y-2">
                {primaryLinks.map((link) => (
                  <li key={link.title}>
                    <Link href={link.path} className="hover:text-gray-300">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Продукты</h3>
              <ul className="space-y-2">
                {secondaryLinks.map((link) => (
                  <li key={link.title}>
                    <Link href={link.path} className="hover:text-gray-300">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Поддержка</h3>
              <ul className="space-y-2">
                {thirdLinks.map((link) => (
                  <li key={link.title}>
                    <Link href={link.path} className="hover:text-gray-300">
                      {link.title}
                    </Link>
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

