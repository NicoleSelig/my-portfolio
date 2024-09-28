import Image from 'next/image'
import profileCharacter from '@/public/profile-character.png'

export default function AboutCoverSection() {
    return (
        <section className="section className='w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
            <div className='w-1/2 h-full border-r-2 border-solid border-dark flex justify'>
                <Image src={profileCharacter} alt="Nicole Selig"
                className='w-full h-full object-contain object-center'/>
            </div>
            <div className='w-1/2 flex flex-col text-left items-start justify-center px-16'>
                <h2 className='font-bold capitalize text-6xl'>
                    Dream Big, Work Hard, Achieve More!
                </h2>
                <p className='font-medium capitalize mt-4 text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt odio fuga, ullam tenetur exercitationem doloribus itaque aliquid provident doloremque cumque! Eveniet ipsa eius iste iure? Earum, illum! Illum, explicabo veniam?
                </p>
            </div>
        </section>
    )
}