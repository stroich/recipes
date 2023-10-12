const Banner = ({ imageUrl, text }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={backgroundImageStyle}>
      <h1 className="pt-1 pb-56 max-w-5xl mx-auto text-white md:text-2xl">{text}</h1>
    </div>
  );
};

export default Banner;
