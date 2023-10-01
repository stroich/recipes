// Created on 27.07.23 by 16:07:

const UserName = ({ userName = 'admin' }) => {
  const user = {
    userName: userName,
  };

  return <>{user.userName}</>;
};

export default UserName;
