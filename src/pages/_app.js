import "./../helpers/style.scss";
import { useEffect } from "react";
import { initGA, logPageView } from "../helpers/ga";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
