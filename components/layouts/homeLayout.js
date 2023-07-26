// components/HomeLayout.js

const HomeLayout = ({ children }) => {
  return (
    <>
      <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-6">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-4xl font-bold">Добро пожаловать на наш сайт</h1>
          <p className="text-lg mt-2">Здесь вы найдете множество интересного контента.</p>
        </div>
      </header>

      <main>{children}</main>
    </>
  );
};
export default HomeLayout;
