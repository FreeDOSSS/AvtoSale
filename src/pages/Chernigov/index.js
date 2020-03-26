import City from "./../../templates/City";
import Head from "./../../components/Head";
import React from "react";
import { baseUrl } from "./../../constants/constants";
import router from "./../../router/router";

const App= () => {
  const location = router.city.find(el => el.path === `/Chernigov`);

  const city = "Чернигове";

  return (
    <>
      <Head>
        <title>Автовыкуп в {city}</title>
        <meta rel="cononical" href={`${baseUrl}${location.url}`} />
        <meta name="description" content={`Срочный выкуп авто в ${city}`} />
        <meta property="og:title" content={`Автовыкуп в ${city}`} />
        <meta property="og:type" content="website" />
        <meta property = "og:url" content = {`${baseUrl}${location.url}`} />


      </Head>
      <City city={city}>
        <h5>ИЗВИНИТЕ, ТЕКСТ СКОРО БУДЕТ</h5>
        
      </City>
    </>
  );
};

export default App;
