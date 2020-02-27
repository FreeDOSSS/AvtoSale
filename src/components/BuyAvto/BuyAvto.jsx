import React from "react";
import clsx from "clsx";

import * as style from "./BuyAvto.module.scss";
import Container from "../Container";

// Foto
import infinity from "./../../assets/images/car/infinity.jpg";
import hunday from "./../../assets/images/car/hunday.jpg";
import lexus from "./../../assets/images/car/lexus.jpg";
import mazda from "./../../assets/images/car/mazda.jpg";
import mersedes from "./../../assets/images/car/mersedes.jpg";
import nisan from "./../../assets/images/car/nisan.jpg";
import tuareg from "./../../assets/images/car/tuareg.jpg";
// ======

function BuyAvto() {
  const arrAvto = [
    {
      img: hunday,
      model: "Hyundai Sonata",
      price: "7 900",
      year: "2008",
      engine: "2 000",
      trans: "Автомат",
      km: "115 000",
      city: "Киев"
    },
    {
      img: infinity,
      model: "Infiniti fx 35",
      price: "11 300",
      year: "2005",
      engine: "3 500",
      trans: "Автомат",
      km: "120 000",
      city: "Киев"
    },
    {
      img: mazda,
      model: "Mazda cx9",
      price: "12 400",
      year: "2009",
      engine: "3 700",
      trans: "Автомат",
      km: "140 000",
      city: "Киев"
    },
    {
      img: mersedes,
      model: "Mercedes benz e200",
      price: "9 300",
      year: "2007",
      engine: "1 800",
      trans: "Автомат",
      km: "134 000",
      city: "Киев"
    },
    {
      img: tuareg,
      model: "Volksvagen Toureg",
      price: "10 700",
      year: "2006",
      engine: "3 600",
      trans: "Автомат",
      km: "160 000",
      city: "Киев"
    },
    {
      img: nisan,
      model: "Nissan X Trail",
      price: "9 700",
      year: "2008",
      engine: "2 000",
      trans: "Автомат",
      km: "132 000",
      city: "Киев"
    },
    {
      img: lexus,
      model: "Lexus RX350",
      price: "13 800",
      year: "2008",
      engine: "3 500",
      trans: "Автомат",
      km: "117 000",
      city: "Киев"
    }
  ];

  return (
    <div uk-slider="finite: true" className={style.wrapper}>
      <Container>
        <div className={style.box}>
          <h2 className={style.sectionTitle}>ВЫКУПЛЕННЫЕ АВТОМОБИЛИ</h2>
          <div className={style.spacer}></div>
          <div className="uk-slider-container">
            <div className="uk-position-relative uk-visible-toggle ">
              <ul
                className={clsx(style.slider, "uk-slider-items  ")}
                uk-grid=""
              >
                {arrAvto.map((el, i) => (
                  <li key={i + "a"}>
                    <div className={style.card}>
                      <div className={style.imgWrp}>
                        <img src={el.img} alt="avto" height="100" />
                        <div className={style.price}>
                          <p className={style.fon}>{el.price} $</p>
                        </div>
                      </div>
                      <p className={style.title}>{el.model}</p>
                      <div className={style.tableWrp}>
                        <table>
                          <tbody>
                            <tr>
                              <td>Год выпуска:</td>
                              <td>{el.year}</td>
                            </tr>
                            <tr>
                              <td>Объем двигателя:</td>
                              <td>
                                {el.engine} см<sup>3</sup>
                              </td>
                            </tr>
                            <tr>
                              <td>Каробка передач:</td>
                              <td>{el.trans}</td>
                            </tr>
                            <tr>
                              <td>Пробег:</td>
                              <td>{el.km} км</td>
                            </tr>
                            <tr>
                              <td>Город:</td>
                              <td>{el.city}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Container fluid={style.controlWrp}>
        <div className={style.control}>
          <div className={style.btnWrp}>
            <button
              type="button"
              uk-slider-item="previous"
              uk-icon="icon: chevron-left"
              className={style.sliderControl}
            >
              {" "}
            </button>
            <button
              type="button"
              uk-slider-item="next"
              uk-icon="icon: chevron-right"
              className={style.sliderControl}
            >
              {" "}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BuyAvto;
