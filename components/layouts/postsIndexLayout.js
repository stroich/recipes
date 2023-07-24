// components/postsIndexLayout.js
const PostsIndexLayout = ({ children }) => {
  return (
    <>
      <header className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold">Информатика: Мир Знаний</h1>
          <p className="text-xl mt-4">Исследуйте мир информатики и технологий.</p>
        </div>
      </header>
      <main>{children}</main>
      <footer>{/* Здесь ваш футер для страницы index.js постов */}</footer>
    </>
  );
};
export default PostsIndexLayout;
