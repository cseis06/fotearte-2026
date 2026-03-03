import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import InscripcionForm from '@/components/register/InscripcionForm'

// ============================================
// METADATA SEO
// ============================================
export const metadata: Metadata = {
  title: 'Inscripción Curso Nivel Inicial',
  description: 'Inscribite al curso de fotografía Nivel Inicial de FoteArte. Aprendé los fundamentos de la fotografía en 8 semanas.',
  
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Inscripción Nivel Inicial | FoteArte Paraguay',
    description: 'Formulario de inscripción al curso de fotografía Nivel Inicial.',
    url: 'https://fotearte.com.py/cursos/inscripciones/nivel-inicial',
  },

  alternates: {
    canonical: 'https://fotearte.com.py/cursos/inscripciones/nivel-inicial',
  },
}

// ============================================
// DATOS DEL CURSO
// ============================================
const courseInfo = {
  id: 'nivel-inicial',
  title: 'Nivel Inicial',
  level: 'Nivel 01',
  price: '₲ 480.000 /mes',
  duration: '8 semanas',
  description: 'Aprende a dominar tu equipo desde cero. Descubre los fundamentos de la exposición manual, el triángulo de luz y las reglas de composición esenciales.',
  highlights: ['Mirada Fotográfica', 'Modo Manual', 'Composición', 'Retrato Natural', 'Safari Fotográfico'],
  schedule: 'Sábados de 15:00 a 17:00'
}

// ============================================
// PÁGINA
// ============================================
export default function InscripcionNivelInicialPage() {
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
              href="https://wa.me/595973497799?text=Hola! Tengo una consulta sobre el curso Nivel Inicial"
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