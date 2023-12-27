// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import CoverSection from './components/Home/CoverSection'

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CoverSection posts={posts} /> 
    </main>
  )
}
