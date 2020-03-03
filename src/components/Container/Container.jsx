import React from "react";
import styled from "styled-components";

const Fluid = styled.section`
  width: 100%;
`;

const Wrp = styled.div`
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
  width: 300px;
  @media (min-width: 748px) {
    width: 728px;
  }

  @media (min-width: 1200px) {
    min-width: 1180px;
    width: 65%;
  }
`;

function Container({ fluid, children, wrp }) {
  return (
    <Fluid className={fluid}>
      <Wrp className={wrp}>{children}</Wrp>
    </Fluid>
    // <section className={fluid}>
    //   <div className={clsx(styles.conteiner, wrp ? wrp : null)}>{children}</div>
    // </section>
  );
}

export default Container;
