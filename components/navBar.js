import Link from "next/link";

const navLinks = [
  { title: "Главная", path: "/" },
  { title: "Посты", path: "/posts" },
  { title: "Контакты", path: "/contact" },
];

const myLink = (url, text) => (
  <Link href={url} key={url + text} className="text-white hover:text-purple-200 transition duration-300 ease-in-out">
      {text}
  </Link>
);

export const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Мой Логотип</div>
        <div className="space-x-6">
          {navLinks.map((link) => myLink(link.path, link.title))}
        </div>
      </div>
    </nav>
  );
};

