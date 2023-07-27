import FirstScreen from '../components/frontpage/firstScreen';
import SecondScreen from '../components/frontpage/secondScreen';
import ThirdScreen from '../components/frontpage/thirdScreen';
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
      <FirstScreen />
      {/*        <SecondScreen />
        <ThirdScreen />*/}
    </HomeLayout>
  );
};

export default Index;
