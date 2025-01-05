import Image from "next/image"
import Link from "next/link"
import profileImg from '@/public/profile-image.png'

export default function Logo() {
    return (
        <Link href="/" className="flex items-center text-dark dark:text-light">
            <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
                <Image src={profileImg} alt='NicoleSelig' className="w-full h-auto rounded-full"/>
            </div>
            <span className="font-bold text-xl">Nicole Selig</span>
        </Link>
    )
}
