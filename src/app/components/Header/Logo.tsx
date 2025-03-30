import Link from "next/link";
import { Logo as LogoSvg } from "../Icons";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <LogoSvg className="w-32 h-32 mr-4 text-dark dark:text-[#9cf4a7]" />
    </Link>
  );
}
