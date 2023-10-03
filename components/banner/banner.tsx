const Banner = ({ imageUrl, text }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="" style={backgroundImageStyle}>
      <p className="pt-1 pb-56 max-w-5xl mx-auto text-white md:text-2xl">{text}</p>
    </div>
  );
};

export default Banner;
