import * as style from "./SaleInSity.module.scss";

import Container from "./../Container";
import Link from "next/link";
import React from "react";
import car from "./../../assets/images/CityAvto.png";
import clsx from "clsx";
import { contact } from "./../../router/router";

function SaleInSity({ city }) {
  return (
    <Container wrp={style.wrp}>
      <svg style={{ display: "none" }}>
        <symbol viewBox="0 0 24 24" id="check">
          <path d="M20 12.194v9.806h-20v-20h18.272l-1.951 2h-14.321v16h16v-5.768l2-2.038zm.904-10.027l-9.404 9.639-4.405-4.176-3.095 3.097 7.5 7.273 12.5-12.737-3.096-3.096z" />
        </symbol>
      </svg>
      <div className={style.left}>
        <img src={car} alt="car" className={style.img} />
      </div>
      <div className={style.right}>
        <h2 className={style.title}>срочный выкуп авто в {city}</h2>
        <div className={style.spacer}></div>
        <p className={style.discription}>
        95% РЫНОЧНОЙ СТОИМОСТИ.
ВЫКУПАЕМ АВТО ВСЕХ МАРОК И МОДЕЛЕЙ. В ЛЮБОМ УГОЛКЕ УКРАИНЫ ,А ТАКЖЕ АР КРЫМ,ДОНЕЦКОЙ И ЛУГАНСКОЙ ОБЛАСТИ. Выкупаем автомобили после ДТП, кредитные, не на ходу. Мы предлагаем Максимальную цену за ваш автомобиль! Оценка авто и выезд на осмотр абсолютно бесплатно. Расчет в удобное для вас время и в любой валюте. Наше отличие от конкурентов – это мобильность, порядочность, надежность. Позвоните нам и убедитесь в этом сами, а также возможен выкуп мототехники и водного транспорта.
        </p>

        <ul className={style.chekList}>
          <li className={style.item}>
            <svg className={style.icon}>
              <use href="#check"></use>
            </svg>
            наличный и безналичный расчет
          </li>
          <li className={style.item}>
            <svg className={style.icon}>
              <use href="#check"></use>
            </svg>
            Оплата любой валютой (доллары, гривны, евро)
          </li>
        </ul>

        <div className={style.buttonWrp}>
          <button
            type="button"
            className={style.button}
            uk-toggle="target: #modal-close-default"
          >
            <span className={style.wrapper}></span>
            Заказать звонок
          </button>
          {/* <Link href={contact.url}> */}
          <a href={contact.url} className={style.button}>
            экспресс оценка
            <span className={clsx(style.wrapper, style.url)}></span>
          </a>
          {/* </Link> */}
        </div>
      </div>
    </Container>
  );
}

export default SaleInSity;
