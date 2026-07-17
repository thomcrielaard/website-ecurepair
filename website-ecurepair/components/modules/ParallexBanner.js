import * as React from "react";
import Image from "next/image";

import Container from "@/components/containers/Container";

import Text from "@/components/text/Text";
import Title from "@/components/text/Title";

import Button from "@/components/modules/Button";

export default function ParallaxBanner(props) {
  return (
    <>
      <div className="relative [clip-path:polygon(0_0,50%_30px,100%_0,100%_calc(100%-30px),50%_100%,0_calc(100%-30px))] lg:[clip-path:polygon(0_0,50%_65px,100%_0,100%_calc(100%-65px),50%_100%,0_calc(100%-65px))]">
        <div className="absolute z-0 h-full w-full bg-black/62" />
        <Image
          className="-z-10 object-cover"
          src={props.image}
          alt={"Banner"}
          placeholder="blur"
          sizes="100vw"
          fill
        />

        <Container paddingVert={0} className="relative z-1">
          <div className="flex flex-col items-center justify-center gap-5 pt-20 pb-16.25 lg:pt-33.75">
            <Title
              text={props.title}
              className="text-white"
              size="xl"
              align="center"
            />

            <Text className="text-white" align="center" slim>
              {props.children ?? props.text}
            </Text>

            <Button
              text={props.buttonText}
              className="bg-white text-gray hover:text-red"
              href={props.buttonLink}
              target={props.target}
            />
          </div>
        </Container>
      </div>
    </>
  );
}
