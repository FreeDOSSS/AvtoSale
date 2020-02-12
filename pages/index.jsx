import React from "react";
import Link from "next/link";
import NextHead from "next/head";
import styles from "./index.module.scss";

const App = () => {
  return (
    <>
      <NextHead>
        <title>Page</title>
      </NextHead>
      <div className={styles.bg}>
        <h1>Hello, from Home page</h1>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <br />
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </div>
    </>
  );
};

export default App;
