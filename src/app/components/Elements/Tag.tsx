import Link from "next/link";
import { addClasses } from "../../utils";

type tagProps = {
  link: string;
  name: string;
  props?: {
    className: string | undefined;
  };
};

export default function tag({ link = "#", name, props }: tagProps) {
  return (
    <Link
      href={link}
      className={addClasses(
        "inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border-solid border-light border-2 hover:scale-105 transition-all ease duration-200",
        props?.className || ""
      )}
    >
      {name}
    </Link>
  );
}
