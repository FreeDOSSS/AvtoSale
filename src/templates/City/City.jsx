import Link from "next/link";
import React from "react";
import Article from "./../../components/Article";
import BuyAvto from "./../../components/BuyAvto/BuyAvto";
import Footer from "./../../components/Footer/Footer";
import LogoRow from "./../../components/LogoRow";
import Menu from "./../../components/Menu/Menu";
import ReadyBuy from "./../../components/ReadyBuy";
import SaleInSity from "./../../components/SaleInSity";
import StepsBuy from "./../../components/StepsBuy";
import * as style from "./City.module.scss";

function City({ city, children }) {
  //TODO Затемнить фон
  return (
    <>
      <header className={style.header}>
        <Menu />
        <LogoRow />
        <h1 className={style.title}>Автовыкуп в {city}</h1>
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
