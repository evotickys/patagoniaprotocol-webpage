"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { dur, VIEWPORT } from '@/lib/anim'
import WaitlistModal from './WaitlistModal'

export default function Scene08CTA(){
  const [open, setOpen] = useState(false)

  return (
    <section className="py-16 bg-[#07120f] text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2 initial={{opacity:0, y:6}} whileInView={{opacity:1, y:0}} viewport={VIEWPORT} transition={{duration: dur(0.6)}} className="text-3xl font-bold">Sé parte del Estándar.</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={VIEWPORT} transition={{delay:0.12, duration: dur(0.6)}} className="mt-4 text-lg text-gray-300">La filantropía fue la solución del siglo XX. La ingeniería natural es la solución del siglo XXI. Estamos construyendo el índice de conservación más robusto del mercado. La preventa del Nodo 01 está abierta para inversionistas cualificados que entiendan la asimetría de valor de la naturaleza.</motion.p>

        <div className="mt-8">
          <button onClick={()=>setOpen(true)} className="inline-block rounded-md bg-[#D4AF37] text-black px-6 py-3 font-semibold">SOLICITAR ACCESO PREVENTA</button>
        </div>

        {/* Images removed — duplicates of Scene07 */}
      </div>

      <WaitlistModal open={open} onClose={()=>setOpen(false)} />
    </section>
  )
}
