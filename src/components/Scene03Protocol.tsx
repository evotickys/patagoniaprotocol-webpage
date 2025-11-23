"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { dur, VIEWPORT } from '@/lib/anim'
import Image from 'next/image'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'

export default function Scene03Protocol(){
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement | null>(null)

  // useScroll tied to the card container to create a lifting effect
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = reduced ? 0 : useTransform(scrollYProgress, [0, 1], [40, -140])

  return (
    <section className="py-28 bg-[#07120f] text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative">
          {/* Centered silver card that lifts on scroll */}
          <div ref={ref} className="flex justify-center">
            <motion.div style={{ y }} className="w-full sm:w-11/12 lg:w-10/12 xl:w-11/12 max-w-[1280px] bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 text-black border border-gray-300 rounded-2xl shadow-2xl p-10 lg:p-14">
              <div className="grid grid-cols-5 gap-6 items-start">
                {/* Title (2/5) */}
                <div className="col-span-5 lg:col-span-2">
                  <motion.h2 initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={VIEWPORT} transition={{duration: dur(0.6)}} className="text-2xl lg:text-3xl font-bold">Instalamos un Sistema Operativo sobre la Tierra.</motion.h2>
                </div>

                {/* Subtitle (3/5) */}
                <div className="col-span-5 lg:col-span-3">
                  <p className="mt-2 lg:mt-0 text-lg text-slate-700">Hemos rediseñado la máquina para eliminar el riesgo de gestión. El Protocolo separa legalmente quién es dueño de la tierra de quién la opera, creando tres capas de seguridad que se combinan para proteger el activo.</p>
                </div>

                {/* Image spans full width of card */}
                <div className="col-span-5 w-full h-72 lg:h-96 rounded-lg overflow-hidden bg-gray-100">
                  {!reduced ? (
                    <motion.div initial={{opacity:0, scale:0.99}} whileInView={{opacity:1, scale:1}} viewport={VIEWPORT} transition={{duration: dur(0.7)}} className="w-full h-full relative">
                      <Image src="/assets/hero-sistema-operativo.jpg" alt="Sistema Operativo visual" fill className="object-cover" />
                    </motion.div>
                  ) : (
                    <div className="w-full h-full relative">
                      <Image src="/assets/hero-sistema-operativo.jpg" alt="Sistema Operativo visual" fill className="object-cover" />
                    </div>
                  )}
                </div>

                {/* Four horizontal columns under the image */}
                <div className="col-span-5 mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-3 bg-white/60 rounded-md">
                    <h4 className="font-semibold text-emerald-600">PropCo</h4>
                    <p className="mt-1 text-sm md:text-base text-slate-700">La propiedad legal del activo físico.</p>
                  </div>
                  <div className="p-3 bg-white/60 rounded-md">
                    <h4 className="font-semibold text-emerald-600">OpCo</h4>
                    <p className="mt-1 text-sm md:text-base text-slate-700">La operación diaria por un operador experto.</p>
                  </div>
                  <div className="p-3 bg-white/60 rounded-md">
                    <h4 className="font-semibold text-emerald-600">DRC</h4>
                    <p className="mt-1 text-sm md:text-base text-slate-700">Derecho Real de Conservación — blindaje perpetuo.</p>
                  </div>
                  <div className="p-3 bg-white/60 rounded-md">
                    <h4 className="font-semibold text-emerald-600">Custodia</h4>
                    <p className="mt-1 text-sm md:text-base text-slate-700">Mecanismos de custodia y auditoría independientes.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* small spacer to let the card lift visibly before next dark section */}
          <div className="mt-12" />
        </div>
      </div>
    </section>
  )
}
