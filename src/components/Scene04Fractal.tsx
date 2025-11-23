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
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.12, duration:0.6}} className="mt-4 text-lg text-gray-200 max-w-lg">Propiedad + Renta + Acceso en un solo token.</motion.p>

          <div className="mt-6">
            <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} transition={{duration:0.6}} className="inline-block">
              <button className="px-4 py-2 rounded-md bg-[#D4AF37] text-black font-semibold">Ver Tokenomics</button>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm rounded-lg overflow-hidden relative">
            {!reduced ? (
              <motion.div initial={{scale:0.96, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:0.8}} className="p-10 flex items-center justify-center">
                <TokenFloat className="w-[140px] h-[140px]" />
              </motion.div>
            ) : (
              <div className="p-10 flex items-center justify-center"><TokenFloat /></div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
