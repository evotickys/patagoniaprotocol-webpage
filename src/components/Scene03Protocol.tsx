"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'

export default function Scene03Protocol(){
  const reduced = usePrefersReducedMotion()

  return (
    <section className="py-20 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} className="text-2xl font-bold">Instalamos un Sistema Operativo sobre la Tierra.</motion.h2>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.15, duration:0.6}} className="mt-4 text-lg text-gray-200 max-w-lg">Hemos rediseñado la máquina para eliminar el riesgo de gestión. El Protocolo separa legalmente quién es dueño de la tierra de quién la opera, creando tres capas de seguridad:</motion.p>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{delay:0.2}} className="p-4 bg-[#061b18] rounded-md">
                <h4 className="font-semibold text-[#9fe6c0]">PropCo (La Propiedad)</h4>
                <p className="mt-1 text-sm text-gray-200">Nosotros ponemos la tierra. Tú eres dueño del activo físico mediante acciones de la SpA.</p>
              </motion.div>
              <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{delay:0.3}} className="p-4 bg-[#06121a] rounded-md">
                <h4 className="font-semibold text-[#9fe6c0]">OpCo (La Operación)</h4>
                <p className="mt-1 text-sm text-gray-200">Expertos gestionan el turismo. Un operador hotelero externo paga el arriendo y asume el riesgo diario.</p>
              </motion.div>
              <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{delay:0.4}} className="p-4 bg-[#040a0a] rounded-md">
                <h4 className="font-semibold text-[#9fe6c0]">DRC (El Blindaje)</h4>
                <p className="mt-1 text-sm text-gray-200">El "Derecho Real de Conservación". Un candado legal perpetuo que impide el desarrollo inmobiliario, sin importar quién tenga el token.</p>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-64 rounded-lg overflow-hidden bg-gradient-to-br from-[#001918] to-[#001117]">
              {!reduced ? (
                <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} transition={{duration:0.8}} className="w-full h-full relative">
                  <Image src="/assets/hero-sistema-operativo.jpg" alt="Sistema Operativo visual" fill className="object-cover" />
                </motion.div>
              ) : (
                <div className="w-full h-full relative">
                  <Image src="/assets/hero-sistema-operativo.jpg" alt="Sistema Operativo visual" fill className="object-cover" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
