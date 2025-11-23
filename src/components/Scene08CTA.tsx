"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import WaitlistModal from './WaitlistModal'

export default function Scene08CTA(){
  const [open, setOpen] = useState(false)

  return (
    <section className="py-20 bg-[#0b0f0e] text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2 initial={{opacity:0, y:6}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} className="text-3xl font-bold">Sé parte del Estándar.</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.12, duration:0.6}} className="mt-4 text-lg text-gray-300">La filantropía fue la solución del siglo XX. La ingeniería natural es la solución del siglo XXI. Estamos construyendo el índice de conservación más robusto del mercado. La preventa del Nodo 01 está abierta para inversionistas cualificados que entiendan la asimetría de valor de la naturaleza.</motion.p>

        <div className="mt-8">
          <button onClick={()=>setOpen(true)} className="inline-block rounded-md bg-[#D4AF37] text-black px-6 py-3 font-semibold">SOLICITAR ACCESO PREVENTA</button>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative h-56 rounded-lg overflow-hidden">
            <Image src="/assets/hero-7a.jpg" alt="CTA image A" fill className="object-cover" />
          </div>
          <div className="relative h-56 rounded-lg overflow-hidden">
            <Image src="/assets/hero-7b.jpg" alt="CTA image B" fill className="object-cover" />
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-400">Patagonia Protocol SpA es una entidad en proceso de registro CMF (Ley Fintec). Inversión en activos reales conlleva riesgos.</p>
      </div>

      <WaitlistModal open={open} onClose={()=>setOpen(false)} />
    </section>
  )
}
