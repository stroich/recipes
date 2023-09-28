import { useEffect, useState } from 'react';

const useOriginalUrl = () => {
  const [originalUrl, setOriginalUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      const decodedUrl = decodeURIComponent(url);
      setOriginalUrl(decodedUrl);
    }
  }, []);

  return originalUrl;
};

const Error = () => {
  const originalUrl = useOriginalUrl();

  return (
    <div>
      <h1>404</h1>
      <p>Original URL: {originalUrl}</p>
      <h2>Something is going wrong...</h2>
    </div>
  );
};

export default Error;
