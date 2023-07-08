import "@/styles/globals.css";
import "@/styles/pagination.css";
import Head from "next/head";

export const API_URL = "https://strapi.abspompspecialist.nl";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
