import { GlobalContainer, Section, Wrp } from "./style";

import React from "react";

function Container({ fluid, children, wrp }) {
  return (
    <>
      <GlobalContainer />
      <section className={fluid}>
        <div className={`container ${wrp}`}>{children}</div>
      </section>
    </>
  );
}

export default Container;

/* <Wrp className={wrp}>{children}</Wrp> */
