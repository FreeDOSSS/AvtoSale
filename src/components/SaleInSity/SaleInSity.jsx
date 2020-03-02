import React from "react";

import * as style from "./SaleInSity.module.scss";
import Container from "../Container";

function SaleInSity({ city }) {
  return (
    <Container wrp={style.wrp}>
      <svg style={{ display: "none" }}>
        <symbol viewBox="0 0 24 24" id="check">
          <path d="M20 12.194v9.806h-20v-20h18.272l-1.951 2h-14.321v16h16v-5.768l2-2.038zm.904-10.027l-9.404 9.639-4.405-4.176-3.095 3.097 7.5 7.273 12.5-12.737-3.096-3.096z" />
        </symbol>
      </svg>
      <div className={style.left}>1</div>
      <div className={style.right}>
        <h2 className={style.title}>Выкуп авто в {city}</h2>
        <div className={style.spacer}></div>
        <p className={style.discription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi
          doloremque alias tempore eaque, laborum enim nemo eligendi suscipit et
          voluptatem asperiores repellat ipsa odit fugiat, voluptatum hic at
          iure.
        </p>

        <ul className={style.chekList}>
          <li className={style.item}>
            <svg className={style.icon}>
              <use href="#check"></use>
            </svg>
            В предельно сжатые сроки
          </li>
          <li className={style.item}>
            <svg className={style.icon}>
              <use href="#check"></use>
            </svg>
            за справедливую сумму
          </li>
        </ul>

        <div className="buttonWrp"></div>
      </div>
    </Container>
  );
}

export default SaleInSity;
