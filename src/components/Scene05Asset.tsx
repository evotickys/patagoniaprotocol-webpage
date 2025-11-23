"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function Scene05Asset(){
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <RevealOnScroll>
              <p className="text-sm font-semibold text-[#2a5a40] uppercase">Nodo 01</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">Ventisquero Grosse</h2>
              <p className="mt-4 text-gray-600">Un ecosistema prístino en la Región de Aysén, asegurado bajo el Protocolo.</p>
            </RevealOnScroll>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <RevealOnScroll>
                <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                  <p className="text-sm font-semibold">900 Hectáreas Conservadas</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll>
                <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                  <p className="text-sm font-semibold">USD 3.0M Valorización Inicial</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll>
                <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                  <p className="text-sm font-semibold">Perpetuo Blindaje Legal (DRC)</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll>
                <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                  <p className="text-sm font-semibold">12% Proyección TIR (Est.)</p>
                </div>
              </RevealOnScroll>
            </div>

            <div className="mt-6">
              <RevealOnScroll>
                <a href="/portafolio" className="inline-block rounded bg-[#2a5a40] px-6 py-3 text-white font-bold">Explorar el Portafolio</a>
              </RevealOnScroll>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-80 w-full rounded-lg overflow-hidden bg-gray-700 relative">
            <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} transition={{duration:0.8}}>
              <Image src="/assets/hero-5.jpg" alt="Ventisquero Grosse" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
