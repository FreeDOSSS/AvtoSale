import React from "react";

import Menu from "../../components/Menu/Menu";
import LogoRow from "../../components/LogoRow";
import ReadyBuy from "../../components/ReadyBuy";
import StepsBuy from "../../components/StepsBuy/StepsBuy";
import Article from "../../components/Article/Article";
import BuyAvto from "../../components/BuyAvto/BuyAvto";
import Footer from "../../components/Footer/Footer";

import * as style from "./City.module.scss";
import Link from "next/link";
import SaleInSity from "../../components/SaleInSity/SaleInSity";

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
