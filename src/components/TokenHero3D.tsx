"use client"

import React from 'react'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'

export default function TokenHero3D() {
  const reduced = usePrefersReducedMotion()

  // reduced-motion users get a static decorative gradient
  if (reduced) {
    return (
      <div aria-hidden className="w-full max-w-xl rounded-lg overflow-hidden shadow-lg">
        <div className="w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-[#07120f] via-[#0b2a1c] to-[#163f2d]" />
      </div>
    )
  }

  return (
    <div aria-hidden className="w-full max-w-xl rounded-lg overflow-hidden shadow-lg">
      <video
        className="w-full h-64 md:h-80 lg:h-96 object-cover"
        src="/assets/el-token-hero-video.mp4"
        poster="/assets/hero-1.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={(e) => {
          const el = e.currentTarget as HTMLVideoElement
          el.style.display = 'none'
        }}
      />
    </div>
  )
}
