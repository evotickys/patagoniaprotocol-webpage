"use client"

import React from 'react'
import { motion } from 'framer-motion'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'

export default function Scene02Gap(){
  const reduced = usePrefersReducedMotion()

  return (
    <section className="py-24 bg-[#050A08] text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2 initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} className="text-2xl font-bold">El error contable más caro del planeta.</motion.h2>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.15, duration:0.6}} className="mt-4 text-lg text-gray-200 max-w-xl">Para el mercado tradicional, un árbol solo tiene valor cuando se tala. Mientras sigue de pie, es un costo operativo feroz. Hoy, mantener un parque privado de alto estándar cuesta más de 70 Millones de pesos al mes. Es un modelo roto que convierte activos biológicos invaluables en pasivos financieros insostenibles.</motion.p>

          <div className="mt-6 inline-block px-3 py-2 rounded-md bg-[#2b0b07] border border-[#D4AF37] text-sm font-semibold">STATUS: PASIVO FINANCIERO / ALTO RIESGO</div>
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
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                stroke="#D4AF37" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

              <motion.circle cx="360" cy="200" r="8" fill="#D4AF37" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.2 }} />
            </svg>
          )}
        </div>
      </div>
    </section>
  )
}
