// components/postsIndexLayout.js
import { webSiteSlogan, webSiteTitle } from '../../utils/constants/webSiteVars';
import Aside from '../aside';
import { Navbar } from '../navBar';

const PostsIndexLayout = ({ children }) => {
  return (
    <>
      <header className="bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100 py-2 shadow-md rounded-md">
        <div className="container mx-auto text-black text-center">
          <h1 className="text-4xl font-bold">Сборник статей</h1>
          <p className="text-lg mt-2">{webSiteTitle}</p>
        </div>
      </header>
      <Navbar />
      <main className="text-black shadow-md rounded-lg my-2 flex flex-col sm:flex-row">
        <div className="flex-grow"> {children}</div>
        <aside className="bg-gray-200 rounded-lg p-4 my-1 mr-1 w-1/5">
          <Aside />
        </aside>
      </main>
    </>
  );
};
export default PostsIndexLayout;
