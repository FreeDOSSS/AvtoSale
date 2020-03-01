import React from "react";
import Head from "./../components/Head";
import Menu from "../components/Menu/Menu";
import * as style from "./index.module.scss";

import Container from "../components/Container";
import LogoRow from "../components/LogoRow";
import About from "../components/About/About";

import logo from "./../assets/images/logo/logo_b.svg";
import clsx from "clsx";
import Footer from "./../components/Footer/Footer";
import BuyAvto from "./../components/BuyAvto/BuyAvto";
import Calc from "./../components/Calc";
import ReadyBuy from "../components/ReadyBuy";
import StepsBuy from "../components/StepsBuy/StepsBuy";

const App = () => {
  return (
    <>
      <Head>
        <title>AvtoSale</title>
      </Head>
      <header className={style.header}>
        <Menu />
        <LogoRow />
        <About />
      </header>

      <main className={style.main}>
        <ReadyBuy />
        <StepsBuy />
        <Calc />
        <Container>
          <h2>Тут сео текст</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cumque
            quos qui aliquam provident labore laborum quibusdam consectetur
            dignissimos fugit in. Impedit quibusdam ipsum similique voluptatem,
            cum ratione. Nemo maxime laboriosam repellendus ex itaque doloremque
            accusantium nam suscipit nostrum ipsum. Corrupti, est. Corporis
            accusamus doloribus tenetur maiores molestiae a ad perspiciatis
            assumenda eaque sequi quia praesentium expedita eius architecto sint
            debitis cum illum esse error soluta voluptas recusandae, alias iste?
            Quis voluptas aperiam illum enim quos veritatis quaerat tempore
            saepe aliquam facilis quisquam repellat beatae, numquam architecto?
            Ipsam asperiores porro nisi, illo dicta repellendus nostrum harum
            similique! Aut tempora nisi, reiciendis ex excepturi necessitatibus
            distinctio repellendus porro ipsam rem repellat corporis optio quas,
            nobis quibusdam ut consequatur iste veniam tempore maxime. In
            voluptatibus, delectus tempora voluptates distinctio recusandae
            atque sunt quo ipsum natus dolore reiciendis sint numquam
            consequatur iste. Earum, est quaerat ad dignissimos culpa cum
            necessitatibus asperiores, porro magni laudantium ipsum tempore,
            ducimus rerum! Est iusto doloribus fuga ea ipsam, officia nemo. Eum
            aspernatur ratione in, quo ex quae recusandae dolorem soluta
            consequuntur magni placeat, possimus nihil incidunt ad. Molestias
            fuga quod illo, nulla quam ipsum porro est at in repudiandae nobis,
            possimus minima eius eligendi aliquid pariatur. Fuga corrupti ab,
            minus facere repudiandae temporibus fugit libero odit vel assumenda
            voluptates ullam iusto atque officiis tempore, recusandae, velit
            veritatis. Suscipit fugiat enim, incidunt quam error quasi sequi
            neque sapiente quae nesciunt vero modi quaerat blanditiis deserunt
            culpa commodi autem sed temporibus in cum voluptatibus! Deleniti
            assumenda, voluptatem illum ut, quae quibusdam qui doloribus autem
            quasi quidem in accusamus! Architecto, iure quos eveniet illo eos
            sequi perferendis cupiditate nostrum. Animi, vero non tempora cumque
            nostrum explicabo quia sed et at rerum natus, earum tempore, enim
            quos quae doloribus! Accusantium a sapiente veniam facilis enim
            tenetur tempora pariatur dignissimos nam quod natus inventore,
            labore at non aspernatur soluta qui? Error ducimus optio veritatis,
            quas ut dolore eius ab quisquam reiciendis similique reprehenderit
            voluptates rerum pariatur nobis commodi aut quos sit corporis id
            natus nihil dolor inventore! Nostrum, accusamus veritatis? Culpa
            animi neque nobis modi aliquam obcaecati laborum temporibus dolorem
            aperiam, inventore ea iusto nam quisquam beatae dolorum, asperiores
            ipsum quod tenetur impedit? Odit facilis cupiditate quod, unde
            minima repellat pariatur ex maxime nostrum, ut error sit? Rem
            pariatur nobis repellendus iusto quas culpa quo, ad sequi a ratione.
            Obcaecati et consequuntur sapiente aliquam itaque aspernatur!
            Repellat iure soluta perferendis a quibusdam quisquam accusamus,
            ipsam reiciendis, voluptas ut alias neque dolores cum nesciunt
            earum? Earum expedita vitae ullam incidunt consequuntur. Vel ut
            provident dicta obcaecati, quod quidem cupiditate nemo consequuntur.
            Enim, repellendus cupiditate aliquam commodi rem quas incidunt
            suscipit! Hic voluptates vel consectetur quo optio perspiciatis
            molestiae error rerum doloremque incidunt, deserunt saepe reiciendis
            laboriosam sit quidem aspernatur, explicabo ullam. Expedita, dolor
            eligendi numquam ipsa assumenda pariatur. Accusantium commodi et eos
            laboriosam iste impedit itaque ipsa aliquam unde officia dolores,
            esse voluptatum rem omnis vel, magnam quisquam? Tempora blanditiis
            ducimus repudiandae unde voluptate explicabo fuga in ad, natus
            cupiditate corrupti officia ex?
          </p>
        </Container>
        <BuyAvto />
      </main>
      <Footer />
    </>
  );
};

export default App;
