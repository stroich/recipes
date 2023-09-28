import Image from 'next/image';

import wework from '../public/assets/img/webpage/wework.jpeg';

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">English</h2>

        <p>
          This is a test webpage and it is under development. Please check back later for updates.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Deutsch</h2>
        <p>
          Dies ist eine Testseite und sie befindet sich in der Entwicklung. Bitte schauen Sie später
          wieder vorbei, um Updates zu erhalten.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Русский</h2>
        <p>
          Это тестовая страница, она находится в разработке. Пожалуйста, вернитесь позже для
          обновлений.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto flex justify-center items-center ">
        <Image
          src={wework}
          alt="Logo"
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactPage;
