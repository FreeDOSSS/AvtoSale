import React from "react";
import * as styles from "./Container.scss";

function Container({ fluid, children }) {
  return (
    <section className={fluid}>
      <div className={styles.conteiner}>{children}</div>
    </section>
  );
}

export default Container;
