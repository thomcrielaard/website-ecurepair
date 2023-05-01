import Image from "next/image";
import Head from "next/head";

import UseDimensions from "@/services/UseDimensions";

import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

import BigBanner from "@/components/modules/BigBanner";
import Logo from "@/assets/svg/Logo";

export default function Home() {
  const size = UseDimensions();

  return (
    <>
      <Head>
        <title>ABS &#8211; Home</title>
        <meta name="description" content="" />
      </Head>

      <Navbar />

      <BigBanner />

      {/* <Footer /> */}
    </>
  );
}
