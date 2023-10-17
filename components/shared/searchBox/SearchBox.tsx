import Image from 'next/image';

import search from '../../../public/assets/img/search.svg';

const SearchBox = () => {
  return (
    <div className="flex items-center border rounded-full bg-gray-100 p-2 shadow-md w-[160px] sm:w-auto">
      <Image src={search} alt="Search" className="w-[17px] h-[17px] mr-2" />
      <input
        type="text"
        placeholder="Искать рецепт"
        className="outline-none border-none focus:ring-0 w-full bg-gray-100 sm:ml-5"
      />
    </div>
  );
};

export default SearchBox;
