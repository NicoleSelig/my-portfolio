import Link from "next/link";
import { Logo as LogoSvg } from "../Icons";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <LogoSvg className="w-32 h-32 mr-4" />
    </Link>
  );
}
