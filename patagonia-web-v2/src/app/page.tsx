import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <video id="heroVideo" className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster="/assets/hero-poster.jpg">
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />

        <div className="relative z-10 max-w-4xl px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Infraestructura Financiera para la Conservación.</h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">Transformamos la protección de la naturaleza en una clase de activo líquido. Propiedad real, rentas hoteleras y seguridad jurídica en un solo instrumento fractal.</p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portafolio" className="rounded-md bg-[#2a5a40] px-7 py-3 text-base font-bold text-white shadow-lg hover:bg-opacity-95 transform hover:scale-105 transition">Ver el Activo Piloto</Link>
            <Link href="/token" className="rounded-md border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/5 transition">Cómo funciona el $PAT</Link>
          </div>
        </div>
      </section>

      {/* VALUE PROP */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center max-w-3xl mx-auto">
            <h2 className="text-base font-semibold leading-7 text-[#2a5a40] uppercase">El Fin de la Filantropía. El Inicio de la Ingeniería.</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">La Tesis en 3 Pasos</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#2a5a40]/10 text-[#2a5a40]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#2a5a40" strokeWidth="1.5"><path d="M12 2l8 4v8l-8 4-8-4V6z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Estructura (PropCo)</h3>
              <p className="text-gray-600">Dueños, no Donantes. No pedimos caridad. Estructuramos la tierra bajo una SpA blindada con Derecho Real de Conservación. Tu capital está respaldado por activos reales.</p>
            </div>

            <div className="flex flex-col items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#2a5a40]/10 text-[#2a5a40]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#2a5a40" strokeWidth="1.5"><path d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Operación (OpCo)</h3>
              <p className="text-gray-600">Rentabilidad Operativa: concesionamos la hotelería a operadores de clase mundial que cubren los costos y generan flujos.</p>
            </div>

            <div className="flex flex-col items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#2a5a40]/10 text-[#2a5a40]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#2a5a40" strokeWidth="1.5"><path d="M12 2v20M5 7l7-5 7 5"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Token (El Fractal)</h3>
              <p className="text-gray-600">Liquidez Fractal: fraccionamos propiedad, flujo y acceso. Misma calidad de derechos que un inversor institucional, accesible para todos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVO */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-96 w-full rounded-lg overflow-hidden bg-gray-200 relative">
              <Image src="/assets/rio.jpeg" alt="Ventisquero Grosse" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2a5a40] uppercase">PILOTO 001</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">Ventisquero Grosse</h2>
              <p className="mt-4 text-gray-600">Un ecosistema prístino en la Región de Aysén, asegurado bajo el Protocolo.</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                  <p className="text-sm font-semibold">900 Hectáreas Conservadas</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                  <p className="text-sm font-semibold">USD 3.0M Valorización Inicial</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                  <p className="text-sm font-semibold">Perpetuo Blindaje Legal (DRC)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                  <p className="text-sm font-semibold">12% Proyección TIR (Est.)</p>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/portafolio" className="inline-block rounded bg-[#2a5a40] px-6 py-3 text-white font-bold">Explorar el Portafolio</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLUB */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold">Tu Propiedad. Tu Refugio.</h2>
              <p className="mt-4 text-gray-300">Ser inversionista en Patagonia Protocol no es solo mirar un gráfico en una pantalla. Es tener llaves. Accede a tarifas preferenciales en el Lodge y reportes de impacto trimestrales.</p>
              <ul className="mt-6 space-y-3 text-gray-200">
                <li>✓ Estadías bonificadas.</li>
                <li>✓ Reportes de impacto trimestrales.</li>
                <li>✓ Eventos exclusivos para socios.</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 h-80 w-full rounded-lg overflow-hidden bg-gray-700 relative">
              <Image src="/assets/lodge.jpg" alt="Lodge interior" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PATABLOG preview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#2a5a40] uppercase">Investigación Reciente</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">El PataBlog</p>
          </div>

          <div className="mt-8">
            <div id="patablog-cards" className="flex gap-6 overflow-x-auto pb-4">
              {/* The legacy JS in index.html loaded .md files; on Next we render our BlogCard components on /blog */}
              <div className="min-w-[280px] max-w-sm bg-white rounded-lg shadow p-5">Visita el <Link href="/blog" className="text-[#2a5a40] font-semibold">PataBlog</Link> para leer los artículos.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
