// components/HomeLayout.js
const HomeLayout = ({ children }) => {
  return (
    <>
      <header>{/* Здесь ваш хедер для домашней страницы */}</header>
      <main>{children}</main>
      <footer>{/* Здесь ваш футер для домашней страницы */}</footer>
    </>
  );
};
export default HomeLayout;



