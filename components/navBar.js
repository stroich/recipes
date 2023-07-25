import {defaultLink} from "./Link/myLink";
import {primaryLinks} from "../utils/constants";

export const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Мой Логотип</div>
        <div className="space-x-6">
          {primaryLinks.map((link) =>
            defaultLink(link.path, link.title))}
        </div>
      </div>
    </nav>
  );
};
