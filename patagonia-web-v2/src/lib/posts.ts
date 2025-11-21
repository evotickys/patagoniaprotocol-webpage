export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  excerpt: string;
  image?: string;
  contentHtml: string;
}

export const POSTS: Post[] = [
  {
    slug: 'fin-de-la-filantropia',
    title: 'El fin de la filantropía: por qué la conservación necesita un modelo de negocios',
    date: '21 de Noviembre, 2025',
    category: 'Tesis de Inversión',
    author: 'Eugenio Voticky',
    excerpt: 'Un parque privado es un pasivo financiero feroz. Analizamos por qué el modelo del "mecenas" está roto y cómo transformar los costos de conservación en infraestructura de inversión rentable.',
    image: '/imagenes-blog/fin-de-la-filantropia.svg',
    contentHtml: `
      <p><strong>Por: Eugenio Voticky</strong></p>

      <p>Hay una fantasía recurrente entre quienes han tenido éxito en los negocios: "Cuando venda mi empresa, compraré un campo gigante en el sur, protegeré el bosque y lo dejaré intacto para siempre".</p>

      <p>Es una visión noble. Es romántica. Y, financiera y operativamente, es una pesadilla.</p>

      <p>La realidad de la conservación privada en Chile (y en el mundo) es un secreto a voces que nadie discute en los cócteles de beneficencia: Un parque privado es un pasivo financiero feroz.</p>

      <p>Desde el momento en que firmas la escritura, el taxímetro empieza a correr. No estamos hablando de impuestos territoriales (contribuciones). Estamos hablando de cercos que se caen cada invierno, de monitoreo satelital, de prevención de incendios, de equipos en terreno, de caminos que se borran con la lluvia y de la constante presión de la ocupación ilegal.</p>

      <p>Si miras el balance general (Balance Sheet) de un parque de conservación tradicional, los números son rojos y profundos. Mes tras mes. Año tras año.</p>

      <h2>El Error de Cálculo Contable</h2>

      <p>El problema no es la intención; el problema es la estructura. Hemos pasado los últimos 50 años tratando a la naturaleza como una organización de beneficencia en lugar de tratarla como una clase de activo.</p>

      <p>Bajo el modelo actual (Filantropía), la conservación depende de dos fuentes:</p>

      <ol>
        <li><strong>El Estado:</strong> Que suele ser lento, burocrático y está perpetuamente desfinanciado.</li>
        <li><strong>El Mecenas:</strong> Un individuo de alto patrimonio que subsidia las pérdidas del parque con los flujos de sus otros negocios.</li>
      </ol>

      <p>Este segundo modelo es frágil. ¿Qué pasa cuando el mecenas se aburre? ¿O cuando sus otros negocios fallan? ¿O cuando sus herederos deciden que prefieren liquidez en lugar de un bosque que solo consume efectivo?</p>

      <p>El parque se lotea. El bosque se vende. La conservación se acaba.</p>

      <h2>Sostenibilidad Financiera = Sostenibilidad Ecológica</h2>

      <p>En Patagonia Protocol, tenemos una tesis radical pero simple: Si la conservación no es negocio, no es sostenible.</p>

      <p>No usamos la palabra "negocio" en el sentido extractivo de talar árboles o llenar un lago de jaulas de salmones. Usamos "negocio" en el sentido de ingeniería financiera: Un activo debe ser capaz de pagar su propia existencia.</p>

      <p>Para que un bosque permanezca de pie por los próximos 100 años, no puede depender de la buena voluntad de un donante. Necesita un P&L (Estado de Resultados) saludable. Necesita generar flujos de caja que cubran sus costos de operación (OPEX) y entreguen un retorno a quienes pusieron el capital (CAPEX).</p>

      <h2>De Pasivo a Infraestructura</h2>

      <p>Nuestra propuesta es dejar de mirar la Patagonia como un "jardín caro" y empezar a mirarla como Infraestructura Biológica.</p>

      <p>Al igual que una carretera cobra peaje para mantenerse impecable, o un puerto cobra tarifas para operar, un activo de conservación debe tener mecanismos de captura de valor. Nosotros construimos esa maquinaria:</p>

      <ol>
        <li><strong>Infraestructura de Uso:</strong> Hotelería de bajo impacto y alto rendimiento (concesionada a expertos) que genera rentas operativas.</li>
        <li><strong>Infraestructura Legal:</strong> Blindaje a perpetuidad (Derecho Real de Conservación) que transforma la tierra en un activo inalienable.</li>
        <li><strong>Infraestructura Financiera:</strong> Un Token (Patagonia Token) que permite que el capital fluya hacia este activo, ofreciendo liquidez y entrada a inversionistas que buscan refugio de valor real, no solo hacer caridad.</li>
      </ol>

      <p>Se acabó el tiempo de pedir limosna para salvar el planeta. Es hora de estructurar la naturaleza como el activo más valioso de la cartera.</p>
    `
  },
  {
    slug: 'que-es-patagonia-protocol',
    title: '¿Qué es Patagonia Protocol?',
    date: '21 de Noviembre, 2025',
    category: 'Infraestructura',
    author: 'Eugenio Voticky',
    excerpt: 'La tierra es el hardware; nosotros construimos el software. Explicamos por qué lotear parcelas es ineficiente y cómo nuestro Protocolo resuelve la fragmentación.',
    image: '/imagenes-blog/que-es-patagonia-protocol.svg',
    contentHtml: `
      <p><strong>No somos una inmobiliaria; somos un sistema operativo.</strong></p>

      <p>Si le dices a alguien en Chile que quieres "invertir en tierras", su mente suele ir a una imagen: una parcela de 5.000 m², un cerco de alambre y el sueño de construir una cabaña algún día.</p>

      <p>Ese modelo —el "loteo"— es como la industria inmobiliaria tradicional entiende el negocio: tomar un activo grande, dividirlo en pedazos pequeños y venderlos rápido. Financiera-mente puede funcionar para el vendedor, pero ecológicamente es devastador. Biológicamente, un bosque fragmentado por 50 cercos y 50 fosas sépticas deja de ser bosque y pasa a ser un suburbio con árboles. Y como inversión, resulta ineficiente: acabas siendo dueño de un pedazo de tierra que te obliga a cortar el pasto, discutir por el agua y gestionar seguridad a distancia.</p>

      <h2>El problema del "hardware" sin "software"</h2>

      <p>En Patagonia Protocol miramos la tierra de forma distinta. Para nosotros, el territorio (bosque, glaciar, río) es el <em>hardware</em>: potente y valioso, pero difícil de usar si no tiene la capa correcta encima.</p>

      <p>La conservación tradicional intenta gestionar ese hardware "a mano": es lento, caro y difícil de escalar. Por eso nos llamamos <em>Protocol</em>: en ciencias de la computación, un protocolo es un conjunto de reglas que permite que distintos sistemas funcionen juntos sin colapsar —es el sistema operativo.</p>

      <h2>La arquitectura del Protocolo</h2>

      <p>En lugar de vender parcelas (fragmentación), vendemos participación en el Protocolo (integración). Así funciona nuestro sistema operativo:</p>

      <ol>
        <li><strong>El Kernel (núcleo legal).</strong> En vez de subdividir la tierra, la mantenemos como una unidad indivisible bajo una SpA y aplicamos un Derecho Real de Conservación (DRC). Es el código base que impide la corrupción del sistema: prohíbe la subdivisión y el daño ambiental a perpetuidad.</li>
        <li><strong>La interfaz de usuario (UX / turismo).</strong> No quieres ser el administrador del parque; quieres disfrutarlo. El Protocolo gestiona la operación: concesionamos la hotelería y las expediciones a operadores expertos, y ofrecemos a los inversionistas una experiencia cuidada sin la carga operativa.</li>
        <li><strong>La red (tokenización).</strong> Digitalizamos derechos y flujos: convertimos la escritura en un activo digital líquido, permitiendo que el capital entre y salga de forma eficiente, algo difícil en el modelo inmobiliario tradicional.</li>
      </ol>

      <p>Un fondo es una bolsa de dinero estática; un protocolo es un estándar dinámico. Hoy instalamos este sistema operativo en nuestro primer activo —Ventisquero Grosse—, pero el valor real del software es su replicabilidad.</p>
    `
  },
  {
    slug: 'teoria-del-fractal',
    title: 'La Teoría del Fractal: Por qué el Patagonia Token no es una Moneda',
    date: '21 de Noviembre, 2025',
    category: 'Tokenomics',
    author: 'Eugenio Voticky',
    excerpt: 'No vendemos coordenadas GPS aisladas. Usamos la geometría fractal para crear un activo 3-en-1 que contiene el ADN completo del proyecto en cada unidad.',
    image: '/imagenes-blog/teoria-del-fractal.svg',
    contentHtml: `
      <p>En el mundo de las criptomonedas, la mayoría de los tokens son "fichas de casino". Representan una apuesta sobre el sentimiento del mercado, pero si abres la ficha, adentro no hay nada. Solo aire.</p>

      <p>En el mundo inmobiliario tradicional, la inversión funciona por fragmentación bruta. Si tienes un campo de 1.000 hectáreas y lo divides en 1.000 parcelas, destruyes el valor. Un bosque fragmentado vale menos que un bosque entero. Una hectárea aislada no puede sostener un hotel de lujo ni proteger un ecosistema.</p>

      <h2>El Helecho y el Dinero</h2>

      <p>Si miras un helecho en la Patagonia y te acercas con una lupa a una de sus hojas pequeñas (frondas), verás algo sorprendente: la hoja pequeña tiene exactamente la misma forma y estructura que el helecho completo. A esto se le llama autosimilitud: la parte contiene la información del todo.</p>

      <p>El Patagonia Token funciona igual. No es un pedazo de tierra cortado con tijeras (como un loteo). Es una célula financiera que replica, a escala micro, la estructura completa del negocio macro.</p>

      <h2>La Tríada de Valor (El ADN)</h2>

      <ol>
        <li><strong>Propiedad (El Respaldo - Equity)</strong> Al igual que el accionista mayoritario, el dueño del token es copropietario de la infraestructura y la tierra (a través de la SpA). Si la Patagonia se valoriza en los próximos 20 años por la escasez de agua y bosques vírgenes, tu token captura esa plusvalía. Es tu cobertura contra la inflación, respaldada por suelo real.</li>
        <li><strong>Renta (El Flujo - Yield)</strong> Aquí es donde nos diferenciamos de la "tierra pelada". La tierra por sí sola solo gasta dinero. Nuestro modelo incluye una OpCo (Operador Hotelero) que paga un arriendo por explotar turísticamente el lugar. Ese arriendo fluye hacia arriba y se distribuye. El token es como una cañería por donde pasa ese flujo de caja. Mientras el hotel tenga huéspedes, el token tiene rendimiento.</li>
        <li><strong>Acceso (La Utilidad - Utility)</strong> Un bono del Tesoro no te deja dormir en él. Una acción de Apple no te da descuentos en iPhones. El Patagonia Token sí. Al ser parte de la red, tienes derechos preferentes de uso: días de estadía, tarifas especiales en el Lodge y acceso a zonas de conservación cerradas al público general. Es el "dividendo emocional".</li>
      </ol>

      <h2>La Mitosis Financiera</h2>

      <p>Lo que hemos hecho es tomar la estructura de inversión de un Family Office (que pone USD 10 Millones para tener tierra + negocio + casa de veraneo) y la hemos sometido a un proceso de reproducción celular.</p>

      <p>Creamos miles de unidades idénticas en estructura, pero accesibles en precio.</p>

      <p>Un inversionista de USD 1.000 tiene exactamente la misma calidad de derechos, la misma protección legal y la misma exposición al negocio que un inversionista de USD 1 Millón. Solo cambia la escala, no la sustancia.</p>

      <p>Eso es un Fractal. Y por eso el Patagonia Token no es una moneda; es un organismo financiero vivo.</p>
    `
  }
];

export function findPost(slug: string){
  return POSTS.find(p=>p.slug===slug);
}
