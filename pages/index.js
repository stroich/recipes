import FirstScreen from '../components/frontpage/firstScreen';
import HomeLayout from '../components/layouts/homeLayout';
import { getAllPostsData } from '../utils/postHandler';

export async function getStaticProps() {
  const allPostsData = await getAllPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Index = ({ allPostsData }) => {
  return (
    <HomeLayout>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 p-4">
        <div className="bg-blue-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold">Блок 1</h2>
          <p className="mt-4">Ваш текст или содержимое для первого блока.</p>
        </div>

        <div className="bg-green-500 rounded-lg p-8 text-white text-center mt-4 sm:mt-0">
          <h2 className="text-2xl font-bold">Блок 2</h2>
          <p className="mt-4">Ваш текст или содержимое для второго блока.</p>
        </div>

        <div className="bg-purple-500 rounded-lg p-8 text-white text-center mt-4 sm:mt-0">
          <h2 className="text-2xl font-bold">Блок 3</h2>
          <p className="mt-4">Ваш текст или содержимое для третьего блока.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <div className="bg-orange-400 rounded-lg p-8">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Фотография 1"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="bg-yellow-400 rounded-lg p-8">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Фотография 2"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <div className="bg-sky-500 rounded-lg p-8 text-white text-center mt-4 sm:mt-0">
        <h2 className="text-2xl font-bold">Блок 3</h2>
        <p className="mt-4">Ваш текст или содержимое для третьего блока.</p>
      </div>

      <FirstScreen />
    </HomeLayout>
  );
};

export default Index;
