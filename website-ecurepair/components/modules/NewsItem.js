import * as React from "react";
import { API_URL } from "@/pages/_app";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BlurDataUrl } from "@/services/BlurDataUrl";

import Breakpoints from "@/styles/Breakpoints";

import Image from "next/image";

export default function NewsItem(props) {
  return (
    <div className="flex justify-center">
      <div className="news-content flex max-w-250 flex-col gap-5 md:gap-10">
        {props.item.bericht.map((content, key) => (
          <div key={key}>
            {content.text != undefined ? (
              <ReactMarkdown>{content.text}</ReactMarkdown>
            ) : (
              <div className="relative aspect-[5/3] w-full max-w-200">
                <Image
                  src={API_URL + content.afbeelding.url}
                  alt={props.item.titel}
                  className="object-cover"
                  fill
                  sizes={`(min-width: ${Breakpoints.md}) 33vw, (min-width: ${Breakpoints.xs}) 85vw, 95vw`}
                  placeholder="blur"
                  blurDataURL={BlurDataUrl}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
