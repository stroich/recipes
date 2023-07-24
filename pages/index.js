import Link from "next/link";

const Index = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-6">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-4xl font-bold">Добро пожаловать на наш сайт</h1>
          <p className="text-lg mt-2">Здесь вы найдете множество интересного контента.</p>
        </div>
      </header>
      <h1>тест</h1>
      <Link href="/posts" className="text-blue-500 hover:underline">посты</Link>

    </>
  );
};

export default Index;
