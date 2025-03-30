import Link from "next/link";
import { addClasses } from "../../utils";

type tagProps = {
  link?: string;
  name: string;
  props?: {
    className?: string;
  };
};

export default function tag({ link = "#", name, props }: tagProps) {
  return (
    <Link
      href={link}
      className={addClasses(
        "inline-block py-3 px-10 bg-surface text-light rounded-full capitalize font-semibold border-solid border-surfaceHover border-2 hover:bg-surfaceHover hover:text-accent transition-all ease duration-200",
        props?.className || ""
      )}
    >
      {name}
    </Link>
  );
}
