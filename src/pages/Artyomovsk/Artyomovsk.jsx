import React from "react";
import Head from "../../components/Head";
import City from "../../templates/City";

const Artyomovsk = () => {
  const city = "Артемовске";
  return (
    <>
      <Head>
        <title>{city}</title>
      </Head>
      <City city={city}>
        <h1>Seo text</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          atque voluptas sint quo officia illo, doloremque ducimus labore
          recusandae, rerum eius sapiente? Fugit reprehenderit vel, veniam
          ducimus illum odio quidem?
        </p>
      </City>
    </>
  );
};

export default Artyomovsk;
