import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'

// ============================================
// METADATA SEO
// ============================================
export const metadata: Metadata = {
  title: 'Aviso de Derechos de Autor',
  description: 'Información sobre los derechos de autor y uso del material contenido en el sitio web de FoteArte Paraguay.',
  
  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://fotearte.com.py/institucional/copyright',
  },
}

// ============================================
// PÁGINA
// ============================================
export default function CopyrightPage() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Inicio
            </Link>
            <Icon icon="mdi:chevron-right" className="w-4 h-4" />
            <span className="text-neutral-400">Institucional</span>
            <Icon icon="mdi:chevron-right" className="w-4 h-4" />
            <span className="text-neutral-400">Derechos de Autor</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-600/10 mb-6">
              <Icon icon="mdi:copyright" className="w-7 h-7 text-orange-600" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Aviso de Derechos
              <span className="text-neutral-400 font-light"> de Autor</span>
            </h1>
            <p className="text-neutral-500 font-light">
              Última actualización: {currentYear}
            </p>
          </div>

          {/* Contenido */}
          <div className="prose prose-invert prose-neutral max-w-none">
            <div className="space-y-8">
              {/* Sección principal */}
              <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6 md:p-8">
                <p className="text-neutral-300 font-light leading-relaxed text-lg">
                  A menos que se indique expresamente lo contrario, <strong className="text-white font-semibold">Fotearte</strong> reclama 
                  los derechos de autor de todo el material contenido en este sitio web.
                </p>
              </div>

              {/* Uso permitido */}
              <div>
                <h2 className="flex items-center gap-3 text-xl font-semibold text-white mb-4">
                  <Icon icon="mdi:check-circle-outline" className="w-6 h-6 text-green-500" />
                  Uso permitido
                </h2>
                <p className="text-neutral-400 font-light leading-relaxed mb-4">
                  Usted puede descargar, visualizar, imprimir y reproducir este material en forma 
                  inalterada para su <strong className="text-white">uso personal</strong>, pero en ningún caso con fines comerciales.
                </p>
                <ul className="space-y-2">
                  {[
                    'Descarga para uso personal',
                    'Visualización del contenido',
                    'Impresión para referencia personal',
                    'Reproducción sin alteraciones'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-neutral-400 font-light">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Restricciones */}
              <div>
                <h2 className="flex items-center gap-3 text-xl font-semibold text-white mb-4">
                  <Icon icon="mdi:close-circle-outline" className="w-6 h-6 text-red-500" />
                  Restricciones
                </h2>
                <p className="text-neutral-400 font-light leading-relaxed mb-4">
                  Fotearte se reserva el derecho de revocar dicha autorización en cualquier momento. 
                  Aparte de este permiso y de los usos permitidos por la legislación vigente en materia 
                  de propiedad intelectual, <strong className="text-white">todos los demás derechos están reservados</strong>.
                </p>
                <ul className="space-y-2">
                  {[
                    'Uso comercial sin autorización',
                    'Modificación del material',
                    'Redistribución sin permiso',
                    'Uso que infrinja derechos de terceros'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-neutral-400 font-light">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solicitud de autorización */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8">
                <h2 className="flex items-center gap-3 text-xl font-semibold text-white mb-4">
                  <Icon icon="mdi:email-outline" className="w-6 h-6 text-orange-600" />
                  Solicitud de autorización
                </h2>
                <p className="text-neutral-400 font-light leading-relaxed mb-6">
                  Las solicitudes de nuevas autorizaciones, incluyendo aquellas destinadas a utilizar 
                  el material de este sitio web con fines comerciales, deberán dirigirse a nuestro 
                  equipo a través del formulario de contacto.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
                >
                  Contactar
                  <Icon icon="mdi:arrow-right" className="w-5 h-5" />
                </Link>
              </div>

              {/* Nota legal */}
              <div className="border-t border-neutral-800 pt-8">
                <p className="text-neutral-500 font-light text-sm leading-relaxed">
                  Este aviso de derechos de autor se aplica a todo el contenido del sitio web 
                  fotearte.com.py, incluyendo pero no limitado a: textos, imágenes, fotografías, 
                  gráficos, logotipos, iconos, videos y cualquier otro material protegido por 
                  derechos de autor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links relacionados */}
      <section className="py-12 border-t border-neutral-900">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-neutral-500 text-sm mb-4">Documentos relacionados</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/institucional/terminos-y-condiciones"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-full text-sm text-neutral-400 font-light hover:border-orange-600 hover:text-orange-600 transition-colors duration-200"
            >
              <Icon icon="mdi:file-document-outline" className="w-4 h-4" />
              Términos y Condiciones
            </Link>
            <Link
              href="/institucional/privacidad"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-full text-sm text-neutral-400 font-light hover:border-orange-600 hover:text-orange-600 transition-colors duration-200"
            >
              <Icon icon="mdi:shield-lock-outline" className="w-4 h-4" />
              Política de Privacidad
            </Link>
            <Link
              href="/institucional/faq"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-full text-sm text-neutral-400 font-light hover:border-orange-600 hover:text-orange-600 transition-colors duration-200"
            >
              <Icon icon="mdi:help-circle-outline" className="w-4 h-4" />
              Preguntas Frecuentes
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}