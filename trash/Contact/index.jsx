import * as style from "./style.scss";

import React, { useState } from "react";
import { fb, phone, youtube } from "../../src/constants/constants";

import Article from "../../src/components/Article";
import BuyAvto from "../../src/components/BuyAvto";
import Container from "../../src/components/Container";
import Footer from "../../src/components/Footer";
import Head from "next/head";
import LogoRow from "../../src/components/LogoRow";
import Menu from "../../src/components/Menu";
import sendTelegram from "../../src/helpers/sendTelegramMes";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const hendlerInput = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "message":
        setMessage(value);
        break;
    }
  };

  const hendlerForm = event => {
    event.preventDefault();

    const send = [
      {
        name: "Имя",
        value: name
      },
      {
        name: "Телефон",
        value: number
      }
    ];

    if (message) send.push({ name: "Сообщение", value: message });

    sendTelegram(send).then(res => {
      if (res === 200) {
        UIkit.modal.dialog(
          `<h2 style="padding: 10px; text-align: center ">Заявка успешно отправлена!</h2><div class="uk-modal-footer uk-text-right"> <button class="uk-button ${style.button} uk-modal-close" autofocus="">Ok</button> </div> `
        );
        setName("");
        setNumber("");
        setMessage("");
      }
    });
  };

  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      <header className={style.header}>
        <Menu />
        <LogoRow />
        <Container>
          <div className={style.contactWrp}>
            <div className={style.formWrp} onSubmit={hendlerForm}>
              <form className={style.form}>
                <h2 className={style.title}>Есть вопросы?</h2>
                <h2 className={style.subtitle}>Напиши нам</h2>
                <input
                  className={style.field}
                  type="text"
                  name="name"
                  onChange={hendlerInput}
                  placeholder="Ваше имя"
                  required
                  value={name}
                />
                <input
                  className={style.field}
                  type="text"
                  name="number"
                  onChange={hendlerInput}
                  required
                  value={number}
                  placeholder="Ваш телефон"
                />
                <textarea
                  name="message"
                  value={message}
                  onChange={hendlerInput}
                  className={style.field}
                  placeholder="Вы можете оставить сообщение..."
                  cols="30"
                  rows="10"
                ></textarea>

                <button type="submit" className={style.submit}>
                  отправить
                </button>
              </form>
            </div>
            <div className={style.contact}>
              <h2 className={style.title}>Контакты</h2>
              <ul className={style.list}>
                <li className={style.item}>
                  <a
                    className={style.link}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                  >
                    <span uk-icon="phone">{""}</span>
                    {phone}
                  </a>
                </li>
                <li className={style.item}>
                  <a href={fb} className={style.link}>
                    <span uk-icon="facebook">{""}</span>
                    Facebook
                  </a>
                </li>
                <li className={style.item}>
                  <a href={youtube} className={style.link}>
                    <span uk-icon="youtube">{""}</span>
                    YouTube
                  </a>
                </li>
                <li className={style.item}>
                  <a href="" className={style.link}>
                    <span uk-icon="mail">{""}</span>
                    почта@обман.да
                  </a>
                </li>
              </ul>
            </div>
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
