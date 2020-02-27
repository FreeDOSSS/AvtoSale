import React, { useState } from "react";
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
    sendTelegram(fields).then(res => {
      if (res === 200) {
        for (const input of target.photo.files) {
          const data = new FormData();
          data.append(`photo`, input);
          sendTelegramPhoto(data);
        }
      }
    });
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
    const arr = [];
    for (let i = 0; i < target.files.length; i += 1) {
      arr.push(target.files[i].name);
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
              <input
                type="file"
                name="photo"
                multiple
                accept="image/jpeg image/png"
                onChange={hendlerFile}
              />
              {file && (
                <ul>
                  {file.map(el => (
                    <li>{el}</li>
                  ))}
                </ul>
              )}
            </div>

            <button type="submit" className={style.submit}>
              отправить заявку
            </button>
          </form>
        </div>
        <div className={style.discription}></div>
      </div>
    </Container>
  );
}

export default Calc;
