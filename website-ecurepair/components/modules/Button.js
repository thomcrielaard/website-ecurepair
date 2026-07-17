import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Button(props) {
  const className = twMerge(
    `hover w-fit border border-white text-white text-center font-[family-name:poppins] font-medium text-base transition-all duration-300 ease-in-out ${
      props.small
        ? "px-4 py-1.5 text-xs tracking-[2px]"
        : "px-6 py-2.5 tracking-[3px] md:tracking-[5px]"
    }`,
    props.className,
  );

  return props.isButton ? (
    <button
      type={props.type}
      className={className}
      style={props.style}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  ) : (
    <Link
      href={props.href ?? ""}
      className={className}
      style={props.style}
      scroll={props.scroll ?? true}
      target={props.target}
    >
      {props.text}
    </Link>
  );
}
