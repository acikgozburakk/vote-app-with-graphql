import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/src/store/store";
import type { AppProps } from "next/app";

import Head from "next/head";

import Header from "@/src/components/common/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
