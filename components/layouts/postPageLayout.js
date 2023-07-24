import {Navbar} from "../navBar";

const PostPageLayout = ({children}) => {
  return (
    <>
      <header className="bg-indigo-900 text-white">
        <div className="container mx-auto py-8">
          <h1 className="text-5xl font-bold">Информатика: Мир Знаний</h1>
          <p className="text-xl mt-4">Исследуйте мир информатики и технологий.</p>
        </div>
      </header>
      <Navbar/>
      {children}

    </>
  );
};
export default PostPageLayout;
