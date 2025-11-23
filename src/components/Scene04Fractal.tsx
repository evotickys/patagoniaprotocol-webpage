"use client"

import React from 'react'
import { motion } from 'framer-motion'
import TokenFloat from '@/components/TokenFloat'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'

export default function Scene04Fractal(){
  const reduced = usePrefersReducedMotion()

  return (
    <section className="py-20 bg-[#050A08] text-white">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} className="text-2xl font-bold">El Activo Fractal ($PAT).</motion.h2>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.12, duration:0.6}} className="mt-4 text-lg text-gray-200 max-w-lg">No estás comprando una moneda digital; estás adquiriendo el código genético del proyecto. Gracias a la geometría fractal, un solo Token $PAT contiene la estructura completa de un Family Office, replicada a tu escala con tres derechos indivisibles:</motion.p>

          <ul className="mt-6 space-y-3 list-none">
            <li className="bg-[#061217] p-3 rounded-md"><strong className="text-[#D4AF37]">EQUITY:</strong> Título sobre la plusvalía de la tierra.</li>
            <li className="bg-[#061217] p-3 rounded-md"><strong className="text-[#D4AF37]">YIELD:</strong> Derecho a recibir dividendos del arriendo.</li>
            <li className="bg-[#061217] p-3 rounded-md"><strong className="text-[#D4AF37]">ACCESS:</strong> Llave digital para uso exclusivo del Lodge.</li>
          </ul>

          <div className="mt-6">
            <motion.button initial={{opacity:0, y:6}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} className="px-4 py-2 rounded-md bg-[#D4AF37] text-black font-semibold">Ver Tokenomics</motion.button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} className="w-full rounded-lg overflow-hidden">
            <img src="/assets/hero-2-3.jpg" alt="Fractal visual" className="w-full object-cover" />
          </motion.div>

          <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{delay:0.15, duration:0.8}} className="w-full rounded-lg overflow-hidden">
            <img src="/assets/hero-4.jpg" alt="Fractal detail" className="w-full object-cover" />
          </motion.div>

          {/* Animated mini-graph overlay */}
          {!reduced && (
            <motion.svg viewBox="0 0 200 80" className="w-[240px] mt-2" xmlns="http://www.w3.org/2000/svg">
              <motion.path d="M0 60 C30 40 60 50 90 30 C120 10 150 20 200 0"
                fill="none" stroke="#D4AF37" strokeWidth="3"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.6, ease: 'easeInOut' }} />
            </motion.svg>
          )}
        </div>
      </div>
    </section>
  )
}
