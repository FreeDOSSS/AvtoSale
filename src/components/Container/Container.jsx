import React from "react";
import * as styles from "./Container.scss";
import clsx from "clsx";

function Container({ fluid, children, wrp }) {
  return (
    <section className={fluid}>
      <div className={clsx(styles.conteiner, wrp)}>{children}</div>
    </section>
  );
}

export default Container;
