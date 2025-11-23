import Link from 'next/link'
import Image from 'next/image'
import TokenHero3D from '@/components/TokenHero3D'
import landImg from './land-equity-token.jpg'
import yieldImg from './yield-token.jpg'
import riverImg from './river-token.jpg'
import utilityImg from './utility-token.jpg'


export default function TokenPage(){
  return (
    <main className="min-h-screen">
      {/* HERO: The Activo */}
      <section className="relative bg-gradient-to-b from-[#022b1f] via-[#0f3b2a] to-[#163f2d] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(255,223,102,0.18),transparent_30%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-8 lg:grid-cols-2 items-center">
          <div className="text-left">
            <div className="inline-block mb-4 px-3 py-1 rounded-md bg-white/10 text-sm font-mono">Ticker: <span className="font-bold">$PAT</span></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">The Fractal Asset.</h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-200">El primer activo financiero diseñado con Geometría Fractal. Un solo token contiene la estructura genética completa del proyecto: Propiedad sobre la tierra, Derechos sobre el flujo y Acceso a la experiencia.</p>

            <div className="mt-8 flex items-center gap-4">
              <Link href="#" className="inline-block rounded-md bg-amber-400 text-[#0b2b18] px-5 py-3 font-semibold shadow hover:scale-[1.02] transition">Únete a la Lista de Espera (Presale)</Link>
              <Link href="/whitepaper.pdf" className="inline-block rounded-md border border-white/20 px-4 py-3 text-white hover:bg-white/5 transition">Leer el Whitepaper</Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <TokenHero3D />
          </div>
        </div>
      </section>

      {/* ANATOMY: La Tríada de Valor */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-base font-semibold text-[#2a5a40] uppercase">La Tríada de Valor ($PAT)</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">No es una moneda. Es un contrato empaquetado.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white p-6 rounded-lg shadow transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
              <figure className="mb-4 rounded overflow-hidden bg-gray-100 group h-52 md:h-60 flex items-center justify-center">
                <Image src={landImg} alt="Land - Equity" className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-105" width={1000} height={600} />
              </figure>
              <div className="text-sm font-semibold text-[#2a5a40]">EQUITY</div>
              <h3 className="mt-3 text-xl font-bold">Land-Backed</h3>
              <p className="mt-3 text-gray-600">Copropiedad legal sobre la SpA dueña de Ventisquero Grosse (y futuros parques). Tu capital está anclado en hectáreas reales, blindadas por el Derecho Real de Conservación. Cobertura contra inflación pura.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
              <figure className="mb-4 rounded overflow-hidden bg-gray-100 group h-52 md:h-60 flex items-center justify-center">
                <Image src={yieldImg} alt="Yield - Rent" className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-105" width={1000} height={600} />
              </figure>
              <div className="text-sm font-semibold text-[#2a5a40]">YIELD</div>
              <h3 className="mt-3 text-xl font-bold">Rent-Generating</h3>
              <p className="mt-3 text-gray-600">Derecho a dividendos anuales provenientes del Canon de Arriendo pagado por el Operador Hotelero (OpCo). Si el turismo funciona, el token paga.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
              <figure className="mb-4 rounded overflow-hidden bg-gray-100 group h-52 md:h-60 flex items-center justify-center">
                <Image src={utilityImg} alt="Utility - Access" className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-105" width={1000} height={600} />
              </figure>
              <div className="text-sm font-semibold text-[#2a5a40]">UTILITY</div>
              <h3 className="mt-3 text-xl font-bold">Owner-Access</h3>
              <p className="mt-3 text-gray-600">El token funciona como tu llave digital. Desbloquea tarifas preferenciales en el Lodge, acceso a zonas de conservación restringida y derechos de gobernanza en decisiones no-críticas.</p>
            </article>
          </div>
        </div>
      </section>

      {/* THE RIVER MODEL */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold">Inversión Acretiva (El Modelo del Río)</h2>
          <div className="mt-6 mb-6">
            <figure className="mx-auto max-w-3xl rounded-lg overflow-hidden shadow">
              <Image src={riverImg} alt="Modelo del Río - River visual" className="object-cover w-full h-56 md:h-72" width={1600} height={900} />
            </figure>
          </div>
          <p className="mt-3 text-gray-600">Cómo tu inversión financia el siguiente parque sin diluirte.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h4 className="font-semibold">Paso 1: La Prima (+25%)</h4>
              <p className="mt-2 text-sm text-gray-600">Cada nueva emisión de $PAT se vende con un sobreprecio respecto al valor libro anterior.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h4 className="font-semibold">Paso 2: La Represa (Treasury)</h4>
              <p className="mt-2 text-sm text-gray-600">Ese capital extra no se gasta. Se acumula en una Tesorería de Expansión (El Embalse).</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h4 className="font-semibold">Paso 3: La Adquisición</h4>
              <p className="mt-2 text-sm text-gray-600">Cuando el Embalse se llena, el Protocolo compra el siguiente activo al contado, aumentando el respaldo por token.</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-700">Resultado: Tu mismo token $PAT ahora está respaldado por MÁS hectáreas que antes. El valor intrínseco del token sube automáticamente.</p>
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="text-xl font-bold">Ficha Técnica</h3>
          <div className="mt-4 bg-black text-green-200 font-mono text-sm rounded-lg overflow-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-800"><td className="px-4 py-3 text-left w-1/2">Network</td><td className="px-4 py-3">Ethereum / Polygon (EVM Compatible)</td></tr>
                <tr className="border-b border-gray-800"><td className="px-4 py-3 text-left">Standard</td><td className="px-4 py-3">ERC-20 + ERC-1400 (Security Token Standard)</td></tr>
                <tr className="border-b border-gray-800"><td className="px-4 py-3 text-left">Supply</td><td className="px-4 py-3">Dinámico (Capped per Asset)</td></tr>
                <tr className="border-b border-gray-800"><td className="px-4 py-3 text-left">Legal Wrapper</td><td className="px-4 py-3">SpA chilena (Acciones Nominativas)</td></tr>
                <tr><td className="px-4 py-3 text-left">Custodia</td><td className="px-4 py-3">Self-Custody o Custodia Regulada (Vault)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      
    </main>
  )
}
