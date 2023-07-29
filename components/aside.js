// Created on 27.07.23 by 19:21:

const Aside = () => {
  return (
    <aside className="bg-gray-200 shadow-md rounded-lg p-4 my-1 mr-1 w-full sm:col-start-5 sm:col-end-6">
      <h2 className="text-xl font-bold mb-4">Меню</h2>
      <ul className="space-y-2">
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="#">О нас</a>
        </li>
        <li>
          <a href="#">Продукты</a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
