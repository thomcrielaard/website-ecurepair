import CookieBanner from "@/components/modules/CookieBanner";
import GoogleAnalytics from "@/components/modules/GoogleAnalytics";
import "@/styles/globals.css";
import "@/styles/pagination.css";
import Head from "next/head";

// export const API_URL = "https://strapi.ecurepair.nl";
export const API_URL = "http://127.0.0.1:1339";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/icon.png"
          preserveAspectRatio="xMidYMid meet"
        />
      </Head>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-LQZEPWRDLE" />
      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
}
