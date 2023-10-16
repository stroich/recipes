const Footer = () => {
  return (
    <footer className="bg-customBlue bottom-0 w-full">
      <div className="mt-3 bg-white p-5">
        <p className="text-base w-full sm:px-20 px-2 mx-auto text-sm">
          &copy; {new Date().getFullYear()} Кушать будешь - Все рецепты для правильного питания
        </p>
      </div>
    </footer>
  );
};

export default Footer;
