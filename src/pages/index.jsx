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
import Article from "../components/Article/Article";

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
            deleniti? Ut quam saepe iure similique nobis vero quod ratione!
            Rerum harum repudiandae mollitia unde eveniet, laboriosam repellat.
            Ipsam sunt adipisci voluptatum. Esse obcaecati aperiam repudiandae
            atque non maxime libero architecto molestiae quidem accusamus
            doloribus consectetur quaerat voluptatum nam, impedit beatae, quia,
            tenetur maiores? Doloremque deserunt ipsa corrupti velit enim, id,
            fugiat provident placeat magni ut quibusdam dolor voluptate illo
            impedit nam error ratione distinctio. Sapiente, qui itaque dolores
            quos, sint, voluptatum modi velit quidem optio eveniet voluptate
            nulla vitae earum! Nesciunt commodi asperiores quas reprehenderit
            dolore placeat ab minus harum accusantium eum exercitationem,
            dolorem magnam obcaecati. Tenetur vel ex animi, labore natus
            voluptatibus, cum non error sapiente beatae blanditiis temporibus
            quod alias aut laborum quam dignissimos obcaecati ullam. Repellat
            fugiat nobis suscipit non? Illum labore nam placeat sint aperiam
            magnam maxime tempore perferendis eos beatae. Assumenda illo nobis
            commodi repellendus quas unde officia incidunt quo laborum ex
            aliquid recusandae officiis eveniet adipisci eligendi maiores
            explicabo, ratione illum doloremque corrupti itaque. Excepturi earum
            architecto, accusamus impedit inventore exercitationem quia incidunt
            autem aliquam quam ullam consectetur nulla ipsum tenetur porro at
            reprehenderit laboriosam saepe velit quod quisquam rem cum
            consequuntur necessitatibus! Voluptatum similique eos ab excepturi
            atque sunt facilis consectetur accusamus nobis exercitationem.
            Voluptatum, odit minima. Nobis excepturi sapiente id, debitis
            quibusdam aperiam nostrum. Consequuntur culpa nihil, molestias
            soluta nisi voluptatibus quo placeat architecto corrupti
            necessitatibus accusamus assumenda natus quidem quam, perspiciatis
            fugit quas similique reprehenderit rem, aut cumque odio velit harum
            et? Sequi praesentium in rerum autem maiores neque dolorem obcaecati
            repudiandae ipsam maxime similique necessitatibus assumenda
            provident veritatis nobis natus officiis, doloremque ullam atque
            asperiores nihil fugiat beatae! Recusandae accusamus iste
            consequuntur expedita numquam provident iure, aliquid corporis
            beatae ipsam, similique maiores distinctio, suscipit quo eos? Minima
            in ab ea aspernatur id voluptatem. Blanditiis praesentium saepe
            aliquid inventore repellat iure, eligendi aut, laudantium
            voluptatibus dolores nostrum. Assumenda dignissimos corrupti eaque
            voluptatibus quibusdam cumque perferendis libero iure itaque
            voluptatum. Maxime unde cumque, error tempore dolore possimus ea
            veritatis incidunt culpa nobis blanditiis natus, alias pariatur.
            Molestias perferendis, excepturi fugit incidunt nam sequi quis,
            libero eos ipsum eius officia iusto. Laboriosam quasi rerum
            voluptatem aliquam deserunt cupiditate, nihil hic possimus
            asperiores, ducimus voluptates sed eveniet molestias aut obcaecati
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
};

export default App;
