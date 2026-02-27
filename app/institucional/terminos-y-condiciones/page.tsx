import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'

// ============================================
// METADATA SEO
// ============================================
export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso del sitio web y servicios de FoteArte Paraguay. Información sobre inscripciones, pagos, cancelaciones y más.',
  
  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://fotearte.com.py/institucional/terminos-y-condiciones',
  },
}

// ============================================
// DATOS
// ============================================
const sections = [
  {
    id: 'generales',
    icon: 'mdi:file-document-outline',
    title: 'Condiciones Generales',
    content: [
      {
        subtitle: 'Aceptación de los términos',
        text: 'Al acceder y utilizar el sitio web de Fotearte (fotearte.com.py) y/o contratar nuestros servicios, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con alguna parte de estos términos, le recomendamos no utilizar nuestros servicios.'
      },
      {
        subtitle: 'Modificaciones',
        text: 'Fotearte se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web. El uso continuado de nuestros servicios después de cualquier modificación constituye la aceptación de los nuevos términos.'
      }
    ]
  },
  {
    id: 'cursos',
    icon: 'mdi:school-outline',
    title: 'Cursos y Talleres',
    content: [
      {
        subtitle: 'Inscripción',
        text: 'La inscripción a nuestros cursos se realiza mediante el pago de la matrícula correspondiente. La reserva de cupo se confirma únicamente con el pago efectivo. Los cupos son limitados y se asignan por orden de inscripción.'
      },
      {
        subtitle: 'Requisitos',
        text: 'Cada curso tiene requisitos específicos detallados en su descripción. Es responsabilidad del alumno verificar que cumple con los requisitos antes de inscribirse. Para cursos de nivel intermedio o avanzado, se requiere haber completado el nivel anterior o demostrar conocimientos equivalentes.'
      },
      {
        subtitle: 'Asistencia',
        text: 'Se requiere un mínimo de 75% de asistencia para obtener el certificado de finalización. Las inasistencias deben ser comunicadas con anticipación. La recuperación de clases está sujeta a disponibilidad y políticas específicas de cada curso.'
      },
      {
        subtitle: 'Material y equipos',
        text: 'El material didáctico digital está incluido en el costo del curso. Los equipos fotográficos de práctica están disponibles durante las clases, pero se recomienda que cada alumno cuente con su propio equipo para las actividades fuera del aula.'
      }
    ]
  },
  {
    id: 'pagos',
    icon: 'mdi:credit-card-outline',
    title: 'Pagos y Facturación',
    content: [
      {
        subtitle: 'Formas de pago',
        text: 'Aceptamos pagos en efectivo, transferencias bancarias, y tarjetas de débito y crédito. El pago de los cursos se realiza de forma mensual, salvo que se opte por el pago anticipado del programa completo.'
      },
      {
        subtitle: 'Precios',
        text: 'Los precios publicados están expresados en Guaraníes (₲) e incluyen IVA cuando corresponde. Fotearte se reserva el derecho de modificar los precios, aunque los cambios no afectarán a las inscripciones ya confirmadas.'
      },
      {
        subtitle: 'Facturación',
        text: 'Se emite factura por todos los pagos realizados. Para solicitar factura con RUC, el dato debe ser proporcionado al momento del pago. No se realizan cambios de facturación una vez emitido el comprobante.'
      }
    ]
  },
  {
    id: 'cancelaciones',
    icon: 'mdi:calendar-remove-outline',
    title: 'Cancelaciones y Reembolsos',
    content: [
      {
        subtitle: 'Cancelación por parte del alumno',
        text: 'Las cancelaciones realizadas con más de 7 días de anticipación al inicio del curso tendrán derecho a reembolso del 80% del monto pagado. Cancelaciones con menos de 7 días no tendrán derecho a reembolso, pero podrán transferir su inscripción a un curso posterior dentro de los siguientes 6 meses.'
      },
      {
        subtitle: 'Cancelación por parte de Fotearte',
        text: 'En caso de que Fotearte deba cancelar un curso por no alcanzar el cupo mínimo u otras razones, se ofrecerá al alumno la opción de trasladar su inscripción a otra fecha o recibir el reembolso total del monto pagado.'
      },
      {
        subtitle: 'Reprogramaciones',
        text: 'Fotearte se reserva el derecho de reprogramar fechas o cambiar instructores por razones de fuerza mayor, notificando a los alumnos con la mayor anticipación posible.'
      }
    ]
  },
  {
    id: 'alquiler',
    icon: 'mdi:camera-outline',
    title: 'Alquiler de Equipos',
    content: [
      {
        subtitle: 'Condiciones de alquiler',
        text: 'El alquiler de equipos requiere la presentación de documento de identidad vigente y la firma de un contrato de alquiler. Se requiere un depósito de garantía que será devuelto al momento de la devolución del equipo en perfectas condiciones.'
      },
      {
        subtitle: 'Responsabilidad',
        text: 'El arrendatario es responsable del equipo desde el momento de la entrega hasta su devolución. Cualquier daño, pérdida o robo durante el período de alquiler será responsabilidad del arrendatario, quien deberá cubrir los costos de reparación o reposición.'
      },
      {
        subtitle: 'Devolución',
        text: 'Los equipos deben ser devueltos en la fecha y hora acordadas. Las devoluciones tardías generarán cargos adicionales equivalentes al valor diario del alquiler por cada día de retraso.'
      }
    ]
  },
  {
    id: 'propiedad',
    icon: 'mdi:shield-check-outline',
    title: 'Propiedad Intelectual',
    content: [
      {
        subtitle: 'Contenido del sitio',
        text: 'Todo el contenido del sitio web, incluyendo textos, imágenes, logotipos, videos y material didáctico, es propiedad de Fotearte o de sus respectivos autores y está protegido por las leyes de propiedad intelectual.'
      },
      {
        subtitle: 'Trabajos de los alumnos',
        text: 'Las fotografías y trabajos realizados por los alumnos durante los cursos son propiedad de sus autores. Fotearte podrá utilizar estos trabajos con fines promocionales y educativos, siempre dando crédito al autor, salvo que el alumno indique expresamente lo contrario.'
      }
    ]
  },
  {
    id: 'limitacion',
    icon: 'mdi:alert-circle-outline',
    title: 'Limitación de Responsabilidad',
    content: [
      {
        subtitle: 'Servicios',
        text: 'Fotearte se compromete a brindar servicios de calidad, pero no garantiza resultados específicos derivados de la participación en los cursos. El aprovechamiento del contenido depende del esfuerzo y dedicación de cada alumno.'
      },
      {
        subtitle: 'Sitio web',
        text: 'Fotearte no se responsabiliza por interrupciones temporales del sitio web, errores técnicos o inexactitudes en la información publicada. Nos esforzamos por mantener la información actualizada, pero recomendamos confirmar los detalles directamente con nuestro equipo.'
      }
    ]
  }
]

