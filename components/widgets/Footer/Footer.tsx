const Footer = () => {
  return (
    <footer className="bg-customBlue bottom-0 w-full">
      <div className="mt-3 bg-white py-5">
        <p className="container m-auto text-base w-full sm:px-20 mx-auto px-3">
          &copy; {new Date().getFullYear()} Кушать будешь - Все рецепты для правильного питания
        </p>
      </div>
    </footer>
  );
};

export default Footer;
