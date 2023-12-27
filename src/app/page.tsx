// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import CoverSection from './components/Home/CoverSection'
import FeaturedPosts from './components/Home/FeaturedPosts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CoverSection posts={allPosts} /> 
      <FeaturedPosts posts={allPosts}/>
    </main>
  )
}
