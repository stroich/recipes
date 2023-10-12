import Link from 'next/link';
import { useRouter } from 'next/router';

import { primaryLinks } from '../../../constants/menuLinks';

const NavBar = () => {
  const { pathname } = useRouter();
  return (
    <div>
      {primaryLinks.map(({ title, path, id }) => (
        <Link className={`mx-3 ${path === pathname ? 'active' : ''}`} href={path} key={id}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
