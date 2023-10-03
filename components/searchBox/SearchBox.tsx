import Image from 'next/image';

import search from '../../public/assets/img/search.svg';
const SearchBox = () => {
  return (
    <div className="flex items-center border rounded-full bg-gray-100 p-2 shadow-md">
      <Image src={search} alt="Search" width="17" height="17" className="w-6 h-6 mr-2" />
      <input
        type="text"
        placeholder="Искать рецепт"
        className="outline-none border-none focus:ring-0 w-full bg-gray-100 ml-5"
      />
    </div>
  );
};

export default SearchBox;
