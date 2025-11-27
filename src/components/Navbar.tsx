"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const [compact, setCompact] = useState(false)
  const [lightBg, setLightBg] = useState(false)
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

        // update top state
        const isTop = y < 50
        setAtTop(isTop)

        // small threshold to avoid jitter
        if (Math.abs(delta) < 6) {
          // If near top, ensure visible and relaxed
          if (isTop) {
            setVisible(true)
            setCompact(false)
          }
          lastY.current = y
          ticking.current = false
          return
        }

        if (isTop) {
          // always visible at top
          setVisible(true)
          setCompact(false)
        } else {
          if (delta > 0 && !mouseNearTop.current) {
            // scrolling down -> hide
            setVisible(false)
            setCompact(true)
          } else {
            // scrolling up -> show compact bar
            setVisible(true)
            setCompact(true)
          }
        }

        // refresh contrast after header visibility/size changed
        updateContrast()

        lastY.current = y
        ticking.current = false
      })
    }

    function onMouseMove(e: MouseEvent){
      // reveal navbar if mouse approaches top 72px
      mouseNearTop.current = e.clientY < 72
      if (mouseNearTop.current) {
        setVisible(true)
        // if not at very top, show compact style
        if (window.scrollY >= 50) setCompact(true)
        // update contrast when the user reveals the header with the mouse
        updateContrast()
      }
    }

    function isElementBackgroundLight(el: Element | null) {
      if (!el) return false

      // Walk up the DOM to find the nearest ancestor with a non-transparent background
      let node: Element | null = el
      while (node && node !== document.documentElement) {
        try {
          const style = window.getComputedStyle(node)
          const bg = style.backgroundColor || ''
          if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
            const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
            if (!m) break
            const r = Number(m[1]), g = Number(m[2]), b = Number(m[3])
            const lum = 0.2126 * (r/255) + 0.7152 * (g/255) + 0.0722 * (b/255)
            return lum > 0.6
          }
        } catch (e) {
          // ignore cross-origin or compute errors and continue walking up
        }
        node = node.parentElement
      }

      // Fallback: if the element is an <img> or <video>, try to judge by its parent containers
      if (el) {
        const tag = el.tagName?.toLowerCase()
        if (tag === 'img' || tag === 'video') {
          let p = el.parentElement
          while (p) {
            try {
              const style = window.getComputedStyle(p)
              const bg = style.backgroundColor || ''
              if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
                const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
                if (!m) break
                const r = Number(m[1]), g = Number(m[2]), b = Number(m[3])
                const lum = 0.2126 * (r/255) + 0.7152 * (g/255) + 0.0722 * (b/255)
                return lum > 0.6
              }
            } catch (e) {
              // continue
            }
            p = p.parentElement
          }
        }
      }

      return false
    }

    function updateContrast() {
      try {
        const x = Math.floor(window.innerWidth / 2)
        const isTopNow = window.scrollY < 50
        const y = Math.min(isTopNow ? 80 : 48, window.innerHeight - 10)
        const el = document.elementFromPoint(x, y)
        const light = isElementBackgroundLight(el)
        setLightBg(light)
      } catch (e) {
        // ignore
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', updateContrast)
    // initial contrast check
    updateContrast()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', updateContrast)
    }
  }, [])

  const headerTransform = visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
  const headerBg = atTop ? 'bg-transparent' : 'bg-[#050A08]/90 backdrop-blur-md border-b border-white/10'
  const headerHeight = atTop && !compact ? 'h-24' : 'h-16'

  return (
    <header className={`fixed top-0 z-40 w-full ${headerBg} ${headerTransform} transition-all duration-300 ease-out ${headerHeight}`}>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-full">
        {/* Left links */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-4">
            <Link href="/protocol" className={`text-lg md:text-xl font-medium px-4 py-3 rounded-md transition ${atTop ? (lightBg ? 'text-gray-900' : 'text-white') : 'text-white/90 hover:text-white'}`}>El Protocolo</Link>
            <Link href="/token" className={`text-lg md:text-xl font-medium px-4 py-3 rounded-md transition ${atTop ? (lightBg ? 'text-gray-900' : 'text-white') : 'text-white/90 hover:text-white'}`}>El Token</Link>
            <Link href="/portafolio" className={`text-lg md:text-xl font-medium px-4 py-3 rounded-md transition ${atTop ? (lightBg ? 'text-gray-900' : 'text-white') : 'text-white/90 hover:text-white'}`}>El Portafolio</Link>
          </nav>
        </div>

        {/* Center logo */}
        <div className="flex-1 flex items-center justify-center md:justify-center">
          <Link href="/" aria-label="Ir al inicio" className={`inline-flex items-center gap-4 px-2 py-1 rounded-md transition ${atTop ? (lightBg ? 'text-gray-900' : 'text-white') : 'text-white'}`}>
            <Image src="/assets/logo.png" alt="Patagonia Protocol" width={atTop ? 72 : 48} height={atTop ? 72 : 48} className="object-contain" priority />
            <div className="flex flex-col leading-tight items-start transform -translate-x-1 translate-y-1">
              <span className={`uppercase font-bold tracking-tight ${atTop ? 'text-xl md:text-3xl' : 'text-lg md:text-2xl'} `}>PATAGONIA</span>
              <span className={`uppercase font-semibold ${atTop ? 'text-sm md:text-lg' : 'text-xs md:text-sm'} -mt-1`}>PROTOCOL</span>
            </div>
            <span className="sr-only">Patagonia Protocol</span>
          </Link>
        </div>

        {/* Right links & mobile menu button */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/club" className={`text-lg md:text-xl font-medium px-4 py-3 rounded-md transition ${atTop ? (lightBg ? 'text-gray-900' : 'text-white') : 'text-white/90 hover:text-white'}`}>El Club</Link>
            <Link href="/team" className={`text-lg md:text-xl font-medium px-4 py-3 rounded-md transition ${atTop ? (lightBg ? 'text-gray-900' : 'text-white') : 'text-white/90 hover:text-white'}`}>El Equipo</Link>
            <Link href="/blog" className={`text-lg md:text-xl font-semibold px-4 py-3 rounded-md transition ${atTop ? (lightBg ? 'bg-white/10 text-gray-900' : 'bg-white/10 text-white') : 'bg-[#ecf8f0] text-[#2a5a40]'}`}>El PataBlog</Link>
          </nav>

          <div className="md:hidden">
            <button aria-label="menu" onClick={()=>setOpen(!open)} className={`p-2 rounded-md border ${atTop && lightBg ? 'border-gray-200 text-gray-900' : 'border-white/10 text-white/90'}`}>
              {open ? <X size={24} /> : <Menu size={24} />}
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
