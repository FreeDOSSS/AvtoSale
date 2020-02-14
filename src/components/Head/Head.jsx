import NextHead from "next/head";
import "./Head.scss";
const Head = ({ children }) => {
  return (
    <NextHead>
      {children}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.3.1/css/uikit.min.css"
      />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.3.1/js/uikit.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.3.1/js/uikit-icons.min.js"></script>
    </NextHead>
  );
};

export default Head;
