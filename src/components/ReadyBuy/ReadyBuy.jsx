import * as style from "./ReadyBuy.module.scss";

import Container from "./../Container";
import React from "react";

function ReadyBuy({ city = "Украине" }) {
  return (
    <Container wrp={style.wrp} fluid={style.fon}>
      <h3 className={style.title}>
        центр срочного выкупа <span className={style.accent}>в {city}</span>
      </h3>

      <h3 className={style.subtitle}>Что мы покупаем:</h3>
      <ul className={style.list}>
        <li className={style.item}>Все марки авто</li>
        <li className={style.item}>Новые и б/у</li>
        <li className={style.item}>Битые</li>
        <li className={style.item}>После ДТП</li>
        <li className={style.item}>Неисправные </li>
        <li className={style.item}>Коммерческие </li>
        <li className={style.item}>Кредитные и залоговые</li>
        <li className={style.item}>Нерастаможенные</li>
        <li className={style.item}>Проблемные авто</li>
        <li className={style.item}>Мотоциклы</li>
        <li className={style.item}>Грузовые авто</li>
        <li className={style.item}>Спецтехнику</li>
        <li className={style.item}>Яхты</li>
        <li className={style.item}>Моторные лодки</li>
        <li className={style.item}>Воздушные суда</li>
        <li className={style.item}>Недвижимость</li>
      </ul>
    </Container>
  );
}

export default ReadyBuy;
