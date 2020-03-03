import * as style from "./Article.module.scss";

import Container from "./../Container";
import React from "react";

function Article({ children }) {
  return (
    <Container wrp={style.wrp}>
      <article className={style.article}>{children}</article>
    </Container>
  );
}

export default Article;
