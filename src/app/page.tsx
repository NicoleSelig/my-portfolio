// app/page.tsx
import { allPosts } from 'contentlayer/generated'
import CoverSection from './components/Home/CoverSection'
import FeaturedPosts from './components/Home/FeaturedPosts'
import RecentPosts from './components/Home/RecentPosts'
import About from './(about)/about/page'

export default function Home() {
  const publishedPosts = allPosts.filter((post) => post.isPublished )
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <About/>
      {/* <CoverSection posts={publishedPosts} />
      <FeaturedPosts posts={publishedPosts}/>
      <RecentPosts posts={publishedPosts}/> */}
    </main>
  )
}
