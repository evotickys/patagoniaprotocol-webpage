"use client"
import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import type { Post } from '@/lib/posts';

export default function BlogCard({post}:{post:Post}){
  const [src, setSrc] = useState(post.image || '')
  return (
    <article className="group block rounded-lg overflow-hidden shadow-sm bg-white transform transition hover:shadow-lg hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <Image src={src} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" onError={()=>setSrc('/imagenes-blog/placeholder.svg')} />
        </div>
        <div className="p-5">
          <div className="text-sm text-gray-500">{post.category} · {post.date}</div>
          <h3 className="mt-3 text-lg font-serif font-semibold text-gray-900">{post.title}</h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
          <div className="mt-4"><span className="text-sm font-semibold text-[#2a5a40]">Leer más →</span></div>
        </div>
      </Link>
    </article>
  )
}
