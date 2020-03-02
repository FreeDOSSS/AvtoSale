import React from "react";

import * as style from "./Article.module.scss";
import Container from "./../Container";

function Article({ children }) {
  return (
    <Container wrp={style.wrp}>
      <article className={style.article}>{children}</article>
    </Container>
  );
}

export default Article;
