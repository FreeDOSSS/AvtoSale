import React from "react";
import Container from "./../Container";
import Link from "next/link";
import * as style from "./Menu.module.scss";

import router from "./../../router/router";

function Menu() {
  const avtoDrop = ({ city }) => {
    const sortCity = city.sort((a, b) => (a.name < b.name ? -1 : 1));

    return sortCity.map((el, i) => (
      <li key={i}>
        <Link href={el.url}>
          <a className={style.menu__item__link}>{el.name}</a>
        </Link>
      </li>
    ));
  };

  return (
    <Container fluid={style.wrp}>
      <ul className={style.menu}>
        <li className="menu__item">
          <Link href="/">
            <a className={style.menu__item__link}>О нас</a>
          </Link>
        </li>
        <li className="menu__item">
          <Link href="#">
            <a className={style.menu__item__link}>Автовыкуп в городах</a>
          </Link>
          <div className={style.drop} uk-drop="mode: click">
            <ul className={style.dropMenu}> {avtoDrop(router)}</ul>
          </div>
        </li>
        <li className="menu__item">
          <Link href="#">
            <a className={style.menu__item__link}>недвижимость</a>
          </Link>
        </li>
        <li className="menu__item">
          <Link href="#">
            <a className={style.menu__item__link}>Полезная Информация</a>
          </Link>
        </li>
        <li className="menu__item">
          <Link href="/contact">
            <a className={style.menu__item__link}>Контакты</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

//TODO Канвас меню
export default Menu;
