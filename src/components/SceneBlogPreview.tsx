"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RevealOnScroll from '@/components/RevealOnScroll'
import { POSTS } from '@/lib/posts'

export default function SceneBlogPreview(){
  const preview = POSTS.slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#2a5a40] uppercase">Investigación Reciente</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">El PataBlog</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((post) => (
            <RevealOnScroll key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="relative h-44 w-full bg-gray-100">
                  {post.image ? (
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : null}
                </div>

                <div className="p-5">
                  <div className="text-sm text-gray-500">{post.category} · {post.date}</div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{post.excerpt}</p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
