import React from "react";
import * as style from "./Footer.module.scss";

import Container from "../components/Container";
import car from "../assets/images/car.png";

function Footer() {
  return (
    <Container>
      <div className={style.prefooter}>
        <div className="box-title">
          <p className="title">убедили?</p>
          <p className="subtitle">закажите просчет</p>
        </div>
        <div className="box-btn"></div>
        <div className="box-img">
          <img src={car} alt="Закажите просчет" />
        </div>
      </div>
    </Container>
  );
}

export default Footer;
