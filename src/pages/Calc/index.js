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

function App() {
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
          UIkit.modal.dialog(
            `<h2 style="padding: 10px; text-align: center ">Заявка успешно отправленна!</h2><div class="uk-modal-footer uk-text-right"> <button class="uk-button ${style.button} uk-modal-close" autofocus="">Ok</button> </div> `
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

    const arr = [];
    for (const fileItem of files) {
      arr.push(fileItem.name);
    }

    setFile(arr);
  };

  return (
    <>
      <Head>
        <title>Калькулятор</title>
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

              {/* <div className={style.row}> */}
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
              {/* </div> */}

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
        </Container>
      </header>

      <main>
        <Article>
          <h1>H1 Lorem, ipsum.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat
            dolore similique maxime ipsa, a quam hic, magni ad deleniti
            suscipit, inventore neque voluptate? Veritatis voluptatum explicabo
            nemo dolor tenetur eos velit omnis facilis inventore? Facere, quis
            veniam, accusantium quae omnis deleniti ea alias dignissimos
            molestias sit aperiam sunt nobis laborum. Voluptate, mollitia
            repudiandae velit ipsam sed minus cupiditate soluta sequi nam a
            officia temporibus dolor culpa nesciunt officiis! Nisi
            exercitationem nostrum a, architecto asperiores vitae sequi fugit
            hic nesciunt commodi accusantium officia, et possimus, consectetur
            modi magnam tempora autem nam magni a, laborum exercitationem
            distinctio facere? Fuga inventore molestiae iste vel similique eum
            necessitatibus, autem earum ipsam ratione debitis vitae sequi
            asperiores molestias sunt animi cumque. Consequuntur sit temporibus
            consequatur ipsam omnis illum ratione sapiente officia maiores,
            possimus nostrum placeat, voluptate quis, odio labore alias numquam
            quo. Consectetur cumque, perferendis qui iste accusantium at
            sapiente error animi reiciendis amet, sunt alias facere dicta
            quaerat aperiam, nobis commodi voluptas sequi fuga. Sapiente id ex
            amet est ipsa eius dolorem aperiam sit aliquid unde, molestiae,
            laboriosam minima. Beatae consectetur officiis aliquid aliquam iusto
          </p>

          <h2> H2 Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            omnis nam repudiandae debitis, deserunt veniam perspiciatis ducimus
            sint dignissimos neque repellendus commodi eaque quae explicabo hic
            consequatur accusantium! Aperiam nostrum blanditiis alias autem odio
            repudiandae! Numquam quos magnam voluptatum consequatur officia
            ipsam blanditiis! Autem, in ipsa. Impedit, pariatur laborum sit
            provident doloremque accusamus vitae, vero modi a molestiae vel aut
            dolore ullam consequuntur ipsum. Optio odit laudantium, ipsam sunt
            necessitatibus excepturi quo rerum placeat praesentium sint ipsum.
            Totam, nihil tempore? Dolore molestias omnis illo voluptates!
            Reiciendis animi accusantium ipsam facilis provident architecto ipsa
            perferendis corporis ratione at perspiciatis quidem sed magni,
            accusamus facere quibusdam, ex rerum sit eaque tempore numquam
            reprehenderit neque ad! Architecto in hic iure amet quam culpa
            deserunt impedit. Deserunt, consequatur! Officia debitis impedit
            voluptatibus voluptates autem dolor dolore possimus, molestias error
            eveniet assumenda! Incidunt est veritatis asperiores nobis dolorum,
            iusto fuga magnam? Quam blanditiis eius quaerat nesciunt, eligendi
            repellendus quas minima ipsam vero nihil error! Expedita, aut.
            Distinctio odio alias consequatur mollitia facilis earum sunt
            maiores voluptatem aliquam placeat. Ut, assumenda eius praesentium
            tenetur in explicabo quaerat quod perferendis minima accusamus
            laborum nostrum a soluta pariatur commodi. Porro incidunt sunt, ipsa
            doloremque quod neque ipsum veritatis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            nobis recusandae hic, eos temporibus ipsam! Repellendus beatae nulla
            culpa sequi, nisi, laudantium deserunt quas porro, hic repellat
            animi nesciunt corporis assumenda minus placeat corrupti! Vel, magni
            cupiditate eveniet, autem excepturi quaerat quia repellendus
            laboriosam inventore saepe aliquam impedit aperiam molestias totam
            aliquid obcaecati illum nulla doloremque officia sit enim eligendi
            voluptates. Architecto amet asperiores neque delectus quas
            dignissimos beatae quo placeat, minima animi nam, consequatur omnis
            rem, reiciendis ipsum sit? Mollitia eius cum iste? Cupiditate, iure
            voluptas, aperiam tempora, nulla fugiat possimus atque officiis
            minus dolor accusamus suscipit eos laudantium!
          </p>
          <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
          <h3>H3 Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            consequuntur! Fuga itaque necessitatibus ipsa labore ullam aliquam,
            dolorem ea placeat eligendi, autem beatae aspernatur tenetur totam
            vel nobis sapiente quasi?
          </p>
        </Article>
        <BuyAvto />
      </main>
      <Footer />
    </>
  );
}

export default App;
