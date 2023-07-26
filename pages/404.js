import { useEffect, useState } from 'react';

const Error = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      const decodedUrl = decodeURIComponent(url);
      setOriginalUrl(decodedUrl);
    }
  }, []);

  return (
    <div>
      <h1>404</h1>
      <p>Original URL: {originalUrl}</p>
      <h2>Something is going wrong...</h2>
    </div>
  );
};

export default Error;
