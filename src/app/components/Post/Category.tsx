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
        "inline-block py-2 px-4 sm:px-6 md:px-10 rounded-full text-sm sm:text-base font-semibold border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-1 sm:m-2",
        props?.className || "",
        active
          ? "bg-dark text-light dark:bg-light dark:text-dark"
          : "bg-light text-dark dark:bg-dark dark:text-light"
      )}
    >
      {name}
    </Link>
  );
}
