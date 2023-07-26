// components/postsIndexLayout.js
import { webSiteSlogan, webSiteTitle } from '../../utils/constants/webSiteVars';
import { Navbar } from '../navBar';

const PostsIndexLayout = ({ children }) => {
  return (
    <>
      <header className="bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100 py-2">
        <div className="container mx-auto text-black text-center">
          <h1 className="text-4xl font-bold">Сборник статей</h1>
          <p className="text-lg mt-2">{webSiteTitle}</p>
        </div>
      </header>
      <Navbar />
      <main className="p-2">{children}</main>
    </>
  );
};
export default PostsIndexLayout;
