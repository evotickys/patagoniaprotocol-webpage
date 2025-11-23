"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'

export default function Scene07Club(){
  const reduced = usePrefersReducedMotion()

  return (
    <section className="py-20 bg-[#050A08] text-white">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2 initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} className="text-2xl font-bold">Tu Cuartel General en la Patagonia.</motion.h2>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.1, duration:0.6}} className="mt-4 text-lg text-gray-200 max-w-lg">Ser inversionista no es solo mirar un gráfico; es tener llaves. El Club transforma tu posición financiera en un refugio físico. Conecta tu billetera para desbloquear estadías en el Lodge, acceso a nuestro Co-Work satelital de fibra óptica y uso del Spa de bajo impacto. Diseñamos espacios para el <strong>Deep Work</strong> (enfoque) y el <strong>Deep Rest</strong> (recuperación biológica).</motion.p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <motion.div initial={{opacity:0, y:6}} whileInView={{opacity:1, y:0}} className="bg-[#071412] p-4 rounded-md text-center">
              <div className="text-2xl font-bold">OFFICE</div>
              <div className="mt-1 text-sm text-gray-300">Starlink + Silencio</div>
            </motion.div>
            <motion.div initial={{opacity:0, y:6}} whileInView={{opacity:1, y:0}} transition={{delay:0.08}} className="bg-[#071412] p-4 rounded-md text-center">
              <div className="text-2xl font-bold">WELLNESS</div>
              <div className="mt-1 text-sm text-gray-300">Hot Tubs + Bosque</div>
            </motion.div>
            <motion.div initial={{opacity:0, y:6}} whileInView={{opacity:1, y:0}} transition={{delay:0.16}} className="bg-[#071412] p-4 rounded-md text-center">
              <div className="text-2xl font-bold">TABLE</div>
              <div className="mt-1 text-sm text-gray-300">Gastronomía Zero-KM</div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full rounded-lg overflow-hidden h-44 relative">
            <Image src="/assets/hero-7a.jpg" alt="Club view A" fill className="object-cover" />
          </div>
          <div className="w-full rounded-lg overflow-hidden h-44 relative">
            <Image src="/assets/hero-7b.jpg" alt="Club view B" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
