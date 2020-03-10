import * as style from "./About.module.scss";

import React, { useState } from "react";

import Container from "../Container";
import sendTelegram from "./../../helpers/sendTelegramMes";

function About() {
  const [input, setinput] = useState("+380");
  const [sendStatus, setSendStatus] = useState(null);
  const hendlerInput = ({ target }) => setinput(target.value);

  const hendlerForm = event => {
    event.preventDefault();
    sendTelegram([{ name: "Телефон", value: input }]).then(data => {
      setSendStatus(data);
      setTimeout(() => setSendStatus(null), 5000);
    });
  };
  return (
    <Container wrp={style.wrp}>
      <svg style={{ display: "none" }}>
        <symbol viewBox="0 0 24 24" id="location">
          <path d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z" />
        </symbol>
        <symbol viewBox="0 0 24 24" id="timeAboute">
          <path d="M21.854 13.683l1.998.159c-.132.854-.351 1.676-.652 2.46l-1.8-.905c.2-.551.353-1.123.454-1.714zm-2.548 7.826l-1.413-1.443c-.486.356-1.006.668-1.555.933l.669 1.899c.821-.377 1.591-.844 2.299-1.389zm1.226-4.309c-.335.546-.719 1.057-1.149 1.528l1.404 1.433c.583-.627 1.099-1.316 1.539-2.058l-1.794-.903zm-20.532-5.2c0 6.627 5.375 12 12.004 12 1.081 0 2.124-.156 3.12-.424l-.665-1.894c-.787.2-1.607.318-2.455.318-5.516 0-10.003-4.486-10.003-10s4.487-10 10.003-10c2.235 0 4.293.744 5.959 1.989l-2.05 2.049 7.015 1.354-1.355-7.013-2.184 2.183c-2.036-1.598-4.595-2.562-7.385-2.562-6.629 0-12.004 5.373-12.004 12zm23.773-2.359h-2.076c.163.661.261 1.344.288 2.047l2.015.161c-.01-.755-.085-1.494-.227-2.208zm-9.005 5.359v-1.419h-2.594v-1.295l2.722-3.653h1.288v3.689h.816v1.259h-.815v1.419h-1.417zm0-2.679v-1.695l-1.263 1.695h1.263zm-7.768 2.679c0-.961.275-1.709 1.234-2.419 1.129-.836 1.99-1.165 1.99-1.939 0-.512-.308-.83-.804-.83-.69 0-.855.723-.855 1.411h-1.421c-.06-1.782.951-2.713 2.338-2.713 1.287 0 2.22.856 2.22 2.036 0 .589-.183 1.056-.576 1.469-.621.655-1.552.985-2.163 1.682h2.774v1.303h-4.737z" />
        </symbol>
      </svg>
      <div className={style.left}>
        <h2 className={style.title}>
          КУПИМ ВАШ АВТО <span className={style.accent}> ДОРОЖЕ</span>{" "}
          КОНКУРЕНТОВ
        </h2>
        <div className={style.card}>
          <div className={style.svgWrp}>
            <svg className={style.svg}>
              <use href="#location"></use>
            </svg>
          </div>
          <h3 className={style.card__discription}>
            Работаем по всей Украине, независимо от региона
          </h3>
        </div>
        <div className={style.card}>
          <div className={style.svgWrp}>
            <svg className={style.svg}>
              <use href="#timeAboute"></use>
            </svg>
          </div>
          <h3 className={style.card__discription}>
            Работаем круглосуточно, семь дней в неделю
          </h3>
        </div>
      </div>
      <div className={style.right}>
        <form className={style.form} onSubmit={hendlerForm}>
          {sendStatus === null && (
            <>
              <h2 className={style.form__title}>
                Узнайте стоимость авто за{" "}
                <span className={style.accent}>3</span> минуты!
              </h2>
              <p className={style.subtitle}>
                Оставьте ваш номер и мы Вам перезвоним
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
