"use client"

import React from 'react'
import { motion } from 'framer-motion'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'

export default function Scene03Protocol(){
  const reduced = usePrefersReducedMotion()

  return (
    <section className="py-20 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} className="text-2xl font-bold">Instalamos un Sistema Operativo.</motion.h2>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.15, duration:0.6}} className="mt-4 text-lg text-gray-200 max-w-lg">Un protocolo que empaqueta propiedad, renta y acceso bajo reglas inmutables. Aquí mostramos la arquitectura.</motion.p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <motion.span initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{delay:0.2}} className="px-3 py-2 bg-[#061b18] border border-[#06b6d4] text-[#06b6d4] rounded-full font-semibold">PropCo: Secured</motion.span>
              <motion.span initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{delay:0.3}} className="px-3 py-2 bg-[#06121a] border border-[#06b6d4] text-[#06b6d4] rounded-full font-semibold">OpCo: Active</motion.span>
              <motion.span initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{delay:0.4}} className="px-3 py-2 bg-[#040a0a] border border-[#06b6d4] text-[#06b6d4] rounded-full font-semibold">DRC: Locked</motion.span>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-64 rounded-lg overflow-hidden bg-gradient-to-br from-[#001918] to-[#001117]">
              {/* grid-overlay with wipe */}
              {!reduced ? (
                <motion.div initial={{height:0}} whileInView={{height:'100%'}} transition={{duration:0.9}} className="w-full h-full">
                  <svg viewBox="0 0 600 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M20 0 L0 0 0 20" fill="none" stroke="#06b6d4" strokeWidth="0.5" opacity="0.25" />
                      </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </motion.div>
              ) : (
                <div className="w-full h-full" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
