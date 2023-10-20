const Banner = ({ imageUrl, text }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div style={backgroundImageStyle} className={'bg-no-repeat bg-cover bg-center '}>
      <h1 className="h-[70px] md:h-auto pt-1 xl:pb-60 lg:pb-40 text-transparent  md:pb-28 sm:pb-20 lg:px-52 md:px-10 px-6 mx-auto md:text-white container m-auto 2xl:px-20  sm:px-10">
        {text}
      </h1>
    </div>
  );
};

export default Banner;
