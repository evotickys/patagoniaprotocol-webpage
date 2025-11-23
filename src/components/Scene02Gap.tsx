"use client"

import React from 'react'
import { motion } from 'framer-motion'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'
import { dur, VIEWPORT } from '@/lib/anim'

export default function Scene02Gap(){
  const reduced = usePrefersReducedMotion()

  return (
    <section className="py-16 bg-[#07120f] text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
          <motion.h2 initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={VIEWPORT} transition={{duration: dur(0.6)}} className="text-2xl font-bold">Infraestructura de valor infinito, retorno cero.</motion.h2>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={VIEWPORT} transition={{delay:0.15, duration: dur(0.6)}} className="mt-4 text-lg text-gray-200 max-w-xl">Hoy, los ecosistemas más valiosos del mundo no tienen un modelo de ingresos. Dependen de la filantropía para sobrevivir. Patagonia Protocol cierra esa brecha, convirtiendo la protección ambiental en un motor de rentabilidad sostenible.</motion.p>

          <div className="mt-6 inline-block px-3 py-2 rounded-md bg-[#2b0b07] border border-[#D4AF37] text-sm font-semibold">GAP: MONETIZACIÓN PENDIENTE</div>
        </div>

        <div className="relative">
          {reduced ? (
            <svg viewBox="0 0 600 360" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M10 300 C150 220 250 260 360 200 C460 140 560 240 590 260" stroke="#D4AF37" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 600 360" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <motion.path d="M10 300 C150 220 250 260 360 200 C460 140 560 240 590 260"
                initial={{ pathLength: 0, opacity: 0.8 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: dur(1.0), ease: 'easeInOut' }}
                stroke="#D4AF37" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

              <motion.circle cx="360" cy="200" r="8" fill="#D4AF37" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: dur(1.2) }} />
            </svg>
          )}
        </div>
      </div>
    </section>
  )
}
