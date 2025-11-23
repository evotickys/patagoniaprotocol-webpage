import BlogCard from '@/components/BlogCard'
import { POSTS } from '@/lib/posts'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function BlogPage(){
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <RevealOnScroll>
          <h1 className="text-3xl font-bold">PataBlog</h1>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className="mt-4 text-gray-600">Investigación, tesis y notas de alta calidad.</p>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map(p=> (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </main>
  )
}
