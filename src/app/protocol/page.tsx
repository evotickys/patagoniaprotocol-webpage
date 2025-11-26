"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { dur, VIEWPORT } from '@/lib/anim'

export default function ProtocolPage(){
  const strokeControls = useAnimation()

  useEffect(() => {
    // start a subtle draw when mounted
    strokeControls.start(i => ({ strokeDashoffset: 0, transition: { duration: dur(1.2 + i * 0.4) } }))
  }, [strokeControls])

  

  return (
    <main className="min-h-screen bg-[#071412] text-white">
      {/* Scene 01 - La Definición */}
      <section className="relative overflow-hidden">
        <div className="relative h-[72vh] md:h-[80vh]">
          <Image src="/assets/el-protocolo-scene-1.jpg" alt="Patagonian valley" fill className="object-cover brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />

          {/* SVG topographic/grid overlay */}
          <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="gold" x1="0" x2="1">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#C0892B" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            <motion.path d="M40 700 C200 600, 400 650, 600 600, 800 550, 1000 600" stroke="url(#gold)" strokeWidth="1" fill="none"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: dur(1.8) }} />
            <motion.path d="M40 640 C220 560, 420 590, 620 560, 820 530, 1000 560" stroke="url(#gold)" strokeWidth="1" fill="none"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: dur(2.0), delay: 0.2 }} />
            <motion.rect x={60} y={60} width={1080} height={680} stroke="url(#gold)" strokeWidth={1} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: dur(1.6), delay: 0.1 }} />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-3xl text-center px-6">
              <div className="font-mono text-sm text-amber-200 uppercase tracking-wide">Invisible Architecture</div>
              <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-serif font-bold">Arquitectura para lo Intangible.</h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">La tierra es valiosa, pero frágil y caótica. Patagonia Protocol es la infraestructura invisible —legal y financiera— que construimos sobre el territorio para darle solidez, liquidez y propósito.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scene 02 - La Estructura (Exploded View) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-base font-mono text-amber-200 uppercase">La Estructura</h2>
            <p className="mt-2 text-2xl font-serif font-bold">La Pila Constructiva</p>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Descomponemos el paisaje en capas —como en un corte arquitectónico— para mostrar cómo cada elemento sostiene al siguiente.</p>
          </div>

          <div className="mt-12 lg:flex lg:items-start lg:gap-8">
            {/* Image on the left (smaller) */}
            <div className="lg:flex-1 flex items-center">
              <div className="w-full rounded-lg overflow-hidden h-[680px] md:h-[780px] lg:h-[780px] flex items-center justify-center bg-black">
                <Image src="/assets/el-protocolo-scene-2.jpg" alt="Exploded landscape layers" width={1200} height={640} className="w-auto h-full object-contain" />
              </div>
            </div>

            {/* Stacked levels on the right: 4 (top) -> 1 (bottom). They collectively match the image height via fixed container height. */}
            <motion.div className="mt-6 lg:mt-0 lg:w-[360px] lg:flex lg:flex-col lg:justify-between h-[680px] md:h-[780px] lg:h-[780px]"
              initial="hidden" whileInView="show" viewport={VIEWPORT}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.24 } }
              }}
            >
              {/** item variant reused for all cards */}
              {
                (() => {
                  const item = {
                    hidden: { x: 30, opacity: 0 },
                    show: (i: number) => ({ x: 0, opacity: 1, transition: { duration: dur(0.6 + i * 0.05) } })
                  }
                  return (
                    <>
                      <motion.div variants={item} custom={0} className="flex-1 bg-[#081816]/40 p-6 rounded-lg border border-amber-900 mb-3 lg:mb-2 flex flex-col justify-center">
                        <div className="font-mono text-xs text-amber-200 uppercase">NIVEL 4: LAS LLAVES</div>
                        <h3 className="mt-2 font-serif text-xl font-bold">Patagonia Token ($PAT).</h3>
                        <p className="mt-2 text-gray-300">El título de propiedad. Dividimos los derechos en unidades fractales líquidas, permitiendo entrar y salir del edificio sin demolerlo.</p>
                      </motion.div>

                      <motion.div variants={item} custom={1} className="flex-1 bg-[#081816]/40 p-6 rounded-lg border border-amber-900 mb-3 lg:mb-2 flex flex-col justify-center">
                        <div className="font-mono text-xs text-amber-200 uppercase">NIVEL 3: LAS INSTALACIONES</div>
                        <h3 className="mt-2 font-serif text-xl font-bold">Concesión Operativa.</h3>
                        <p className="mt-2 text-gray-300">Las cañerías y la energía. Un operador experto inyecta capital de trabajo y gestiona el turismo, generando el flujo que alimenta el edificio.</p>
                      </motion.div>

                      <motion.div variants={item} custom={2} className="flex-1 bg-[#081816]/40 p-6 rounded-lg border border-amber-900 mb-3 lg:mb-2 flex flex-col justify-center">
                        <div className="font-mono text-xs text-amber-200 uppercase">NIVEL 2: LOS CIMIENTOS</div>
                        <h3 className="mt-2 font-serif text-xl font-bold">Gobernanza Corporativa.</h3>
                        <p className="mt-2 text-gray-300">La zapata de concreto. Nos blindamos con Estatutos de Supermayoría que impiden la venta del activo sin consenso total.</p>
                      </motion.div>

                      <motion.div variants={item} custom={3} className="flex-1 bg-[#081816]/40 p-6 rounded-lg border border-amber-900 flex flex-col justify-center">
                        <div className="font-mono text-xs text-amber-200 uppercase">NIVEL 1: EL SUELO</div>
                        <h3 className="mt-2 font-serif text-xl font-bold">Tierra Prístina.</h3>
                        <p className="mt-2 text-gray-300">La base física. Seleccionamos activos irreproducibles (Glaciares, Bosques) que actúan como el suelo firme de la inversión.</p>
                      </motion.div>
                    </>
                  )
                })()
              }
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scene 03 - El Motor (PropCo vs OpCo) */}
      <section className="py-20 bg-[#2b3132]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={VIEWPORT} transition={{ duration: dur(0.6) }} className="relative -mt-12 p-6 md:p-10 rounded-2xl bg-[#222829] shadow-2xl">
            <div className="text-center">
              <h2 className="text-base font-mono text-amber-200 uppercase">El Motor</h2>
              <p className="mt-2 text-2xl font-serif font-bold">PropCo vs. OpCo</p>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">El error clásico es mezclar el ladrillo con el servicio. Nosotros separamos la tenencia de la operación para blindar el capital.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="relative rounded-lg overflow-hidden bg-[#071412]">
                <Image src="/assets/el-protocolo-scene-3a.jpg" alt="PropCo visual" width={1200} height={800} className="object-cover brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent flex items-start pt-6 md:pt-8">
                  <div className="p-8">
                    <div className="font-mono text-xs text-amber-200 uppercase">PROPCO</div>
                    <h3 className="mt-2 font-serif text-2xl font-bold">El Custodio (Permanencia)</h3>
                    <p className="mt-2 text-gray-300">Nosotros ponemos el escenario. Somos dueños de la tierra, la infraestructura y el blindaje legal. Nuestra misión es la plusvalía a largo plazo y la protección del activo contra la entropía. Nosotros ponemos el Silencio.</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden bg-[#071412]">
                <Image src="/assets/el-protocolo-scene-3b.jpg" alt="OpCo visual" width={1200} height={800} className="object-cover brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent flex items-start justify-end pt-6 md:pt-8">
                  <div className="p-8 text-right">
                    <div className="font-mono text-xs text-amber-200 uppercase">OPCO</div>
                    <h3 className="mt-2 font-serif text-2xl font-bold">El Anfitrión (Experiencia)</h3>
                    <p className="mt-2 text-gray-300">Ellos ponen la música. Un operador de clase mundial inyecta el capital de trabajo, el staff y el riesgo hotelero. Su misión es llenar las habitaciones y generar el flujo de caja que paga tu dividendo. Ellos ponen la Vida.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scene 04 - La Escala (The Standard) */}
      <section className="py-20 bg-[#2b3132]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-base font-mono text-amber-200 uppercase">La Escala</h2>
          <p className="mt-2 text-2xl font-serif font-bold">Un Plano, Múltiples Edificios</p>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">No diseñamos esto para un solo terreno. Creamos un estándar constructivo replicable. Una vez levantado el Edificio 01 (Grosse), usaremos los mismos planos para levantar el Edificio 02 en Atacama.</p>

          <div className="mt-10 relative rounded-lg overflow-hidden">
            <Image src="/assets/el-protocolo-scene-4.jpg" alt="Map with buildings" width={1400} height={700} className="object-cover brightness-60" />
            <svg viewBox="0 0 1400 700" className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="copper" x1="0" x2="1"><stop offset="0%" stopColor="#D4AF37"/><stop offset="100%" stopColor="#C0892B"/></linearGradient>
              </defs>
              <motion.circle cx={300} cy={300} r={44} stroke="url(#copper)" strokeWidth={2} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: dur(1.2) }} />
              <motion.path d="M300 344 L480 220" stroke="url(#copper)" strokeWidth={1} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: dur(1.4), delay: 0.1 }} />
            </svg>
          </div>
        </div>
      </section>
    </main>
  )
}
