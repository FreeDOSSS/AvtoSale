import * as style from "./City.module.scss";

import Article from "./../../components/Article";
import BuyAvto from "./../../components/BuyAvto/BuyAvto";
import Footer from "./../../components/Footer/Footer";
import Head from "next/head";
import Link from "next/link";
import LogoRow from "./../../components/LogoRow";
import Menu from "./../../components/Menu/Menu";
import React from "react";
import ReadyBuy from "./../../components/ReadyBuy";
import SaleInSity from "./../../components/SaleInSity";
import StepsBuy from "./../../components/StepsBuy";

function City({ city, children }) {
  //TODO Затемнить фон
  return (
    <>
      <header className={style.header}>
        <Menu />
        <LogoRow />
        <h2 className={style.title}>Автовыкуп в {city}</h2>
        <div className={style.spacer}></div>
        <ul className={style.kroh}>
          <li className={style.home}>
            <Link href="/">
              <a className={style.link}>О нас</a>
            </Link>
          </li>
          <li>/</li>
          <li>Автовыкуп в {city}</li>
        </ul>
      </header>
      <main>
        <SaleInSity city={city} />
        <ReadyBuy city={city} />
        <StepsBuy />
        <Article>{children}</Article>
        <BuyAvto />
      </main>
      <Footer />
    </>
  );
}

export default City;
