import React from "react";
import Head from "./../components/Head";
import Menu from "../components/Menu/Menu";
import * as style from "./index.module.scss";

import Container from "../components/Container";
import LogoRow from "../components/LogoRow";

{
  /* <Head>
  <title>Page</title>
</Head> */
}
const App = () => {
  return (
    <>
      <Head>
        <title>Page</title>
      </Head>
      <header className={style.header}>
        <Menu />
        <LogoRow />
      </header>
    </>
  );
};

export default App;
