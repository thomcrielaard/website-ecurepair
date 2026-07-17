import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function TextLink(props) {
  return (
    <Link
      href={props.href}
      target={props.target}
      className={twMerge(
        "text-base font-normal transition-all duration-300 ease-in-out",
        props.className,
      )}
      style={props.style}
      onClick={props.onClick}
    >
      <div className="flex items-center gap-2">
        {props.bar && <div className="w-0.5 self-stretch bg-red" />}
        {props.text}
      </div>
    </Link>
  );
}
