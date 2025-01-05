'use client'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { GitHubIcon, LinkedInIcon, SunIcon } from '../Icons'
import { useThemeSwitch } from '../Hooks/useThemeSwitch'

export default function Header() {
    const [mode, setMode] = useThemeSwitch()
    return (
        <header className="w-full p-4 px-10 flex items-center justify-between">
            <Logo/>
            <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50'>
                <Link href="/" className='mr-4'>Home</Link>
                <Link href="/about" className='mx-4'>About</Link>
                <Link href="/categories/all" className='mx-4'>Blog</Link>
                {/* <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}><SunIcon/></button> */}
            </nav>
            <div>
                <a href='http://www.linkedin.com/in/NicoleSelig' className="inline-block w-12 h-12 mr-2"><LinkedInIcon className="hover:scale-125 transition-all ease duration-200"/></a>
                <a href='http://www.github.com/NicoleSelig' className="inline-block w-13 h-13 mr-2"><GitHubIcon className="hover:scale-125 transition-all ease duration-200"/></a>
            </div>
        </header>
    )
}
