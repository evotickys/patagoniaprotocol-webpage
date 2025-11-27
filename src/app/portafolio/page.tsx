import Link from 'next/link'
import Image from 'next/image'
import scene2 from './el-portafolio-scene-2.jpg'
import scene5 from './el-portafolio-scene-5.jpg'
import card12 from './el-portafolio-scene-4-card-1&2.jpg'
import card3 from './el-portafolio-scene-4-card-3.jpg'

export default function PortafolioPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#04291f,transparent)] opacity-70" />
        <div className="mx-auto max-w-7xl px-6 py-28 relative z-10">
          <div className="inline-block mb-4 px-3 py-1 rounded-md bg-white/10 text-sm font-mono">THE ASSET COLLECTION</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Curando lo Irreproducible.</h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">En un mundo donde todo se fabrica, lo único que tiene valor real es aquello que no se puede construir. Patagonia Protocol no acumula tierra; coleccionamos rareza. Seleccionamos ecosistemas estratégicos donde la belleza escénica converge con la seguridad hídrica y la biodiversidad crítica.</p>

          <div className="mt-8 flex items-center gap-4">
            <Link href="#nodo-01" className="inline-block rounded-md bg-amber-400 text-[#0b2b18] px-5 py-3 font-semibold shadow">Ver Nodo 01</Link>
            <Link href="#pipeline" className="inline-block rounded-md border border-white/20 px-4 py-3 text-white">La Expansión</Link>
          </div>

          <div className="mt-12">
            <div className="w-full h-56 md:h-72 lg:h-96 rounded-lg overflow-hidden bg-black flex items-center justify-center">
              <video src="/assets/el-portafolio-video.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* NODE 01 */}
      <section id="nodo-01" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-2 lg:gap-12 items-start">
          <div>
            <h2 className="text-base font-semibold text-[#2a5a40] uppercase">NODO 01: El Anfiteatro de Hielo</h2>
            <p className="mt-2 text-sm text-gray-600">Ubicación: Aysén, Patagonia Chilena.</p>
            <p className="mt-6 text-gray-800">Hay lugares en la Tierra que exigen silencio. Ventisquero Grosse es uno de ellos. Es un punto de colisión geológica donde el Hielo Norte se derrumba sobre la Selva Valdiviana. Aquí, el tiempo no se mide en trimestres financieros, sino en ciclos glaciares. 900 hectáreas de bosque templado lluvioso, custodiadas por paredes de granito y alimentadas por el deshielo de milenios. No es solo un terreno; es una catedral biológica que ha tardado 10.000 años en construirse.</p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="bg-gray-50 p-4 rounded">
                <div className="font-semibold">El Activo</div>
                <div className="mt-1">Al adquirir el Token $PAT, te conviertes en copropietario de esta frontera.</div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="font-semibold">Superficie</div>
                <div className="mt-1">900 Hectáreas</div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="font-semibold">Hidrología</div>
                <div className="mt-1">4 km de ribera de Río Grosse + Laguna Glaciar</div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="font-semibold">Estado</div>
                <div className="mt-1">Prístino / Conservación Perpetua (DRC)</div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <div className="font-semibold">Valoración Inicial</div>
              <div>USD 3.0M</div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="w-full lg:h-[720px] rounded-lg overflow-hidden bg-[linear-gradient(180deg,#e6f7fb,#bfeee6)] relative">
              <Image src={scene2} alt="Glaciar a bosque" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* THE INTERVENTION / EL REFUGIO INVISIBLE */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:pr-8">
            <h3 className="text-3xl md:text-4xl font-extrabold">El Refugio Invisible</h3>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">Bajo el modelo de concesión, la infraestructura deja de ser un edificio para convertirse en un lente óptico. El Lodge está diseñado para amplificar el paisaje, borrando la línea entre el huésped y la intemperie.</p>
          </div>

          <div className="mt-8 lg:mt-0 grid grid-cols-1 gap-6">
            <div className="flex gap-6 items-start lg:items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-56 h-40 md:w-64 md:h-44 relative rounded overflow-hidden flex-shrink-0">
                <Image src={card12} alt="Ingeniería ligera" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold">INGENIERÍA LIGERA</h4>
                <p className="mt-3 text-base md:text-lg text-gray-700">Arquitectura efímera construida con estándares eternos. Materiales que envejecen con el bosque y sistemas de energía autónoma que garantizan una operación silenciosa y cero emisiones.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start lg:items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-56 h-40 md:w-64 md:h-44 relative rounded overflow-hidden flex-shrink-0">
                <Image src={card3} alt="La economía del asombro" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold">LA ECONOMÍA DEL ASOMBRO</h4>
                <p className="mt-3 text-base md:text-lg text-gray-700">Tu retorno financiero proviene de una moneda escasa: el silencio absoluto. Transformamos la contemplación pasiva en un flujo de caja activo de alto valor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PIPELINE */}
      <section id="pipeline" className="py-20 bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="text-2xl font-bold">La Expansión del Índice</h3>
          <p className="mt-3 text-gray-300">Grosse es solo el comienzo. La visión del Protocolo es construir un corredor de conservación latitudinal.</p>

          <div className="mt-10 rounded-lg overflow-hidden bg-gray-900 p-8">
            <div className="h-64 md:h-96 relative rounded bg-gray-900 overflow-hidden group cursor-zoom-in">
              <Image src={scene5} alt="Mapa de nodos" fill className="object-contain transform transition-transform duration-700 ease-out group-hover:scale-150 origin-center" />
            </div>
          </div>
        </div>
      </section>

      <div className="h-24" />
    </main>
  )
}
