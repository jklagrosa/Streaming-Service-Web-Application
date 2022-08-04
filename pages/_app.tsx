import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import store from "../store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Streaming Service Web Application</title>
        <meta
          name="description"
          content="Pelikula is a streaming service web application I built as part of my portfolio. If you want to try this web application, you can login as a demo user. To be redirected to the login page, click the login button, and then click the Login as demo user button."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Provider store={store}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default MyApp;
