"use client"

import React, { useEffect, useRef, useState } from 'react'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'

function clamp(v:number, a=0, b=1){ return Math.max(a, Math.min(b, v)) }

export default function Scene06River(){
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const [percent, setPercent] = useState(0)

  useEffect(()=>{
    if (reduced) {
      setPercent(0.4 * 100) // show a gentle static state when reduced motion
      return
    }

    const el = ref.current
    if (!el) return

    function onScroll(){
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(()=>{
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight || document.documentElement.clientHeight
        // compute how much the section has been scrolled into view (0..1)
        const progress = clamp((vh - rect.top) / (vh + rect.height), 0, 1)
        setPercent(Math.round(progress * 100))
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return ()=>{
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  },[reduced])

  return (
    <section ref={ref as any} className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Liquidez que crea Vida.</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">% de Llenado de Tesorería. Mientras navegas, la barra refleja la cantidad recaudada (simulada por scroll).</p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="w-full max-w-3xl">
            <div className="h-6 bg-gray-200 rounded-full overflow-hidden relative">
              <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#cfead9] via-[#9fe6c0] to-[#D4AF37] transition-all" style={{ width: `${percent}%` }} />
            </div>
            <div className="flex items-center justify-between mt-2 text-sm text-gray-700">
              <span>0%</span>
              <span>{percent}%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="w-full max-w-3xl">
            <div className="mt-4 text-left text-sm text-gray-600">Métrica: % de Llenado de Tesorería (simulado). Trigger: Scroll.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
