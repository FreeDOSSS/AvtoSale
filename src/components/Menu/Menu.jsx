import React from "react";
import Container from "./../Container";
import Link from "next/link";
import * as style from "./Menu.module.scss";

import router from "./../../router/router";
import clsx from "clsx";

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

  const menu = (
    <ul className={style.menu}>
      <li className={style.menu__item}>
        <Link href="/">
          <a className={style.menu__item__link}>О нас</a>
        </Link>
      </li>
      <li className={style.menu__item}>
        <Link href="#">
          <a className={style.menu__item__link}>Автовыкуп в городах</a>
        </Link>
        <div className={style.drop} uk-drop="mode: click">
          <ul className={style.dropMenu}> {avtoDrop(router)}</ul>
        </div>
      </li>
      <li className={style.menu__item}>
        <Link href="#">
          <a className={style.menu__item__link}>недвижимость</a>
        </Link>
      </li>
      <li className={style.menu__item}>
        <Link href="#">
          <a className={style.menu__item__link}>Полезная Информация</a>
        </Link>
      </li>
      <li className={style.menu__item}>
        <Link href="/contact">
          <a className={style.menu__item__link}>Контакты</a>
        </Link>
      </li>
    </ul>
  );

  const offMenu = (
    <ul className={clsx("uk-nav-parent-icon")} uk-nav="true">
      <li className={style.menu__item}>
        <Link href="/">
          <a className={style.menu__item__link}>О нас</a>
        </Link>
      </li>
      <li className={clsx(style.menu__item, "uk-parent")}>
        <a href="#" className={style.menu__item__link}>
          Автовыкуп в городах
        </a>

        <ul className="uk-nav-sub"> {avtoDrop(router)}</ul>
      </li>
      <li className={style.menu__item}>
        <Link href="#">
          <a className={style.menu__item__link}>Недвижимость</a>
        </Link>
      </li>
      <li className={style.menu__item}>
        <Link href="#">
          <a className={style.menu__item__link}>Полезная Информация</a>
        </Link>
      </li>
      <li className={style.menu__item}>
        <Link href="/contact">
          <a className={style.menu__item__link}>Контакты</a>
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <Container fluid={style.wrp}>
        <div className={style.menuWrp}>
          {menu}
          <button
            className={style.offcanvasToggler}
            uk-toggle="target: #offcanvas"
            type="button"
            uk-icon="menu"
          >
            {""}
          </button>
        </div>
      </Container>

      <div id="offcanvas" uk-offcanvas="true">
        <div className={clsx("uk-offcanvas-bar", style.menuOffcanvas)}>
          <button
            className="uk-offcanvas-close"
            type="button"
            uk-close="true"
          ></button>
          {offMenu}
        </div>
      </div>
    </>
  );
}

export default Menu;
