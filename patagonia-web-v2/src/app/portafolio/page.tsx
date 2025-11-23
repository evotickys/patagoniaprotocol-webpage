import Link from 'next/link'

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
            <div className="w-full h-56 md:h-72 lg:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-teal-700 to-emerald-500 flex items-center justify-center">
              <div className="text-center text-white/90">
                <div className="font-semibold">[Video placeholder — cinematographic river shot]</div>
                <div className="text-sm mt-2">(coloca aquí el mp4 o reemplaza por componente 3D cuando esté listo)</div>
              </div>
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
            <div className="w-full lg:h-[720px] rounded-lg overflow-hidden bg-[linear-gradient(180deg,#e6f7fb,#bfeee6)] flex items-start justify-center">
              <div className="p-6 max-w-xs text-center">
                <div className="text-xl font-semibold">[Parallax image placeholder]</div>
                <div className="text-sm mt-2 text-gray-700">(imagen vertical que va desde el glaciar hasta el bosque)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE INTERVENTION */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="text-2xl font-bold">Arquitectura del Silencio</h3>
          <p className="mt-3 text-gray-600">Nuestra intervención humana es quirúrgica. Bajo el modelo de concesión, la infraestructura turística (Lodge) está diseñada para desaparecer en el paisaje.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden bg-white p-6 shadow">
              <div className="h-44 bg-gray-100 rounded mb-4 flex items-center justify-center">[Render placeholder]</div>
              <div className="font-semibold">Baja Densidad</div>
              <p className="mt-2 text-sm text-gray-600">Pocas habitaciones, máximo valor por huésped.</p>
            </div>

            <div className="rounded-lg overflow-hidden bg-white p-6 shadow">
              <div className="h-44 bg-gray-100 rounded mb-4 flex items-center justify-center">[Render placeholder]</div>
              <div className="font-semibold">Cero Huella</div>
              <p className="mt-2 text-sm text-gray-600">Construcción modular elevada, sin cemento sobre el suelo forestal.</p>
            </div>

            <div className="rounded-lg overflow-hidden bg-white p-6 shadow">
              <div className="h-44 bg-gray-100 rounded mb-4 flex items-center justify-center">[Render placeholder]</div>
              <div className="font-semibold">La Experiencia</div>
              <p className="mt-2 text-sm text-gray-600">Tus dividendos provienen de viajeros que cruzan el mundo para despertar frente a este glaciar.</p>
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
            <div className="h-64 md:h-96 bg-[radial-gradient(circle_at_20%_30%,#0ff6d6_0%,#0bb48f_5%,transparent_20%),radial-gradient(circle_at_70%_70%,#fff 0%,#ffd 3%,transparent 8%)] flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold">[Mapa placeholder — Chile con nodos]</div>
                <div className="mt-3 text-sm text-gray-400">Nodo 02: San Pedro de Atacama • Nodo 03: Valdivia • Nodo 04: Magallanes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24" />
    </main>
  )
}
