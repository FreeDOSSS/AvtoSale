import * as style from "./style.scss";

import React, { useState } from "react";

import Article from "./../../components/Article";
import BuyAvto from "./../../components/BuyAvto";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import Head from "./../../components/Head";
import LogoRow from "./../../components/LogoRow";
import Menu from "./../../components/Menu";
import sendTelegram from "./../../helpers/sendTelegramMes";
import sendTelegramPhoto from "./../../helpers/sendTelegramPhoto";
import logo from "./../../assets/images/logo/logo_w.svg";
import { baseUrl } from "./../../constants/constants";
import router from "./../../router/router";

function App() {
  const [firma, setFirma] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const [errFile, setErrFile] = useState(null);
  const [sity, setSity] = useState("");
  const [payment, setPayment] = useState("");

  const hendlerForm = (evt) => {
    evt.preventDefault();

    const { target } = evt;

    const fields = [
      {
        name: "Марка",
        value: firma,
      },
      {
        name: "Модель",
        value: model,
      },
      {
        name: "Год выпуска",
        value: year,
      },
      {
        name: "Пробег",
        value: km,
      },
      {
        name: "Имя",
        value: name,
      },
      {
        name: "Телефон",
        value: phone,
      },
      {
        name: "Город",
        value: sity,
      },
      {
        name: "Цена",
        value: payment,
      },
    ];

    const { files } = target.photo;
    if (!errFile) {
      sendTelegram(fields).then((res) => {
        if (res === 200) {
          setFirma("");
          setPhone("");
          setName("");
          setKm("");
          setYear("");
          setModel("");
          setFile("");
          setSity("");
          setPayment("");
          UIkit.modal.dialog(
            `<h2 style="padding: 10px; text-align: center ">Заявка успешно отправлена!</h2><div class="uk-modal-footer uk-text-right"> <button class="uk-button ${style.button} uk-modal-close" autofocus="">Ok</button> </div> `
          );

          for (const input of files) {
            const data = new FormData();
            data.append(`photo`, input);
            sendTelegramPhoto(data);
          }
        }
      });
    }
  };

  const hendlerInput = ({ target }) => {
    const { value } = target;
    switch (target.name) {
      case "firma":
        setFirma(value);
        break;
      case "model":
        setModel(value);
        break;
      case "km":
        setKm(value);
        break;
      case "year":
        setYear(value);
        break;
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "payment":
        setPayment(value);
        break;
      case "sity":
        setSity(value);
        break;
      default:
        return;
    }
  };

  const hendlerFile = ({ target }) => {
    const files = Object.values(target.files);
    setErrFile(null);
    setFile(null);

    if (files.length > 10)
      return setErrFile(
        "Превышено максимально количество файлов. Максимально количество файлов 10"
      );

    const arr = [];
    for (const fileItem of files) {
      arr.push(fileItem.name);
    }

    setFile(arr);
  };
  const { url } = router.contact;
  return (
    <>
      <Head>
        <title>Контакты</title>
        <meta rel="cononical" href="https://vykup.org/kontakty" />
        <meta name="description" content="Автовыкуп контактные данные" />
        <meta property="og:title" content="Контакты" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vykup.org/kontakty" />
        <meta property="og:site_name" content="Автовыкуп" />
        <meta property="og:description" content="Автовыкуп контактные данные" />
      </Head>
      <header className={style.header}>
        <Menu />
        <LogoRow />
        <Container>
          <div className={style.calcWrp}>
            <form className={style.calc} onSubmit={hendlerForm}>
              <p className={style.title}>
                Экспресс оценка <span>автомобиля</span>
              </p>

              <input
                type="text"
                required
                name="firma"
                value={firma}
                onChange={hendlerInput}
                className={style.field}
                placeholder="Введите марку"
              />

              <input
                type="text"
                required
                name="model"
                value={model}
                onChange={hendlerInput}
                className={style.field}
                placeholder="Введите модель"
              />

              <input
                type="number"
                required
                name="year"
                value={year}
                onChange={hendlerInput}
                className={style.field}
                placeholder="Год выпуска"
              />

              <input
                type="number"
                required
                name="km"
                value={km}
                onChange={hendlerInput}
                className={style.field}
                placeholder="Пробег"
              />

              <input
                type="text"
                required
                name="name"
                value={name}
                onChange={hendlerInput}
                className={style.field}
                placeholder="Ваше имя"
              />

              <input
                type="text"
                required
                name="phone"
                value={phone}
                onChange={hendlerInput}
                className={style.field}
                placeholder="Ваш телефон"
              />
              <input
                type="text"
                required
                name="sity"
                value={sity}
                onChange={hendlerInput}
                className={style.field}
                placeholder="Ваш город"
              />
              <input
                type="text"
                required
                name="payment"
                value={payment}
                onChange={hendlerInput}
                className={style.field}
                placeholder="Цена продажи"
              />

              <div className={style.fileList}>
                <label className={style.label}>
                  <input
                    type="file"
                    name="photo"
                    multiple
                    accept="image/jpeg image/png"
                    onChange={hendlerFile}
                    className={style.fileInput}
                  />
                  <svg className={style.icon}>
                    <use href="#file"></use>
                  </svg>
                  Прикрепить фото
                </label>

                {errFile && <p className={style.errFile}>{errFile}</p>}

                {file && (
                  <ul>
                    {file.map((el, i) => (
                      <li key={i}>{el}</li>
                    ))}
                  </ul>
                )}
              </div>

              <button type="submit" className={style.submit}>
                отправить заявку
              </button>
            </form>
          </div>
        </Container>
      </header>

      <Footer first_row={false} />
    </>
  );
}

export default App;
