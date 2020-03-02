import React from "react";
import Container from "./../Container";
import Link from "next/link";
import clsx from "clsx";

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

  const headreMenu = rout => {
    const arr = Object.values(rout);

    return (
      <ul className={style.menu}>
        {arr.map((el, i) =>
          Array.isArray(el) ? (
            <li key={i} className={style.menu__item}>
              <a href="#" className={style.menu__item__link}>
                Автовыкуп в украине
              </a>
              <div className={style.drop} uk-drop="mode: click">
                <ul className={style.dropMenu}> {avtoDrop(router)}</ul>
              </div>
            </li>
          ) : (
            <li key={i} className={style.menu__item}>
              <Link href={el.url}>
                <a className={style.menu__item__link}>{el.name}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    );
  };

  const offMenu = rout => {
    const arr = Object.values(rout);

    return (
      <ul className="uk-nav-parent-icon" uk-nav="true">
        {arr.map((el, i) =>
          Array.isArray(el) ? (
            <li key={i} className={clsx(style.menu__item, "uk-parent")}>
              <a href="#" className={style.menu__item__link}>
                Автовыкуп в городах
              </a>
              <ul className="uk-nav-sub"> {avtoDrop(router)}</ul>
            </li>
          ) : (
            <li key={i} className={style.menu__item}>
              <Link href={el.url}>
                <a className={style.menu__item__link}>{el.name}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    );
  };

  return (
    <>
      <Container fluid={style.wrp} wrp={style.menuWrp}>
        {headreMenu(router)}
        <button
          className={style.offcanvasToggler}
          uk-toggle="target: #offcanvas"
          type="button"
          uk-icon="menu"
        >
          {""}
        </button>
      </Container>

      <aside id="offcanvas" uk-offcanvas="overlay: true">
        <div className={clsx("uk-offcanvas-bar", style.menuOffcanvas)}>
          <button className="uk-offcanvas-close" type="button" uk-close="true">
            {" "}
          </button>
          {offMenu(router)}
        </div>
      </aside>
    </>
  );
}

export default Menu;
