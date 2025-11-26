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
      {/* HERO: La Definición */}
      <section className="relative bg-gradient-to-b from-[#022b1f] via-[#0f3b2a] to-[#163f2d] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(255,223,102,0.18),transparent_30%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-8 lg:grid-cols-2 items-center">
          <div className="text-left">
            <div className="inline-block mb-4 px-3 py-1 rounded-md bg-white/10 text-sm font-mono">Ticker: <span className="font-bold">$PAT</span></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">Patagonia Token.</h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-200">La primera unidad de inversión respaldada por conservación productiva. Un instrumento financiero líquido que combina la seguridad de la tierra, la rentabilidad del turismo y la exclusividad de un club privado.</p>

            <div className="mt-8 flex items-center gap-4">
              <Link href="#presale" className="inline-block rounded-md bg-amber-400 text-[#0b2b18] px-5 py-3 font-semibold shadow hover:scale-[1.02] transition">UNIRSE A LA PREVENTA</Link>
              <Link href="/whitepaper.pdf" className="inline-block rounded-md border border-white/20 px-4 py-3 text-white hover:bg-white/5 transition">LEER DOCUMENTACIÓN</Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <TokenHero3D />
          </div>
        </div>
      </section>

      {/* THE LOGIC: La Analogía del Fractal */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-semibold">Diseñado con Lógica Fractal</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">En la naturaleza, la parte contiene la información del todo. Hemos aplicado esta misma lógica a la ingeniería financiera. A diferencia de un loteo (que fragmenta y destruye), el Token <span className="font-bold">$PAT</span> replica la estructura completa del negocio —Propiedad, Renta y Uso— en cada unidad digital, sin importar el tamaño de tu inversión.</p>
        </div>
      </section>

      {/* THE VALUE TRIAD: La Tríada de Valor */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-base font-semibold text-[#2a5a40] uppercase">La Tríada de Valor</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">Equity · Yield · Utility</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white p-6 rounded-lg shadow transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
              <figure className="mb-4 rounded overflow-hidden bg-gray-100 group h-52 md:h-60 flex items-center justify-center">
                <Image src={landImg} alt="Land - Equity" className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-105" width={1000} height={600} />
              </figure>
              <div className="text-sm font-semibold text-[#2a5a40]">EQUITY (Respaldo Real)</div>
              <h3 className="mt-3 text-xl font-bold">Copropiedad sobre la SpA</h3>
              <p className="mt-3 text-gray-600">Copropiedad sobre la SpA dueña de los activos. Tu capital está anclado en hectáreas reales e infraestructura física. Es tu cobertura contra la inflación y la volatilidad del mercado.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
              <figure className="mb-4 rounded overflow-hidden bg-gray-100 group h-52 md:h-60 flex items-center justify-center">
                <Image src={yieldImg} alt="Yield - Rent" className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-105" width={1000} height={600} />
              </figure>
              <div className="text-sm font-semibold text-[#2a5a40]">YIELD (Flujo Operativo)</div>
              <h3 className="mt-3 text-xl font-bold">Derecho económico sobre el canon</h3>
              <p className="mt-3 text-gray-600">Derecho económico sobre el canon de arriendo. El Operador Turístico (OpCo) paga por el uso del activo; ese flujo se distribuye como dividendo. Si el hotel funciona, el token paga.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
              <figure className="mb-4 rounded overflow-hidden bg-gray-100 group h-52 md:h-60 flex items-center justify-center">
                <Image src={utilityImg} alt="Utility - Access" className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-105" width={1000} height={600} />
              </figure>
              <div className="text-sm font-semibold text-[#2a5a40]">UTILITY (Acceso Preferente)</div>
              <h3 className="mt-3 text-xl font-bold">Tu llave digital</h3>
              <p className="mt-3 text-gray-600">Tu llave digital. El token desbloquea tarifas preferenciales en el Lodge, acceso a áreas de conservación restringida y voz en la gobernanza del protocolo.</p>
            </article>
          </div>
        </div>
      </section>

      {/* THE EXPANSION MODEL */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold">Crecimiento sin Dilución</h2>
          <div className="mt-6 mb-6">
            <figure className="mx-auto max-w-3xl rounded-lg overflow-hidden shadow">
              <Image src={riverImg} alt="Modelo del Río - River visual" className="object-cover w-full h-56 md:h-72" width={1600} height={900} />
            </figure>
          </div>
          <p className="mt-3 text-gray-600">Usamos un mecanismo de Tesorería Acretiva (&quot;El Río&quot;) para que la venta de nuevos tokens fortalezca a los antiguos, no los debilite.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h4 className="font-semibold">Fase 1: La Captura (+25%)</h4>
              <p className="mt-2 text-sm text-gray-600">Toda nueva emisión se vende con una prima sobre el valor libro. Ese sobreprecio no es utilidad para retirar; es combustible.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h4 className="font-semibold">Fase 2: La Reserva (Treasury)</h4>
              <p className="mt-2 text-sm text-gray-600">El capital se acumula en una Tesorería de Expansión transparente. Es &quot;agua&quot; guardada para el siguiente ciclo.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h4 className="font-semibold">Fase 3: La Expansión</h4>
              <p className="mt-2 text-sm text-gray-600">Cuando la reserva se llena, adquirimos el siguiente activo (ej. Atacama) al contado. Tu mismo token $PAT ahora está respaldado por más hectáreas y más biomas que antes.</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-700">Resultado: Tu mismo token <span className="font-bold">$PAT</span> ahora está respaldado por MÁS hectáreas que antes, aumentando el valor intrínseco por unidad.</p>
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
                <tr className="border-b border-gray-800"><td className="px-4 py-3 text-left w-1/2">Red</td><td className="px-4 py-3">Ethereum / Polygon (EVM)</td></tr>
                <tr className="border-b border-gray-800"><td className="px-4 py-3 text-left">Estándar</td><td className="px-4 py-3">ERC-20 + Reglas de Whitelist (Security Token)</td></tr>
                <tr className="border-b border-gray-800"><td className="px-4 py-3 text-left">Oferta</td><td className="px-4 py-3">Dinámica (Respaldada por Activos)</td></tr>
                <tr className="border-b border-gray-800"><td className="px-4 py-3 text-left">Estructura Legal</td><td className="px-4 py-3">Acciones SpA (Chile)</td></tr>
                <tr><td className="px-4 py-3 text-left">Custodia</td><td className="px-4 py-3">Wallet Personal o Custodia Institucional</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      
    </main>
  )
}
