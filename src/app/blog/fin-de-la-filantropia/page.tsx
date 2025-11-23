import { findPost } from '@/lib/posts'
import { Linkedin, X } from 'lucide-react'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function PostPage(){
  const post = findPost('fin-de-la-filantropia');
  if(!post) return <div className="p-8">Post no encontrado</div>
  return (
    <main className="min-h-screen">
      <div className="post-hero py-28 text-white" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)), url('/imagenes-blog/fin-de-la-filantropia/hero.jpg'), url('${post.image}')`, backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <RevealOnScroll>
            <div className="text-sm font-mono text-[#dff0e0] uppercase">{post.category}</div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold">{post.title}</h1>
            <div className="mt-3 text-sm opacity-90">{post.date} · {post.author}</div>
          </RevealOnScroll>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{__html: post.contentHtml}} />
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="font-semibold mb-2">Compartir</div>
                <div className="flex flex-col gap-2">
                  <a href="#" className="flex items-center gap-2 text-sm text-[#2a5a40]"><Linkedin size={16} /> LinkedIn</a>
                  <a href="#" className="flex items-center gap-2 text-sm text-[#2a5a40]"><X size={16} /> X</a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
