"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/RevealOnScroll'
import { dur, VIEWPORT } from '@/lib/anim'

export default function Scene05Asset(){
  return (
    <section className="pt-8 pb-16 bg-[#f7faf9] lg:-mt-20 relative z-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <RevealOnScroll>
              <p className="text-sm font-semibold text-[#2a5a40] uppercase">Nodo 01</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">Ventisquero Grosse</h2>
              <p className="mt-4 text-gray-700">En un mercado saturado de activos intangibles, nosotros presentamos <strong>colateral biológico</strong>. Esto no es una simulación. Son 900 hectáreas de bosque templado y ribera glaciar en la Región de Aysén, con una tasación comercial inicial de <strong>USD 3.0 Millones</strong>. Este es el activo raíz que respalda la primera emisión del Token <strong>$PAT</strong>.</p>
            </RevealOnScroll>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <RevealOnScroll>
                <div className="bg-gray-50 p-6 rounded-md shadow-sm text-center">
                  <p className="text-sm font-semibold text-gray-600">BIOMA</p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">SELVA FRÍA</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll>
                <div className="bg-gray-50 p-6 rounded-md shadow-sm text-center">
                  <p className="text-sm font-semibold text-gray-600">SUPERFICIE</p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">900 HAS</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll>
                <div className="bg-gray-50 p-6 rounded-md shadow-sm text-center">
                  <p className="text-sm font-semibold text-gray-600">VALORACIÓN</p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">$3.0M USD</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll>
                <div className="bg-gray-50 p-6 rounded-md shadow-sm text-center">
                  <p className="text-sm font-semibold text-gray-600">NOTA</p>
                  <p className="mt-2 text-sm text-gray-800">Colateral biológico: unión entre finanzas y naturaleza.</p>
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
            <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} viewport={VIEWPORT} transition={{duration: dur(0.7)}} className="relative h-full w-full">
              <Image src="/assets/hero-5.jpg" alt="Ventisquero Grosse" fill className="object-cover" />
              <div className="absolute top-4 right-4 bg-black/60 text-white rounded-md p-3 text-right">
                <div className="text-xs text-gray-300">BIOMA</div>
                <div className="text-lg font-bold">SELVA FRÍA</div>
                <div className="mt-2 text-xs text-gray-300">SUPERFICIE</div>
                <div className="text-lg font-bold">900 HAS</div>
                <div className="mt-2 text-xs text-gray-300">VALORACIÓN</div>
                <div className="text-lg font-bold">$3.0M USD</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
