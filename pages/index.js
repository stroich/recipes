// pages/index.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/posts');
  }, []);

  return null;
};

export default IndexPage;
