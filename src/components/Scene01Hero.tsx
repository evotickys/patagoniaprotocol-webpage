"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TokenFloat from '@/components/TokenFloat'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'
import WaitlistModal from './WaitlistModal'

function Typewriter({ text, speed = 30, disabled = false }: { text: string, speed?: number, disabled?: boolean }){
  const [index,setIndex] = useState(disabled ? text.length : 0)
  useEffect(()=>{
    if (disabled) return
    const id = setInterval(()=>{
      setIndex(i => { if (i >= text.length) { clearInterval(id); return i } return i+1 })
    }, speed)
    return ()=> clearInterval(id)
  },[text, speed, disabled])
  return <span>{text.slice(0,index)}</span>
}

export default function Scene01Hero(){
  const reduced = usePrefersReducedMotion()
  const [open,setOpen] = useState(false)

  return (
    <section className="relative h-screen min-h-[680px] w-full flex items-center text-white overflow-hidden bg-[#050A08]">
      {/* Video / Media */}
      <div className="absolute inset-0 z-0">
        {!reduced ? (
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster="/assets/hero-7b.jpg">
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image src="/assets/hero-7b.jpg" alt="Hero" fill className="object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        {/* gold scan overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full mix-blend-screen opacity-50" style={{background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)', animation: 'gold-scan 3s linear infinite'}} />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="text-left">
          <div className="inline-block mb-4 px-3 py-1 rounded-md bg-white/10 text-sm font-mono">Ticker: <span className="font-bold">$PAT</span></div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            <Typewriter text={"No dones a la naturaleza. Iniverte en ella."} speed={reduced ? 0 : 30} disabled={reduced} />
          </h1>

          <p className="mt-6 max-w-xl text-lg text-[#E2E8F0]">La ingeniería financiera dura para siempre.</p>

          <div className="mt-8 flex items-center gap-4">
            <button onClick={()=>setOpen(true)} className="inline-block rounded-md bg-[#D4AF37] text-[#050A08] px-5 py-3 font-semibold shadow hover:scale-[1.02] transition">Unirse a la Espera</button>
            <Link href="/token" className="inline-block rounded-md border border-white/20 px-4 py-3 text-white hover:bg-white/5 transition">Leer el Whitepaper</Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
            <div className="w-full max-w-lg rounded-lg overflow-hidden relative">
            <div className="flex items-center justify-center py-10">
              <TokenFloat onClick={()=>setOpen(true)} ariaLabel="Unirse a la espera" />
            </div>
          </div>
        </div>
      </div>

      <WaitlistModal open={open} onClose={()=>setOpen(false)} />

      <style jsx>{`@keyframes gold-scan { from { transform: translateX(-30%);} to { transform: translateX(130%);} }`}</style>
    </section>
  )
}
