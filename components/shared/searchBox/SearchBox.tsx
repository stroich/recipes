import Image from 'next/image';

import { useRouter } from 'next/router';
import { useState } from 'react';

import search from '../../../public/assets/img/search.svg';

const SearchBox = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && searchTerm) {
      router.push(`/search?t=${searchTerm}`);
    }
  };

  return (
    <div className="flex items-center border rounded-full bg-gray-100 p-2 shadow-md w-[160px] sm:w-auto">
      <Image src={search} alt="Search" className="w-[17px] h-[17px] mr-2" />
      <input
        value={searchTerm}
        type="text"
        placeholder="Искать рецепт"
        className="outline-none border-none focus:ring-0 w-full bg-gray-100 sm:ml-5"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchBox;
