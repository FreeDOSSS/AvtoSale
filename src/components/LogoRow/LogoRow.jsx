import * as style from "./LogoRow.module.scss";

import React, { useState } from "react";
import { fb, insta, phone } from "./../../constants/constants";

import Container from "../Container";
import Link from "next/link";
import clsx from "clsx";
import logo from "./../../assets/images/logo/logo_w.svg";
import sendTelegram from "./../../helpers/sendTelegramMes.js";

function LogoRow() {
  const [input, setInput] = useState("");
  const [sendStatus, setSendStatus] = useState(null);

  const hendlerForm = event => {
    event.preventDefault();
    const send = [{ name: "Телефон", value: input }];
    sendTelegram(send).then(data => {
      if (data === 200) {
        UIkit.modal.dialog(
          `<h2 style="padding: 10px; text-align: center ">Заявка успешно отправленна!</h2><div class="uk-modal-footer uk-text-right"> <button class="uk-button ${style.button} uk-modal-close" autofocus="">Ok</button> </div> `
        );
      }
    });
  };

  const hendlerInput = ({ target }) => {
    setInput(target.value);
  };

  return (
    <>
      <Container wrp={style.wrp}>
        <Link href="/">
          <a className={style.logoWrp}>
            <img src={logo} alt="logo" className={style.logo} />
          </a>
        </Link>

        <button
          className={style.modalBtn}
          type="button"
          uk-toggle="target: #modal-close-default"
        >
          Заказать звонок
        </button>
        <ul className={clsx(style.iconGroup, "uk-iconnav")}>
          <li>
            <a href={fb} uk-icon="icon: youtube">
              {""}
            </a>
          </li>
          <li>
            <a href={fb} uk-icon="icon: facebook">
              {""}
            </a>
          </li>
          <li>
            <a href={insta} uk-icon="icon: instagram">
              {""}
            </a>
          </li>
          <li>
            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
          </li>
        </ul>
      </Container>
      <div id="modal-close-default" uk-modal="true">
        <div className="uk-modal-dialog uk-modal-body">
          <button
            className="uk-modal-close-default"
            type="button"
            uk-close="true"
          ></button>
          <h2 className="uk-modal-title uk-text-center">
            Заказать обратный звонок
          </h2>
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
