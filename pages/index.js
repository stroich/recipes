import Link from 'next/link';

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
  console.log(allPostsData);
  return (
    <HomeLayout>
      <h1>тест</h1>
      <Link href="/posts" className="text-blue-500 hover:underline">
        посты
      </Link>
    </HomeLayout>
  );
};

export default Index;
