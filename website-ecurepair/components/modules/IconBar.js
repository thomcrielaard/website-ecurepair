import * as React from "react";

import Colors from "@/styles/Colors";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import { FaLightbulb, FaMagnifyingGlass, FaStar } from "react-icons/fa6";

export default function IconBar() {
  return (
    <div className="flex justify-between flex-col items-center gap-4 sm:gap-8 sm:items-start sm:flex-row p-5 lg:px-20 lg:py-5 shadow-lg">
      <Icon
        icon={<FaLightbulb className="text-red" size={18} />}
        title="Innovatief"
        text="Altijd voorop in technologie"
      />

      <hr className="border-0 h-px w-full bg-neutral-200 sm:hidden" />
      <Icon
        icon={<FaMagnifyingGlass className="text-red" size={20} />}
        title="Precisie"
        text="Wij kijken naar elk detail"
      />
      <hr className="border-0 h-px w-full bg-neutral-200 sm:hidden" />
      <Icon
        icon={<FaStar className="text-red" size={22} />}
        title="Kwaliteit"
        text="Service van topklasse"
      />
    </div>
  );
}

// TODO: Remove !'s once title and text support tailwind
function Icon(props) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-full border-2 border-red text-red">
        {props.icon}
      </div>
      <div>
        <Title
          size="xs"
          text={props.title}
          className="!text-center sm:!text-left"
        />
        <Text
          text={props.text}
          className="m-0 !text-center sm:!text-left"
          color={Colors.LIGHTGRAY}
          fontSize={16}
        />
      </div>
    </div>
  );
}
