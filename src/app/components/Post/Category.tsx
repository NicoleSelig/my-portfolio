import Link from "next/link";
import { addClasses } from "../../utils";

type CategoryProps = {
  link: string;
  name: string;
  active: boolean;
  props?: {
    className: string;
  };
};

export default function Category({
  link = "#",
  name,
  active,
  props,
}: CategoryProps) {
  return (
    <Link
      href={link}
      className={addClasses(
        "inline-block py2 px-10 rounded-full font-full border-2 border-solid border-dark hover:scale-105 transition-all ease duration-200 m-2",
        props?.className || "",
        active ? "bg-dark text-light" : "bg-light text-dark"
      )}
    >
      {name}
    </Link>
  );
}
