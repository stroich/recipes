import Link from "next/link";

export const defaultLink = (
  url,
  text,
  classname = "text-white hover:text-purple-200 transition duration-300 ease-in-out"
) => (
  <Link href={url}
        key={url + text}
        className={classname}>
    {text}
  </Link>
);
