import React from "react";
import * as styles from "./Container.scss";

function Container({ fluid, children }) {
  return (
    <div className={fluid}>
      <div className={styles.conteiner}>{children}</div>
    </div>
  );
}

export default Container;
