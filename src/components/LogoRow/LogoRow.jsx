import React, { useState } from "react";
import Link from "next/link";

import Container from "../Container";
import logo from "./../../assets/images/logo_bel.svg";
import * as style from "./LogoRow.module.scss";
import clsx from "clsx";

import sendTelegram from "./../../helpers/sendTelegram.js";
function LogoRow() {
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
    <>
      <Container>
        <div className={style.wrp}>
          <div className={style.logoWrp}>
            <img src={logo} alt="logo" className="logo" />
          </div>

          <button
            className={style.modalBtn}
            type="button"
            uk-toggle="target: #modal-close-default"
          >
            Заказать звонок
          </button>
          <ul className={clsx(style.iconGroup, "uk-iconnav")}>
            <li>
              <a href="#" uk-icon="icon: facebook">
                {""}
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/auto_best_vykup"
                uk-icon="icon: instagram"
              >
                {""}
              </a>
            </li>
            <li>
              <a href="tel:0663113100">+38 066 311 3100</a>
            </li>
          </ul>
        </div>
      </Container>
      <div id="modal-close-default" uk-modal="true">
        <div className="uk-modal-dialog uk-modal-body">
          <button
            className="uk-modal-close-default"
            type="button"
            uk-close="true"
          ></button>
          <h2 className="uk-modal-title uk-text-center">Заказать звонок</h2>
          {sendStatus === null && (
            <form onSubmit={hendlerForm} className={style.form}>
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
    </>
  );
}

export default LogoRow;
