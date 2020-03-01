import React, { useState } from "react";
import clsx from "clsx";

import Container from "../Container";
import * as style from "./About.module.scss";
import fotoTime from "./../../assets/images/icons/time.svg";
import fotoLocation from "./../../assets/images/icons/location.svg";
import sendTelegram from "./../../helpers/sendTelegramMes";

function About() {
  const [input, setinput] = useState("+380");
  const [sendStatus, setSendStatus] = useState(null);
  const hendlerInput = ({ target }) => setinput(target.value);
  const hendlerForm = event => {
    event.preventDefault();
    sendTelegram([{ name: "Телефон", value: input }]).then(data =>
      setSendStatus(data)
    );
  };
  return (
    <Container wrp={style.wrp}>
      <div className={clsx(style.left)}>
        <h1 className={style.title}>
          КУПИМ ВАШ АВТО <span className={style.accent}> ДОРОЖЕ</span>{" "}
          КОНКУРЕНТОВ
        </h1>
        <div className={style.card}>
          <div className={style.imgWrp}>
            <img
              src={fotoLocation}
              className={style.img}
              alt="По всей стране"
            />
          </div>
          <h3 className={style.card__discription}>
            Работаем по всей Украине, независимо от региона
          </h3>
        </div>
        <div className={style.card}>
          <div className={style.imgWrp}>
            <img src={fotoTime} className={style.img} alt="24/7" />
          </div>
          <h3 className={style.card__discription}>
            Работаем круглосуточно, семь дней в неделю
          </h3>
        </div>
      </div>
      <div className={clsx(style.right)}>
        <form className={style.form} onSubmit={hendlerForm}>
          {sendStatus === null && (
            <>
              <h2 className={style.form__title}>
                Узнайте стоимость авто за{" "}
                <span className={style.accent}>3</span> минуты!
              </h2>
              <p className={style.subtitle}>
                Оставте ваш номер и мы Вам перезвоним
              </p>
              <input
                type="text"
                placeholder="+380__ ___ ____"
                required
                className={style.input}
                value={input}
                onChange={hendlerInput}
              />
              <input
                type="submit"
                value="Узнать стоимость"
                className={style.submit}
              />
            </>
          )}
          {sendStatus && (
            <p className="uk-text-large uk-text-center">
              {sendStatus === 200
                ? "Ваше сообщение успешно отправленно. Мы Вам перезвоним"
                : "Что-то пошло не так попробуйте еще раз..."}
            </p>
          )}
        </form>
      </div>
    </Container>
  );
}

export default About;
