import React, { useState } from "react";
import * as style from "./Footer.module.scss";
import clsx from "clsx";

import Container from "../components/Container";
import sendTelegram from "../helpers/sendTelegram";
// Картинки
import car from "../assets/images/car.png";
import logo from "../assets/images/logo/logo_w.svg";
import Menu from "../components/Menu/Menu";
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
      <Menu />
      <Container></Container>
      <Container></Container>
      <Container></Container>
    </footer>
  );
}

export default Footer;
