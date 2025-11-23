import Link from 'next/link'

export default function ClubPage() {
  return (
    <main className="min-h-screen">
      {/* HERO: La Promesa */}
      <section className="relative bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="inline-block mb-4 px-3 py-1 rounded-md bg-white/10 text-sm font-mono">THE UTILITY LAYER</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">Tu Cuartel General en la Patagonia.</h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">Ser dueño no es solo un título legal; es una vivencia. El Club transforma tu portafolio de inversión en un refugio físico. Espacios diseñados para el trabajo profundo, la desconexión radical y la gastronomía de origen.</p>

          <div className="mt-8 flex items-center gap-4">
            <button className="inline-flex items-center gap-3 rounded-md bg-amber-400 text-[#0b2b18] px-5 py-3 font-semibold shadow">Conectar Billetera para Reservar</button>
            <Link href="#tiers" className="inline-block rounded-md border border-white/20 px-4 py-3 text-white">Ver Membresías</Link>
          </div>

          <div className="mt-12">
            <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden bg-[url('/assets/window-placeholder.jpg')] bg-center bg-cover flex items-center justify-center">
              <div className="bg-black/40 p-4 rounded text-center">
                <div className="font-semibold">[Hero visual placeholder — persona en sillón Eames frente al bosque]</div>
                <div className="text-sm mt-2 text-gray-300">(reemplazar por video cinemático o imagen cuando esté disponible)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD: La Funcionalidad */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold">Token-Gated Access</h2>
          <p className="mt-3 text-gray-600">Olvídate de las reservas tradicionales. Tu Token es tu llave. Nuestro sistema de reservas basado en Blockchain verifica tu saldo de $PAT en tiempo real y desbloquea tu calendario.</p>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-center gap-6">
            <div className="rounded-lg border border-gray-200 p-6 w-full md:w-96">
              <div className="font-semibold text-gray-700">Wallet Connect (placeholder)</div>
              <div className="mt-4 text-sm text-gray-600">Al conectar, mostramos tu saldo y días disponibles de forma instantánea.</div>
              <div className="mt-6 bg-gray-50 p-4 rounded text-left text-sm">
                <div className="font-mono">Saldo: <span className="font-bold">50 $PAT</span></div>
                <div className="mt-1">Días Disponibles: <span className="font-bold">7 Noches</span></div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 w-full md:w-96">
              <div className="font-semibold text-gray-700">Check Balance / Priority</div>
              <p className="mt-3 text-sm text-gray-600">Cuantos más tokens tienes, más prioridad de reserva y mayores descuentos obtienes. (Futuro: Burn / Stake para pagar estadías).</p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS: La Experiencia */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-2xl font-bold text-center">La Experiencia</h3>
          <p className="mt-3 text-center text-gray-600">Cuatro pilares diseñados para transformar tu tiempo en valor real.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="bg-white p-6 rounded-lg shadow">
              <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">[Image placeholder]</div>
              <div className="text-sm font-semibold text-gray-700">DEEP WORK (Co-Work)</div>
              <h4 className="mt-2 font-bold">Oficina con Vista al Glaciar.</h4>
              <p className="mt-2 text-sm text-gray-600">Conectividad Starlink de alta velocidad en medio de la nada. Salas de reuniones insonorizadas, escritorios ergonómicos y el silencio absoluto del bosque para que termines ese libro, código o estrategia que la ciudad no te deja pensar.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">[Image placeholder]</div>
              <div className="text-sm font-semibold text-gray-700">DEEP REST (Wellness)</div>
              <h4 className="mt-2 font-bold">Desconexión Primitiva.</h4>
              <p className="mt-2 text-sm text-gray-600">Spa de bajo impacto integrado en la naturaleza. Hot tubs a leña bajo la lluvia, saunas con vista al río y plataformas de Yoga y Meditación inmersas en el bosque de helechos. Recupera tu biología.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">[Image placeholder]</div>
              <div className="text-sm font-semibold text-gray-700">ZERO KM (Gastronomía)</div>
              <h4 className="mt-2 font-bold">La Mesa Patagónica.</h4>
              <p className="mt-2 text-sm text-gray-600">No importamos ingredientes; los recolectamos. Cocina estacional basada en productores locales de Aysén, hongos silvestres y pesca responsable. Tu inversión también nutre a la comunidad local.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">[Image placeholder]</div>
              <div className="text-sm font-semibold text-gray-700">THE WILD (Expediciones)</div>
              <h4 className="mt-2 font-bold">Acceso Restringido.</h4>
              <p className="mt-2 text-sm text-gray-600">Senderos que no aparecen en los mapas turísticos. Como socio, accedes a zonas de conservación estricta guiado por nuestros expertos. Kayak en lagunas glaciares y caminatas en hielo reservadas solo para miembros.</p>
            </article>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section id="tiers" className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="text-2xl font-bold text-center">Membership Tiers</h3>
          <p className="mt-3 text-center text-gray-600">Niveles pensados para gamificar acceso, beneficios y prioridad.</p>

          <div className="mt-8 overflow-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="text-left text-sm text-gray-600 border-b">
                  <th className="px-4 py-3">Nivel</th>
                  <th className="px-4 py-3">Rango</th>
                  <th className="px-4 py-3">Beneficios</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-4 font-semibold">EXPLORER</td>
                  <td className="px-4 py-4">1-10 $PAT</td>
                  <td className="px-4 py-4">Acceso al Lodge. 10% Descuento en Tarifas.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-4 font-semibold">GUARDIAN</td>
                  <td className="px-4 py-4">11-50 $PAT</td>
                  <td className="px-4 py-4">Prioridad de Reserva. 20% Descuento. Acceso a Co-Work Privado.</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold">FOUNDER</td>
                  <td className="px-4 py-4">50+ $PAT</td>
                  <td className="px-4 py-4">1 Semana Gratis al Año (Sujeto a disponibilidad). Concierge Personalizado. Acceso a reuniones de estrategia con el Directorio.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="h-24" />
    </main>
  )
}
