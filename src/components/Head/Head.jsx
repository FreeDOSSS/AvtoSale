import NextHead from "next/head";
import "./Head.scss";
import "./../../helpers/style.css";

const Head = ({ children }) => {
  return <NextHead>{children}</NextHead>;
};

export default Head;
