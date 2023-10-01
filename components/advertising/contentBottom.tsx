import { FC } from 'react';

const ContentBottom: FC = () => {
  return (
    <div
      className="flex items-center justify-center h-16 bg-gray-300 text-gray-600 shadow-md rounded-md mb-2 animate-pulse px-2"
      style={{ minHeight: '200px', width: '100%' }}
    >
      Здесь могла бы быть ваша реклама Google AdSense. Но её нет.
    </div>
  );
};

export default ContentBottom;
