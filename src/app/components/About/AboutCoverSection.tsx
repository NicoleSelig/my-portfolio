import Image from 'next/image'
import profileCharacter from '@/public/profile-character.png'
import Link from 'next/link'

export default function AboutCoverSection() {
    const startYear = 2021
    const thisYear = new Date().getFullYear()
    return (
        <section className="section className='w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
            <div className='w-1/2 h-full border-r-2 border-solid border-dark flex justify'>
                <Image src={profileCharacter} alt="Nicole Selig"
                className='w-full h-full object-contain object-center'/>
            </div>
            <div className='w-1/2 flex flex-col text-left items-start justify-center px-16'>
                <h2 className='font-bold capitalize text-6xl'>
                    Hey There!
                </h2>
                <h2 className='font-bold capitalize text-6xl'>
                    I&apos;m Nicole.
                </h2>
                <p className='font-medium mt-4 text-base'>
                    I&apos;m a software engineer working for SEP in Carmel, Indiana.
                </p>
                <p className='font-medium mt-4 text-base'>
                    I have spent the last {thisYear - startYear} years working across different areas of Cloud Engineering, DevOps, Automation, and Backend Development.
                </p>
                <p className='font-medium mt-4 text-base'>
                    These days, my time is spent researching, designing, prototyping, and coding.
                </p>
                <p className='font-medium mt-4 text-base'>
                    Out of the office you&apos;ll find me dreaming of my next travel adventure, and playing with my two children.
                </p>
            </div>
        </section>
    )
}