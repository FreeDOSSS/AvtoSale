import React from "react";

import Container from "./../Container";
import * as style from "./StepsBuy.module.scss";

function StepsBuy() {
  return (
    <Container fluid={style.fon}>
      <h2 className={style.title}>Выкуп авто в киеве</h2>
      <h3 className={style.subtitle}>схема выкупа автомобиля</h3>
      <div className="spacer"></div>
      <div className={style.steps}>
        <div className={style.step}>1</div>
        <div className={style.step}>2</div>
        <div className={style.step}>3</div>
        <div className={style.step}>4</div>
      </div>
    </Container>
  );
}

export default StepsBuy;
