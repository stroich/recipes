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

const Block = ({ title, children, ...props }) => (
  <div className={`rounded-lg p-8 text-white text-center ${props.className}`}>
    <h2 className="text-2xl font-bold">{title}</h2>
    <p className="mt-4">{children}</p>
  </div>
);

const Image = ({ src, alt }) => <img src={src} alt={alt} className="w-full h-auto rounded-lg" />;

const Index = ({ allPostsData }) => {
  return (
    <HomeLayout>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 p-4">
        <Block className="bg-blue-500" title="Блок 1">
          Ваш текст или содержимое для первого блока.
        </Block>

        <Block className="bg-green-500 mt-4 sm:mt-0" title="Блок 2">
          Ваш текст или содержимое для второго блока.
        </Block>

        <Block className="bg-purple-500 mt-4 sm:mt-0" title="Блок 3">
          Ваш текст или содержимое для третьего блока.
        </Block>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <div className="bg-orange-400 rounded-lg p-8">
          <Image src="https://via.placeholder.com/500x300" alt="Фотография 1" />
        </div>

        <div className="bg-yellow-400 rounded-lg p-8">
          <Image src="https://via.placeholder.com/500x300" alt="Фотография 2" />
        </div>
      </div>

      <Block className="bg-sky-500 mt-4 sm:mt-0" title="Блок 3">
        Ваш текст или содержимое для третьего блока.
      </Block>

      <FirstScreen />
    </HomeLayout>
  );
};

export default Index;
