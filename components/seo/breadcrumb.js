import Link from 'next/link';

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <nav className="text-gray-500 text-sm my-1" aria-label="breadcrumb">
      <ol className="flex items-center space-x-3">
        {breadcrumbs.map(({ label, href }, i) => {
          const lastElement = i === breadcrumbs.length - 1;
          if (lastElement) {
            return (
              <li key={label} className="breadcrumb-item active" aria-current="page">
                {label}
              </li>
            );
          }
          return (
            <li key={label} className="breadcrumb-item">
              <Link href={href} className="hover:text-gray-800 transition-colors duration-200">
                {label}
              </Link>
              <span className="text-gray-400 mx-2">/</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
