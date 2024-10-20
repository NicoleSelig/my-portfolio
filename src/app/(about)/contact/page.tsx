import { Metadata } from "next";
import { siteMetaData } from "../../utils/siteMetaData";
import ContactForm from "../../components/Contact/ContactForm";
import LottieAnimation from "../../components/Contact/LottieAnimation";

export const metadata: Metadata = {
    title: 'Contact Me',
    description: `Contact me through this form or email me at ${siteMetaData.email}`
}

export default function Contact() {
    return <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
        <div className=" w-2/5 flex flex-col justify-center h-full border-r-2 border-solid border-dark"><LottieAnimation/></div>
        <div className="w-3/5 flex flex-col justify-center px-16 pb-8">
            <h2 className="font-bold capitalize text-4xl text-center">Let&apos;s Connect!</h2>
            <p className="font-medium mt-4 text-base text-center">
                My inbox is always open. Whether you have a question or just want to say &quot;hi!&quot;, I’ll try my best to get back to you!
            </p>
            <ContactForm/>
        </div>
    </section>
}