import Image from 'next/image';

import styles from './PlateMethod.module.css';
import plateMethodData from '../../../constants/plateMethodData';

const PlateMethod = () => {
  const plate = {
    backgroundColor: '#09AAB4',
  };

  return (
    <section className={'bg-customBlue md:px-16'}>
      <h2 className="text-center">Метод тарелки:</h2>
      <div className="flex flex-col sm:flex-row justify-center sm:gap-10 lg:gap-20 mb-5 items-center">
        {plateMethodData.map((data) => (
          <div className="w-80 flex flex-col items-center" key={data.id}>
            <Image className="mb-3" width={150} height={150} src={data.image} alt={'plate'} />
            <h5 className="w-full font-cursive text-center bg-yellow-300 rounded-xl">
              {data.title}:
            </h5>
            <span className="text-center mb-3">{data.data}</span>
            <div className="text-center mb-3">
              <span className="font-cursive font-bold mr-1 border-b-2 border-amber-300">
                Например:
              </span>
              {data.examples}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <span className="font-cursive font-bold bg-green-600 px-2 rounded-lg mr-1">Nota Bene:</span>
        <span className="text-center">
          картофель не считается овощем по методу тарелки - отнесите его к подгруппе цельнозерновых
          продуктов, в виде исключения.
        </span>
      </div>
    </section>
  );
};

export default PlateMethod;
