import Link from 'next/link';

export const defaultLink = (
  url,
  text,
  classname = 'text-black hover:text-white hover:bg-black transition duration-300'
) => (
  <Link href={url} key={url + text} className={classname}>
    {text}
  </Link>
);
