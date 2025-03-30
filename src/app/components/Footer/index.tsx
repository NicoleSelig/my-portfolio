import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">
        <span className="text-center">&copy;2023 Nicole Selig. All rights reserved.</span>
        <Link href="/sitemap.xml" className="text-center underline">sitemap.xml</Link>
        <a href="https://lordicon.com/">Icons by Lordicon.com</a>
    </footer>
  );
}
