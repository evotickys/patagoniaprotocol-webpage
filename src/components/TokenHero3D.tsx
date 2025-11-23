"use client"

import dynamic from 'next/dynamic'
import Image from 'next/image'
import heroImg from '@/app/token/hero-token.jpg'
import React from 'react'

const ClientHero = dynamic(() => import('./TokenHero3D.impl'), {
  ssr: false,
  loading: () => (
    <figure className="w-full max-w-xl rounded-lg overflow-hidden shadow-lg">
      <Image
        src={heroImg}
        alt="Hero token"
        className="object-cover w-full h-64 md:h-80 lg:h-96"
        width={1600}
        height={900}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen" />
    </figure>
  ),
})

export default function TokenHero3D() {
  return <ClientHero />
}
