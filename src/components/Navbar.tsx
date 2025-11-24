"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)
  const ticking = useRef(false)
  const mouseNearTop = useRef(false)

  useEffect(() => {
    function onScroll(){
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - lastY.current
        // small threshold to avoid jitter
        if (Math.abs(delta) < 6) {
          ticking.current = false
          return
        }
        // hide when scrolling down, show when up
        if (delta > 0 && !mouseNearTop.current) setVisible(false)
        else setVisible(true)
        lastY.current = y
        ticking.current = false
      })
    }

    function onMouseMove(e: MouseEvent){
      // reveal navbar if mouse approaches top 72px
      mouseNearTop.current = e.clientY < 72
      if (mouseNearTop.current) setVisible(true)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <header className={`w-full border-b bg-white/75 backdrop-blur-sm fixed top-0 z-40 transition-transform duration-300 ease-out ${visible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Left links */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-4">
            <Link href="/protocol" className="text-lg md:text-xl font-medium px-4 py-3 rounded-md border border-transparent hover:border-[#cfead9] hover:bg-[#f7fff9] transition">El Protocolo</Link>
            <Link href="/token" className="text-lg md:text-xl font-medium px-4 py-3 rounded-md border border-transparent hover:border-[#cfead9] hover:bg-[#f7fff9] transition">El Token</Link>
            <Link href="/portafolio" className="text-lg md:text-xl font-medium px-4 py-3 rounded-md border border-transparent hover:border-[#cfead9] hover:bg-[#f7fff9] transition">El Portafolio</Link>
          </nav>
        </div>

        {/* Center logo */}
        <div className="flex-1 flex items-center justify-center md:justify-center">
          <Link href="/" aria-label="Ir al inicio" className="inline-flex items-center gap-4 px-2 py-1 rounded-md border border-transparent hover:border-[#cfead9] hover:bg-[#f7fff9] transition">
            <Image src="/assets/logo.png" alt="Patagonia Protocol" width={72} height={72} className="object-contain" priority />
            <div className="flex flex-col leading-tight items-start transform -translate-x-1 translate-y-1">
              <span className="uppercase text-lg md:text-3xl font-bold text-[#2a5a40] tracking-tight">ATAGONIA</span>
              <span className="uppercase text-sm md:text-lg font-semibold text-[#2a5a40] -mt-1">ROTOCOL</span>
            </div>
            <span className="sr-only">Patagonia Protocol</span>
          </Link>
        </div>

        {/* Right links & mobile menu button */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/club" className="text-lg md:text-xl font-medium px-4 py-3 rounded-md border border-transparent hover:border-[#cfead9] hover:bg-[#f7fff9] transition">El Club</Link>
            <Link href="/team" className="text-lg md:text-xl font-medium px-4 py-3 rounded-md border border-transparent hover:border-[#cfead9] hover:bg-[#f7fff9] transition">El Equipo</Link>
            <Link href="/blog" className="text-lg md:text-xl font-semibold px-4 py-3 rounded-md border border-[#2a5a40] bg-[#ecf8f0] text-[#2a5a40]">El PataBlog</Link>
          </nav>

          <div className="md:hidden">
            <button aria-label="menu" onClick={()=>setOpen(!open)} className="p-2 rounded-md border">
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link href="/protocol" className="text-lg block px-4 py-3 rounded-md border border-transparent hover:bg-gray-50">El Protocolo</Link>
            <Link href="/token" className="text-lg block px-4 py-3 rounded-md border border-transparent hover:bg-gray-50">El Token</Link>
            <Link href="/portafolio" className="text-lg block px-4 py-3 rounded-md border border-transparent hover:bg-gray-50">El Portafolio</Link>
            <Link href="/club" className="text-lg block px-4 py-3 rounded-md border border-transparent hover:bg-gray-50">El Club</Link>
            <Link href="/blog" className="text-lg block px-4 py-3 rounded-md border border-[#2a5a40] bg-[#ecf8f0] text-[#2a5a40]">PataBlog</Link>
          </div>
        </div>
      )}
    </header>
  )
}
