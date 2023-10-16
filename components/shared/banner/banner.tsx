const Banner = ({ imageUrl, text }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div style={backgroundImageStyle} className={'bg-no-repeat bg-cover sm:bg-center '}>
      <h1 className="pt-1 xl:pb-60 lg:pb-40 pb-36 md:pb-28 sm:pb-20 lg:px-52 md:px-10 px-5 mx-auto text-white">
        {text}
      </h1>
    </div>
  );
};

export default Banner;
