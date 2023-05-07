import Image from "next/image";
import Head from "next/head";

import UseDimensions from "@/services/UseDimensions";

import Container from "@/components/containers/Container";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Searchbar from "@/components/modules/Searchbar";
import BigBanner from "@/components/modules/BigBanner";
import ProductCards from "@/components/modules/ProductCards";
import ParallexBanner from "@/components/modules/ParallexBanner";
import ErrorCodes from "@/components/modules/ErrorCodes";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import Product1 from "@/assets/img/abs.jpg";
import Product2 from "@/assets/img/airbag.jpg";

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
              img: Product1,
            },
            {
              title: "P8645271",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend.",
              price: 199.99,
              href: "#",
              img: Product2,
            },
            {
              title: "P8645271",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend.",
              price: 199.99,
              href: "#",
              img: Product1,
            },
            {
              title: "P8645271",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend.",
              price: 199.99,
              href: "#",
              img: Product2,
            },
          ]}
          buttonText="ALLE MODELLEN"
          buttonLink="#"
          square
          button
          price
        />
      </Container>

      <ParallexBanner />

      <Container style={{ marginTop: "4rem" }}>
        <Title
          text="VEELVOORKOMENDE FOUTEN"
          size="lg"
          align="center"
          underline
        />
        <Text
          align="center"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend. Duis varius orci eget lacus hendrerit, rutrum pretium est laoreet. Sed tempor iaculis dolor."
          slim
        />
        <ErrorCodes />
      </Container>

      <Footer />
    </>
  );
}
