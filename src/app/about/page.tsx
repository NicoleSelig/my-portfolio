import Link from "next/link";
import AboutCoverSection from "../components/About/AboutCoverSection";
import Skills from "../components/About/Skills";

export default function About() {
    return(
        <>
        <AboutCoverSection/>
        <Skills/>
        <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-dark">
            Have a question? Reach out from <Link href='/contact' className="!underline underline-offset-2">here</Link> and let's make it happen!
        </h2>
        </>
    )
}