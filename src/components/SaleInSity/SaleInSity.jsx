import React from "react";

import * as style from "./SaleInSity.module.scss";
import Container from "../Container";

function SaleInSity({ city }) {
  return (
    <Container wrp={style.wrp}>
      <div className={style.left}>1</div>
      <div className={style.right}>
        <h2 className={style.title}>Выкуп авто в {city}</h2>
      </div>
    </Container>
  );
}

export default SaleInSity;
