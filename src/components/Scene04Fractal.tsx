"use client"

import React from 'react'
import { motion } from 'framer-motion'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'
import { dur, VIEWPORT } from '@/lib/anim'

export default function Scene04Fractal(){
  const reduced = usePrefersReducedMotion()

  return (
    <section className="py-16 bg-[#07120f] text-white">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
          <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={VIEWPORT} transition={{duration: dur(0.6)}} className="text-2xl font-bold">El Activo Fractal ($PAT).</motion.h2>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={VIEWPORT} transition={{delay:0.12, duration: dur(0.6)}} className="mt-4 text-lg text-gray-200 max-w-lg">No estás comprando una moneda digital; estás adquiriendo el código genético del proyecto. Gracias a la geometría fractal, un solo Token $PAT contiene la estructura completa de un Family Office, replicada a tu escala con tres derechos indivisibles:</motion.p>

          <ul className="mt-6 space-y-3 list-none">
            <li className="bg-[#061217] p-3 rounded-md"><strong className="text-[#D4AF37]">EQUITY:</strong> Título sobre la plusvalía de la tierra.</li>
            <li className="bg-[#061217] p-3 rounded-md"><strong className="text-[#D4AF37]">YIELD:</strong> Derecho a recibir dividendos del arriendo.</li>
            <li className="bg-[#061217] p-3 rounded-md"><strong className="text-[#D4AF37]">ACCESS:</strong> Llave digital para uso exclusivo del Lodge.</li>
          </ul>

          <div className="mt-6">
            <motion.button initial={{opacity:0, y:6}} whileInView={{opacity:1, y:0}} viewport={VIEWPORT} transition={{duration: dur(0.6)}} className="px-4 py-2 rounded-md bg-[#D4AF37] text-black font-semibold">Ver Tokenomics</motion.button>
          </div>
        </div>

          <div className="flex flex-col items-center justify-center gap-4">
          <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={VIEWPORT} transition={{duration: dur(0.7)}} className="w-full rounded-lg overflow-hidden">
            <img src="/assets/hero-2-3.jpg" alt="Fractal visual" className="w-full object-cover" />
          </motion.div>

          <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={VIEWPORT} transition={{delay:0.12, duration: dur(0.7)}} className="w-full rounded-lg overflow-hidden">
            <img src="/assets/hero-4.jpg" alt="Fractal detail" className="w-full object-cover" />
          </motion.div>
        </div>
      </div>
      {/* Smooth gradient transition from black section to the following white area */}
      <div aria-hidden className="mt-6">
        <div style={{height: 200, background: 'linear-gradient(180deg, #07120f 0%, rgba(7,18,15,0.6) 35%, rgba(247,250,249,0.95) 80%, #f7faf9 100%)'}} />
        {/* explicit white spacer to avoid leftover black band */}
        <div className="bg-[#f7faf9] h-6 -mt-2" />
      </div>
    </section>
  )
}
