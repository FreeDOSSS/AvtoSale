import React from "react";
import Head from "./../components/Head";
import Menu from "../components/Menu/Menu";
import * as style from "./index.module.scss";

import Container from "../components/Container";
import LogoRow from "../components/LogoRow";
import About from "../components/About/About";

import fotoVykup from "./../assets/images/vykup.png";
import fotoBitAvto from "./../assets/images/bit-avto.png";
import fotoSud from "./../assets/images/kredit-avto.png";
import clsx from "clsx";

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

        <About />
      </header>

      <main className={style.main}>
        <Container fluid={style.special}>
          <h2 className={clsx("uk-text-center", style.title)}>
            срочно выкупим:
          </h2>
          <div
            className={"uk-child-width-1-1 uk-child-width-1-2@s"}
            uk-grid="true"
          >
            <div>
              <ul className={style.list}>
                <li className={style.list__item}>Все марки и модели авто</li>
                <li className={style.list__item}>Битые - после ДТП </li>
                <li className={style.list__item}>Кредитные - Залоговые авто</li>
                <li className={style.list__item}>Нерастаможенные авто </li>
                <li className={style.list__item}>Грузовые автомобили </li>
                <li className={style.list__item}>Спецтехнику </li>
                <li className={style.list__item}>Мотоциклы </li>
                <li className={style.list__item}>
                  Недвижимость (дома и квартиры)
                </li>
              </ul>
            </div>
            <div>s</div>
          </div>
        </Container>

        <section className={style.priveleging}></section>

        <Container></Container>
        <Container></Container>
        <Container></Container>
        <Container></Container>
      </main>
    </>
  );
};

export default App;
