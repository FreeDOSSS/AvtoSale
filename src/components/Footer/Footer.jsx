import * as style from "./Footer.module.scss";

import React, { useState } from "react";
import { fb, insta, phone } from "./../../constants/constants";

import Container from "../Container";
import Link from "next/link";
// Картинки
import car from "./../../assets/images/car.png";
import clsx from "clsx";
import logo from "./../../assets/images/logo/logo_w.svg";
import router from "../../router/router";
import sendTelegram from "./../../helpers/sendTelegramMes";

// ========

function Footer({ first_row = true }) {
  const [input, setInput] = useState("");
  const [sendStatus, setSendStatus] = useState(null);

  const hendlerForm = event => {
    event.preventDefault();
    const send = [{ name: "Телефон", value: input }];
    sendTelegram(send).then(data => {
      if (data === 200) {
        UIkit.modal.dialog(
          `<h2 style="padding: 10px; text-align: center ">Заявка успешно отправлена!</h2><div class="uk-modal-footer uk-text-right"> <button class="uk-button ${style.sendButton} uk-modal-close" autofocus="">Ok</button> </div> `
        );
      }
    });
  };

  const hendlerInput = ({ target }) => {
    setInput(target.value);
  };

  const offMenu = () => {
    const avtoDrop = ({ city }) => {
      const sortCity = city.sort((a, b) => (a.name < b.name ? -1 : 1));

      return sortCity.map((el, i) => (
        <li key={i}>
          {/* <Link href={el.url}>
            <a className={style.menu__item__link}>{el.name}</a>
          </Link> */}
          <a href={el.url} className={style.menu__item__link}>
            {el.name}
          </a>
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
              <a
                href="#"
                className={style.menu__item__link}
                type="button"
                uk-toggle="target: #avtodrop"
              >
                Автовыкуп в украине
              </a>
            </li>
          ) : (
            <li key={i} className={style.menu__item}>
              {/* <Link href={el.url}>
                <a className={style.menu__item__link}>{el.name}</a>
              </Link> */}
              <a href={el.url} className={style.menu__item__link}>
                {el.name}
              </a>
            </li>
          )
        )}
      </ul>
    );
  };
  const currentYear = () => new Date().getFullYear();

  return (
    <footer>
      {first_row && (
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
                // uk-toggle="target: #footerform"
                uk-toggle="target: #modal-close-default"
              >
                узнать стоимость
              </button>
            </div>
            <div className={style.boxImg}>
              <img src={car} alt="Закажите просчет" className={style.img} />
            </div>
          </div>
        </Container>
      )}

      <Container fluid={style.logoBox}>
        <img src={logo} alt="Logo" className={style.logo} />
      </Container>

      <Container fluid={style.menuWrp}>
        <ul className={style.menu}>{headreMenu(router)}</ul>

        <aside id="avtodrop" uk-offcanvas="overlay: true; flip: true">
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
        </aside>
      </Container>

      <Container fluid={style.number}>
        <div className={style.wrp}>
          <div className={style.border}>
            <a href={`tel:${phone.replace(/\s/g, "")}`} className={style.link}>
              {phone}
            </a>
            <div className={style.iconBox}>
              <a  rel="nofollow" href={fb} target="_blank" uk-icon="icon: facebook">
                {""}
              </a>
              <a  rel="nofollow" href={insta} target="_blank" uk-icon="icon: instagram">
                {""}
              </a>
              <a rel="nofollow"
                href="https://www.youtube.com/channel/UCsQIX8AAQ0eWveMtjyrvMHw" target="_blank"
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
            <a href="#" uk-icon="icon: arrow-up" uk-scroll="">
              {" "}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
