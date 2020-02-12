import NextHead from "next/head";
import "../../helpers/style.scss";

const Head = ({ children }) => {
  return <NextHead>{children}</NextHead>;
};

export default Head;
