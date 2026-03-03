import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import InscripcionForm from '@/components/register/InscripcionForm'

// ============================================
// METADATA SEO
// ============================================
export const metadata: Metadata = {
  title: 'Inscripción Curso Nivel Intermedio',
  description: 'Inscribite al curso de fotografía Nivel Intermedio de FoteArte. Llevá tu fotografía al siguiente nivel profesional en 8 semanas.',
  
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Inscripción Nivel Intermedio | FoteArte Paraguay',
    description: 'Formulario de inscripción al curso de fotografía Nivel Intermedio.',
    url: 'https://fotearte.com.py/cursos/inscripciones/nivel-intermedio',
  },

  alternates: {
    canonical: 'https://fotearte.com.py/cursos/inscripciones/nivel-intermedio',
  },
}

// ============================================
// DATOS DEL CURSO
// ============================================
const courseInfo = {
  id: 'nivel-intermedio',
  title: 'Nivel Intermedio',
  level: 'Nivel 02',
  price: '₲ 550.000 /mes',
  duration: '8 semanas',
  description: 'Lleva tu fotografía al siguiente nivel profesional. Domina el retrato en exteriores, aprende a dirigir sesiones y desarrolla tu estilo editorial.',
  highlights: ['Retrato Profesional', 'Dirección de Modelos', 'Fotografía Editorial', 'Portafolio Final'],
  schedule: 'Sábados de 09:00 a 11:00'
}

// ============================================
// PÁGINA
// ============================================
export default function InscripcionNivelIntermedioPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="relative py-16 md:py-20 overflow-hidden border-b border-neutral-900">
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
            <Link href="/cursos" className="hover:text-orange-600 transition-colors">
              Cursos
            </Link>
            <Icon icon="mdi:chevron-right" className="w-4 h-4" />
            <span className="text-neutral-400">Inscripción</span>
          </nav>

          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/10 border border-orange-600/30 rounded-full mb-6">
              <Icon icon="mdi:school-outline" className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-medium">Formulario de inscripción</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Inscripción
              <span className="text-neutral-400 font-light"> {courseInfo.title}</span>
            </h1>
            
            <p className="text-neutral-400 font-light max-w-xl mx-auto">
              {courseInfo.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {courseInfo.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="text-xs text-neutral-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* Requisito */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-full">
              <Icon icon="mdi:information-outline" className="w-4 h-4 text-neutral-400" />
              <span className="text-neutral-400 text-sm font-light">
                Requiere conocimientos de modo manual
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-6">
          <InscripcionForm course={courseInfo} />
        </div>
      </section>

      {/* Dudas */}
      <section className="py-12 border-t border-neutral-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-neutral-400 font-light mb-4">
            ¿Tenés dudas antes de inscribirte?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/institucional/faq"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-700 text-white font-light rounded-full hover:border-orange-600 hover:text-orange-600 transition-colors"
            >
              <Icon icon="mdi:help-circle-outline" className="w-5 h-5" />
              Ver preguntas frecuentes
            </Link>
            <Link
              href="https://wa.me/595973497799?text=Hola! Tengo una consulta sobre el curso Nivel Intermedio"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
            >
              <Icon icon="mdi:whatsapp" className="w-5 h-5" />
              Consultanos
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}