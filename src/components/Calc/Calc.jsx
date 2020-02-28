import React, { useState, useEffect } from "react";
import * as style from "./Calc.module.scss";
import Container from "../Container";
import sendTelegramPhoto from "./../../helpers/sendTelegramPhoto";
import sendTelegram from "./../../helpers/sendTelegramMes";
function Calc() {
  const [firma, setFirma] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [file, setFile] = useState(null);

  const [errFile, setErrFile] = useState(null);

  const hendlerForm = evt => {
    evt.preventDefault();

    const { target } = evt;

    const fields = [
      {
        name: "Марка",
        value: firma
      },
      {
        name: "Модель",
        value: model
      },
      {
        name: "Год выпуска",
        value: year
      },
      {
        name: "Пробег",
        value: km
      },
      {
        name: "Имя",
        value: name
      },
      {
        name: "Телефон",
        value: phone
      }
    ];

    const { files } = target.photo;
    if (!errFile) {
      sendTelegram(fields).then(res => {
        if (res === 200) {
          setFirma("");
          setPhone("");
          setName("");
          setKm("");
          setYear("");
          setModel("");
          setFile("");
          UIkit.notification({
            message:
              "<span uk-icon='icon: check'></span> Заявка успешно отправленна",
            status: "success",
            pos: "top-right",
            timeout: 5000
          });
          const notif = document.querySelector(".uk-notification-message");
          console.log("notif", notif);
          notif.style.background = "#141414";

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
    }
  };

  const hendlerFile = ({ target }) => {
    const files = Object.values(target.files);
    setErrFile(null);
    setFile(null);

    if (files.length > 10)
      return setErrFile(
        "Превишено максимально количество файлов. Максимально количество файлов 10"
      );

    // if (files.reduce((acc, el) => acc + el.size, 0) / 1048576 > 20)
    //   return setErrFile(
    //     "Превышено максимальный размер всех файлов. Максимальный размер файлов 20 мб."
    //   );

    const arr = [];
    for (const fileItem of files) {
      arr.push(fileItem.name);
    }

    setFile(arr);
  };

  return (
    <Container fluid={style.fluid}>
      <div className={style.wrapper}>
        <div className={style.calcWrp}>
          <form className={style.calc} onSubmit={hendlerForm}>
            <p className={style.title}>
              Оцените свой авто
              <span> за 10 минут</span>
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

            <div className={style.row}>
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
            </div>

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
        <div className={style.discription}>
          <h2 className={style.title}>
            почему стоит <span className={style.accent}> доверять продажу</span>{" "}
            вашего авто нам
          </h2>
          <div className={style.spacer}></div>
          <ul className={style.list}>
            <li>
              <svg className={style.icon}>
                <use href="#coin"></use>
              </svg>
              <p>Выкуп - максимально дорого</p>
            </li>

            <li>
              <svg className={style.icon}>
                <use href="#map"></use>
              </svg>
              <p>
                <span className={style.accent}>Бесплатный </span>выезд оценщика
              </p>
            </li>

            <li>
              <svg className={style.icon}>
                <use href="#deal"></use>
              </svg>
              <p>
                Оформление и заверение документов -{" "}
                <span className={style.accent}>бесплатно</span>
              </p>
            </li>

            <li>
              <svg className={style.icon}>
                <use href="#police"></use>
              </svg>
              <p>
                Снятие с учета в ГАИ -{" "}
                <span className={style.accent}>бесплатно</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Calc;
