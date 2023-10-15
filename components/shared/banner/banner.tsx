const Banner = ({ imageUrl, text }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={backgroundImageStyle}>
      <h1 className="pt-1 pb-60 px-52 mx-auto text-white">{text}</h1>
    </div>
  );
};

export default Banner;
