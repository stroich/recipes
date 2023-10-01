import Script from 'next/script';

const Analytics = () => {
  const GOOGLE_ANALYTICS_ID = '';
  // 'UA-XXXXX-Y' Замените на ваш идентификатор отслеживания
  // Если GA_ID пустой, вернуть null
  if (!GOOGLE_ANALYTICS_ID) {
    return null;
  }
  return (
    <div className="container">
      <Script id="google-analytics">
        {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
 
          ga('create', '${GOOGLE_ANALYTICS_ID}', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
    </div>
  );
};

export { Analytics };
