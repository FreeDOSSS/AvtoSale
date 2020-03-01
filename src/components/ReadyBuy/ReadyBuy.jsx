import React from "react";

import Container from "./../Container";

import * as style from "./ReadyBuy.module.scss";
import clsx from "clsx";

function ReadyBuy() {
  return (
    <Container wrp={style.wrp} fluid={style.fon}>
      <h2 className={clsx(style.title, style.accent)}>
        Мы готовы срочно купить:
      </h2>

      <h3 className={style.subtitle}>
        Выкупаем любого типа авто, ниже приведен список:
      </h3>

      <ul className={style.list}>
        {/* <li className={style.item}>Все марки и модели авто</li> */}
        <li className={style.item}>Битые</li>
        <li className={style.item}>После ДТП</li>
        <li className={style.item}>Залоговые авто</li>
        <li className={style.item}>Кредитные</li>
        <li className={style.item}>Нерастаможенные авто</li>
        <li className={style.item}>Грузовые автомобили</li>
        <li className={style.item}>Спецтехнику</li>
        <li className={style.item}>Мотоциклы</li>
        <li className={style.item}>Дома, Квартиры</li>
        <li className={style.item}>Проблемные авто</li>
        <li className={style.item}>С пробегом</li>
        <li className={style.item}>Аварийные</li>
        <li className={style.item}>Подержанные</li>
        <li className={style.item}>Ретро</li>
        <li className={style.item}>Неисправные</li>
        <li className={style.item}>Коммерческие</li>
      </ul>
    </Container>
  );
}

export default ReadyBuy;