// ============================================
// PÁGINA
// ============================================
export default function TerminosPage() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
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
            <Link href="/institucional" className="hover:text-orange-600 transition-colors">
              Institucional
            </Link>
            <Icon icon="mdi:chevron-right" className="w-4 h-4" />
            <span className="text-neutral-400">Términos y Condiciones</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-600/10 mb-6">
              <Icon icon="mdi:file-sign" className="w-7 h-7 text-orange-600" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Términos y
              <span className="text-neutral-400 font-light"> Condiciones</span>
            </h1>
            <p className="text-neutral-500 font-light">
              Última actualización: Enero {currentYear}
            </p>
          </div>

          {/* Índice rápido */}
          <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6 mb-12">
            <p className="text-white font-semibold mb-4">Contenido</p>
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-800/50 rounded-full text-sm text-neutral-400 font-light hover:bg-orange-600/20 hover:text-orange-600 transition-colors duration-200"
                >
                  <Icon icon={section.icon} className="w-4 h-4" />
                  {section.title}
                </a>
              ))}
            </div>
          </div>

          {/* Contenido */}
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="flex items-center gap-3 text-xl font-semibold text-white mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-600/10">
                    <Icon icon={section.icon} className="w-5 h-5 text-orange-600" />
                  </div>
                  {section.title}
                </h2>
                
                <div className="space-y-6 pl-0 md:pl-13">
                  {section.content.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-white font-medium mb-2">{item.subtitle}</h3>
                      <p className="text-neutral-400 font-light leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contacto */}
            <div className="border-t border-neutral-800 pt-12">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8">
                <h2 className="flex items-center gap-3 text-xl font-semibold text-white mb-4">
                  <Icon icon="mdi:help-circle-outline" className="w-6 h-6 text-orange-600" />
                  ¿Tenés dudas?
                </h2>
                <p className="text-neutral-400 font-light leading-relaxed mb-6">
                  Si tenés preguntas sobre estos términos y condiciones, no dudes en contactarnos. 
                  Estamos para ayudarte.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
                  >
                    Contactar
                    <Icon icon="mdi:arrow-right" className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 text-white font-light rounded-full hover:border-orange-600 hover:text-orange-600 transition-colors duration-300"
                  >
                    Ver FAQ
                  </Link>
                </div>
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
              href="/institucional/privacidad"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-full text-sm text-neutral-400 font-light hover:border-orange-600 hover:text-orange-600 transition-colors duration-200"
            >
              <Icon icon="mdi:shield-lock-outline" className="w-4 h-4" />
              Política de Privacidad
            </Link>
            <Link
              href="/copyright"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-full text-sm text-neutral-400 font-light hover:border-orange-600 hover:text-orange-600 transition-colors duration-200"
            >
              <Icon icon="mdi:copyright" className="w-4 h-4" />
              Derechos de Autor
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}