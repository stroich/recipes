// Created on 27.07.23 by 16:07:

import Image from 'next/image';

import logo from '../../public/assets/img/webpage/logo.png';

const UserImg = ({ userName = 'admin' }) => {
  const user = {
    userName: userName,
    // imgSrc: '/assets/img/webpage/logo.png',
    imgSrc: '../../public/assets/img/webpage/logo.png',
  };

  const testImg = () => {
    return (
      <Image
        src={user.imgSrc}
        alt={user.userName}
        title={user.userName}
        width={100}
        loading="lazy"
      />
    );
  };
  return (
    <>
      <Image src={logo} alt={user.userName} height={20} title={user.userName} loading="lazy" />
    </>
  );
};

export default UserImg;
