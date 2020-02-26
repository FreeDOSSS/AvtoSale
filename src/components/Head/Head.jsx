import NextHead from "next/head";
import "./Head.scss";

const Head = ({ children }) => {
  return <NextHead>{children}</NextHead>;
};

export default Head;
