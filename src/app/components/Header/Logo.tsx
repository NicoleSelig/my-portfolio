import Link from "next/link";
import { Logo as LogoSvg } from "../Icons";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center h-20">
      <LogoSvg className="w-full h-auto text-dark dark:text-[#9cf4a7]" />
    </Link>
  );
}
