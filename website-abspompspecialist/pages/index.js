import Image from "next/image";
import Head from "next/head";

import UseDimensions from "@/services/UseDimensions";

import Container from "@/components/containers/Container";

import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

import Searchbar from "@/components/modules/Searchbar";
import BigBanner from "@/components/modules/BigBanner";
import ProductCards from "@/components/modules/ProductCards";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import TestImg from "@/assets/img/header-home.jpg";

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

      <Container>
        <Title text="VIND JOUW MODEL" size="lg" align="center" />
        <Text
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend. Duis varius orci eget lacus hendrerit, rutrum pretium est laoreet. Sed tempor iaculis dolor."
          align="center"
          slim
        />
        <Searchbar />
        <ProductCards
          items={[
            {
              title: "P8645271",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend.",
              price: 199.99,
              href: "#",
              img: TestImg,
            },
            {
              title: "P8645271",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend.",
              price: 199.99,
              href: "#",
              img: TestImg,
            },
            {
              title: "P8645271",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend.",
              price: 199.99,
              href: "#",
              img: TestImg,
            },
            {
              title: "P8645271",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend.",
              price: 199.99,
              href: "#",
              img: TestImg,
            },
          ]}
          square
          button
          price
        />
      </Container>

      {/* <Footer /> */}
    </>
  );
}
