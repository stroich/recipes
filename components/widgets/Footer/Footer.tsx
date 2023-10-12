const Footer = () => {
  return (
    <footer className="bg-cyan-500 bottom-0 w-full">
      <div className="mt-3 bg-white p-5">
        <p className="text-base w-full max-w-5xl mx-auto">
          &copy; {new Date().getFullYear()} Кушать будешь - Все рецепты для правильного питания
        </p>
      </div>
    </footer>
  );
};

export default Footer;
