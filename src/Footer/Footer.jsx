import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

import * as style from "./Footer.module.scss";
import Container from "../components/Container";
import sendTelegram from "../helpers/sendTelegram";
import router from "./../router/router";

// Картинки
import car from "../assets/images/car.png";
import logo from "../assets/images/logo/logo_w.svg";
// ========

function Footer() {
  const [input, setInput] = useState("");
  const [sendStatus, setSendStatus] = useState(null);

  const hendlerForm = event => {
    event.preventDefault();
    const send = [{ name: "Телефон", value: input }];
    sendTelegram(send).then(data => setSendStatus(data));
  };

  const hendlerInput = ({ target }) => {
    setInput(target.value);
  };

  const offMenu = () => {
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
    return <ul className="uk-nav-sub"> {avtoDrop(router)}</ul>;
  };

  const headreMenu = rout => {
    const arr = Object.values(rout);

    return (
      <ul className={style.menu}>
        {arr.map((el, i) =>
          Array.isArray(el) ? (
            <li key={i} className={style.menu__item}>
              <Link href="#">
                <a
                  className={style.menu__item__link}
                  type="button"
                  uk-toggle="target: #avtodrop"
                >
                  Автовыкуп в городах
                </a>
              </Link>
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
  const currentYear = () => new Date().getFullYear();

  return (
    <footer>
      <Container fluid={style.prefooterWrp}>
        <div className={style.prefooter}>
          <div className={style.boxTitle}>
            <p className={style.title}>убедили?</p>
            <p className={style.subtitle}>закажите просчет</p>
          </div>
          <div className={style.boxBtn}>
            <button
              className={style.button}
              type="button"
              uk-toggle="target: #footerform"
            >
              узнать стоимость
            </button>
          </div>
          <div className={style.boxImg}>
            <img src={car} alt="Закажите просчет" className={style.img} />
          </div>
        </div>
        {/* //TODO Вынести модалку в отдельный компонент */}
        <div id="footerform" uk-modal="true">
          <div className="uk-modal-dialog uk-modal-body">
            <button
              className="uk-modal-close-default"
              type="button"
              uk-close="true"
            ></button>
            <h2 className="uk-modal-title uk-text-center">Заказать звонок</h2>
            {sendStatus === null && (
              <form onSubmit={hendlerForm}>
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" uk-icon="icon: user"></span>
                  <input
                    className="uk-input"
                    type="text"
                    placeholder="Ваш номер телефона"
                    value={input}
                    onChange={hendlerInput}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={clsx(
                    "uk-button uk-margin uk-align-right",
                    style.submit
                  )}
                >
                  Отправить
                </button>
              </form>
            )}
            {sendStatus && (
              <p className="uk-text-large uk-text-center">
                {sendStatus === 200
                  ? "Ваше сообщение успешно отправленно. Мы Вам перезвоним"
                  : "Что-то пошло не так попробуйте еще раз..."}
              </p>
            )}
          </div>
        </div>
      </Container>

      <Container fluid={style.logoBox}>
        <img src={logo} alt="Logo" className={style.logo} />
      </Container>

      <Container fluid={style.menuWrp}>
        <ul className={style.menu}>{headreMenu(router)}</ul>

        <div id="avtodrop" uk-offcanvas="overlay: true; flip: true">
          <div className={clsx("uk-offcanvas-bar", style.menuOffcanvas)}>
            <button
              className="uk-offcanvas-close"
              type="button"
              uk-close="true"
            >
              {" "}
            </button>
            {offMenu(router)}
          </div>
        </div>
      </Container>

      <Container fluid={style.number}>
        <div className={style.wrp}>
          <div className={style.border}>
            <a href="tel:0663113100" className={style.link}>
              +38 066 311 3100
            </a>
            <div className={style.iconBox}>
              <a href="#" uk-icon="icon: facebook">
                {""}
              </a>
              <a
                href="https://www.instagram.com/auto_best_vykup"
                uk-icon="icon: instagram"
              >
                {""}
              </a>
              <a
                href="https://www.instagram.com/auto_best_vykup"
                uk-icon="icon: youtube"
              >
                {""}
              </a>
            </div>
          </div>
        </div>
      </Container>

      <Container fluid={style.copyrate}>
        <div className={style.wrp}>
          <div className={style.year}>
            © {currentYear()} Все права защищены.
          </div>
          <div className={style.developer}>
            Сайт разработан в <a href="https://webcreate.pro/">WebCreate.pro</a>{" "}
          </div>
          <div className={style.arrow}>
            <a href="#__next" uk-icon="icon: arrow-up" uk-scroll="true">
              {" "}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
