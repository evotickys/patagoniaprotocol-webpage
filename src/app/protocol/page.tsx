export default function ProtocolPage(){
  return (
    <main className="container mx-auto px-4 py-12">
      {/* HERO: System Architecture */}
      <section id="hero" className="relative bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto">
        <div className="absolute inset-0 bg-[url('/assets/protocol-hero.jpg')] bg-cover bg-center opacity-60" />
        <div className="relative z-10 px-6 py-20 md:px-16 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm font-mono text-[#2a5a40] uppercase">SYSTEM ARCHITECTURE v1.0</div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">El Sistema Operativo de la Conservación.</h1>
            <p className="mt-6 text-lg text-gray-700">La tierra es el Hardware: finito, valioso, pero inerte. Patagonia Protocol es el Software: una capa de ingeniería legal y financiera que se instala sobre el territorio para hacerlo líquido, rentable y perpetuo.</p>
          </div>
        </div>
      </section>

      {/* THE STACK */}
      <section id="the-stack" className="mt-12 max-w-6xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-[#2a5a40] uppercase">La Arquitectura del Protocolo</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900">La Pila Tecnológica</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow">
              <div className="flex items-center justify-center h-10 w-10 rounded bg-[#2a5a40]/10 text-[#2a5a40]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#2a5a40" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Layer 4: La Capa de Valor (Network)</h3>
              <p className="mt-2 text-sm text-gray-600"><strong>Componente:</strong> Patagonia Token ($PAT).</p>
              <p className="text-sm text-gray-600">Función: La distribución. Securitizamos los derechos económicos y de uso en unidades fractales líquidas, permitiendo la entrada y salida de capital sin fricción.</p>
            </div>

            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow">
              <div className="flex items-center justify-center h-10 w-10 rounded bg-[#2a5a40]/10 text-[#2a5a40]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#2a5a40" strokeWidth="1.5"><path d="M3 12h18"/></svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Layer 3: La Interfaz Operativa (Application)</h3>
              <p className="mt-2 text-sm text-gray-600"><strong>Componente:</strong> Modelo de Concesión (OpCo).</p>
              <p className="text-sm text-gray-600">Función: La generación de flujo. Licitamos la operación a terceros expertos que inyectan capital (CAPEX) y pagan arriendo, eliminando riesgo operativo.</p>
            </div>

            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow">
              <div className="flex items-center justify-center h-10 w-10 rounded bg-[#2a5a40]/10 text-[#2a5a40]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#2a5a40" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Layer 2: El Kernel Legal (Firmware)</h3>
              <p className="mt-2 text-sm text-gray-600"><strong>Componente:</strong> SpA + Derecho Real de Conservación (DRC).</p>
              <p className="text-sm text-gray-600">Función: El código inmutable. Blindamos la tierra jurídicamente a perpetuidad; el DRC actúa como un candado que prohíbe el desarrollo inmobiliario destructivo.</p>
            </div>

            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow">
              <div className="flex items-center justify-center h-10 w-10 rounded bg-[#2a5a40]/10 text-[#2a5a40]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#2a5a40" strokeWidth="1.5"><path d="M12 2l7 4v8l-7 4-7-4V6z"/></svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Layer 1: El Activo Base (Hardware)</h3>
              <p className="mt-2 text-sm text-gray-600"><strong>Componente:</strong> Tierra Prístina + Capital Natural.</p>
              <p className="text-sm text-gray-600">Función: El subyacente físico. Seleccionamos activos irreproducibles con alta capacidad de captura de carbono y potencial turístico.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EL MOTOR */}
      <section id="motor" className="mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-[#2a5a40] uppercase">Separación de Poderes</h2>
          <p className="mt-2 text-2xl font-bold text-gray-900">El Motor (PropCo vs. OpCo)</p>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">Resolvemos el mayor fallo de la conservación privada: el riesgo de gestión.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900">PropCo (Nosotros)</h3>
            <p className="mt-3 text-gray-600"><strong>Rol:</strong> Dueños del Activo (Asset Allocators).</p>
            <p className="mt-2 text-gray-600"><strong>Responsabilidad:</strong> Custodia legal, monitoreo ambiental y emisión del token.</p>
            <p className="mt-2 text-gray-600"><strong>Ingreso:</strong> Recibe el Canon de Arriendo + % de Ventas Brutas.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900">OpCo (El Operador)</h3>
            <p className="mt-3 text-gray-600"><strong>Rol:</strong> Gestor Turístico (Hospitality Partner).</p>
            <p className="mt-2 text-gray-600"><strong>Responsabilidad:</strong> Staff, marketing, mantenimiento y experiencia del huésped.</p>
            <p className="mt-2 text-gray-600"><strong>Ingreso:</strong> Se queda con la utilidad operativa del hotel tras pagar el arriendo.</p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <svg className="w-full max-w-2xl" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#2a5a40" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#6aa87a" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <rect x="50" y="40" width="260" height="120" rx="12" fill="#f8faf8" stroke="#d1ead8"/>
            <text x="180" y="75" textAnchor="middle" fontSize="16" fill="#1f2937">PropCo</text>
            <text x="180" y="100" textAnchor="middle" fontSize="12" fill="#4b5563">Custodia · Token · Monitoreo</text>

            <rect x="490" y="40" width="260" height="120" rx="12" fill="#f8faf8" stroke="#d1ead8"/>
            <text x="620" y="75" textAnchor="middle" fontSize="16" fill="#1f2937">OpCo</text>
            <text x="620" y="100" textAnchor="middle" fontSize="12" fill="#4b5563">Operación · Marketing · Experiencia</text>

            <path d="M310 100 H490" stroke="url(#g)" strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" fill="#2a5a40" />
              </marker>
            </defs>
          </svg>
        </div>
      </section>

      {/* ESTANDAR */}
      <section id="estandar" className="mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-base font-semibold text-[#2a5a40] uppercase">Un Código, Múltiples Biomas</h2>
          <p className="mt-2 text-2xl font-bold text-gray-900">El Estándar</p>
        </div>
        <div className="mt-6 bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
          <p className="text-gray-700">Patagonia Protocol no es un fondo de inversión creado para un solo predio. Es un estándar replicable. Una vez validado el código legal y financiero en Ventisquero Grosse (Nodo 01), el Protocolo se expandirá para proteger activos en el Desierto de Atacama, la Selva Valdiviana y la Estepa Magallánica. Invertir en el Protocolo es invertir en la máquina que escalará la conservación en el siglo XXI.</p>
        </div>
      </section>
    </main>
  )
}
