import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import FAQAccordion from '@/components/institucional/faq/FaqAccordion'

// ============================================
// METADATA SEO
// ============================================
export const metadata: Metadata = {
  title: 'Preguntas Frecuentes',
  description: 'Resolvemos tus dudas sobre los cursos de fotografía de FoteArte. Información sobre inscripción, metodología, requisitos, certificación y más.',
  
  keywords: [
    'preguntas frecuentes FoteArte',
    'dudas cursos fotografía',
    'inscripción cursos fotografía',
    'requisitos curso fotografía',
    'certificado fotografía Paraguay',
    'clases fotografía presenciales',
  ],

  openGraph: {
    title: 'Preguntas Frecuentes | FoteArte Paraguay',
    description: 'Toda la información que necesitás sobre nuestros cursos de fotografía.',
    url: 'https://fotearte.com.py/faq',
  },

  alternates: {
    canonical: 'https://fotearte.com.py/faq',
  },
}

// ============================================
// DATOS DE FAQ
// ============================================
const faqSections = [
  {
    id: 'cursos',
    title: 'Sobre nuestros cursos presenciales',
    icon: 'mdi:school-outline',
    faqs: [
      {
        question: '¿Qué tipo de cursos ofrece Fotearte?',
        answer: 'Fotearte ofrece cursos de fotografía con enfoque práctico y presencial, diseñados para todos los niveles: desde principiantes hasta fotógrafos avanzados. Cada curso combina teoría y práctica para desarrollar habilidades técnicas y creativas.'
      },
      {
        question: '¿Dónde se dictan las clases?',
        answer: 'Todas las clases son presenciales en nuestras instalaciones, donde contarás con espacio de estudio, equipo fotográfico y apoyo directo de nuestros profesores. Tenemos sedes en Asunción, Ciudad del Este, Villarrica, Encarnación y Coronel Oviedo.'
      },
      {
        question: '¿Qué duración tienen los cursos?',
        answer: 'La duración varía según el curso o taller. Los cursos de nivel inicial e intermedio tienen una duración de 8 semanas con clases semanales de 2 horas. También ofrecemos talleres intensivos de fin de semana. Para conocer fechas y horarios específicos, revisá nuestro calendario académico o contactanos.'
      },
      {
        question: '¿Qué se aprende en las clases presenciales?',
        answer: 'En nuestras clases presenciales aprenderás desde los fundamentos de la cámara y la exposición hasta técnicas avanzadas de composición, iluminación, retrato y edición, con ejercicios prácticos en cada sesión.'
      }
    ]
  },
  {
    id: 'inscripcion',
    title: 'Inscripción y requisitos',
    icon: 'mdi:clipboard-text-outline',
    faqs: [
      {
        question: '¿Necesito experiencia previa en fotografía?',
        answer: 'No, nuestros cursos están diseñados tanto para quienes nunca han tomado una cámara en la mano como para quienes ya tienen experiencia y desean profundizar sus conocimientos. El nivel inicial no requiere conocimientos previos.'
      },
      {
        question: '¿Qué equipo debo traer?',
        answer: 'Se recomienda traer tu propia cámara (réflex, mirrorless o cámara con modo manual). También podés practicar con cámaras de la escuela cuando sea necesario, pero lo ideal es usar tu equipo personal para desarrollar tu estilo. Si no tenés cámara, consultanos sobre nuestro servicio de préstamo durante las clases.'
      },
      {
        question: '¿Cómo me inscribo y cuándo abren las inscripciones?',
        answer: 'Las inscripciones se realizan directamente en nuestra escuela, a través de WhatsApp o mediante el formulario de contacto en línea. Tenemos varias fechas de inicio durante el año para que puedas elegir la que mejor se adapte a tu tiempo. Las inscripciones suelen abrir 3-4 semanas antes del inicio de cada ciclo.'
      },
      {
        question: '¿Cuáles son las formas de pago?',
        answer: 'Aceptamos efectivo, transferencias bancarias, tarjetas de débito y crédito. El pago se realiza mensualmente. También ofrecemos descuentos por pago anticipado del curso completo.'
      }
    ]
  },
  {
    id: 'metodologia',
    title: 'Metodología y clases',
    icon: 'mdi:lightbulb-outline',
    faqs: [
      {
        question: '¿Las clases son teóricas o prácticas?',
        answer: 'Son una combinación de teoría y práctica. Cada clase incluye explicación de conceptos junto con ejercicios y salidas fotográficas para que puedas aplicar inmediatamente lo aprendido. Aproximadamente el 60% del tiempo es práctica.'
      },
      {
        question: '¿Qué pasa si me pierdo una clase?',
        answer: 'Dependiendo del curso, ofrecemos recuperación con otro grupo o material de apoyo para que no pierdas el contenido. Es importante que nos avises con anticipación si no podés asistir a alguna clase.'
      },
      {
        question: '¿Voy a recibir retroalimentación personalizada?',
        answer: 'Sí, cada alumno recibe feedback individual sobre sus trabajos. Nuestros grupos son reducidos (máximo 12 personas) para garantizar atención personalizada. Además, tenés acceso a consultas por WhatsApp entre clases.'
      },
      {
        question: '¿Hay tareas o trabajos prácticos entre clases?',
        answer: 'Sí, cada semana tendrás ejercicios prácticos para realizar por tu cuenta. Estos trabajos se revisan en la siguiente clase y son fundamentales para tu aprendizaje y progreso.'
      }
    ]
  },
  {
    id: 'certificacion',
    title: 'Certificación y beneficios',
    icon: 'mdi:certificate-outline',
    faqs: [
      {
        question: '¿Recibo un certificado?',
        answer: 'Sí, al finalizar y aprobar tu curso, recibirás un certificado de participación que avala las competencias adquiridas durante las clases. El certificado incluye las horas de formación y los temas cubiertos.'
      },
      {
        question: '¿Puedo usar lo aprendido para trabajar profesionalmente?',
        answer: 'Por supuesto, la metodología práctica y personalizada te prepara para aplicar tus conocimientos en proyectos personales o para comenzar a trabajar como fotógrafo. Muchos de nuestros egresados hoy trabajan profesionalmente en fotografía.'
      },
      {
        question: '¿Tienen bolsa de trabajo o contactos profesionales?',
        answer: 'Contamos con una red de egresados y profesionales del rubro. Frecuentemente compartimos oportunidades laborales y colaboraciones en nuestros grupos. Además, organizamos eventos de networking para conectar a nuestros alumnos con el mercado.'
      },
      {
        question: '¿Puedo repetir el curso si no quedé conforme?',
        answer: 'Ofrecemos la posibilidad de asistir como oyente a clases específicas si sentís que necesitás reforzar algún tema. Consultanos sobre las condiciones para cada caso.'
      }
    ]
  },
  {
    id: 'alquiler',
    title: 'Alquiler de equipos',
    icon: 'mdi:camera-outline',
    faqs: [
      {
        question: '¿Puedo alquilar equipos aunque no sea alumno?',
        answer: 'Sí, nuestro servicio de alquiler de equipos está disponible para cualquier persona. Contamos con cámaras, lentes, luces y accesorios de las mejores marcas. Solo necesitás presentar documento de identidad y completar un formulario.'
      },
      {
        question: '¿Los alumnos tienen descuento en alquiler?',
        answer: 'Sí, los alumnos activos y egresados tienen un 20% de descuento en todos los alquileres de equipos. Este beneficio es permanente para nuestra comunidad.'
      },
      {
        question: '¿Hacen envíos al interior?',
        answer: 'Sí, realizamos envíos a todo el país. Los costos de envío varían según la ubicación y el tipo de equipo. Contactanos para más información sobre envíos a tu ciudad.'
      }
    ]
  }
]

// Navegación rápida
const quickNav = faqSections.map(section => ({
  id: section.id,
  title: section.title.replace('Sobre nuestros ', '').replace('Sobre ', ''),
  icon: section.icon
}))

// ============================================
// JSON-LD
// ============================================
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSections.flatMap(section => 
    section.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  )
}

// ============================================
// PÁGINA
// ============================================
export default function FAQPage() {
  const totalQuestions = faqSections.reduce((acc, section) => acc + section.faqs.length, 0)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-28 overflow-hidden">
          {/* Fondo decorativo */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/[0.03] rounded-full blur-3xl" />
          </div>

          <div className="flex flex-col gap-4 justify-center items-center text-center z-10 max-w-4xl mx-auto px-6">
            <p className="text-orange-600 text-sm font-light tracking-[0.3em] uppercase">
              Centro de Ayuda
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white pb-2 leading-tight">
              Preguntas
              <span className="text-neutral-400 font-light"> Frecuentes</span>
            </h1>
            <p className="text-neutral-400 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Encontrá respuestas a las dudas más comunes sobre nuestros cursos, 
              inscripción, metodología y más.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto px-6">
            <FAQAccordion sections={faqSections} />
          </div>
        </section>

        {/* CTA - ¿No encontraste tu respuesta? */}
        <section className="py-20 border-t border-neutral-900 bg-neutral-900/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-600/10 mx-auto mb-6">
              <Icon icon="mdi:message-question-outline" className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              ¿No encontraste tu respuesta?
            </h2>
            <p className="text-neutral-400 font-light mb-8 max-w-xl mx-auto">
              Si tenés otra duda que no está aquí, contactanos directamente y te responderemos lo antes posible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/595973497799?text=Hola! Tengo una consulta sobre los cursos"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                Escribinos por WhatsApp
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-700 text-white font-light rounded-full hover:border-orange-600 hover:text-orange-600 transition-colors duration-300"
              >
                <Icon icon="mdi:email-outline" className="w-5 h-5" />
                Enviar consulta
              </Link>
            </div>
          </div>
        </section>

        {/* Links útiles */}
        <section className="py-16 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-xl font-semibold text-white mb-8 text-center">
              También te puede interesar
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/cursos"
                className="group flex items-center gap-4 p-5 bg-neutral-900/30 border border-neutral-800 rounded-xl hover:border-orange-600/50 transition-colors duration-200"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-600/10 group-hover:bg-orange-600/20 transition-colors duration-200">
                  <Icon icon="mdi:school-outline" className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-white font-semibold">Ver cursos</p>
                  <p className="text-neutral-500 text-sm font-light">Explorá nuestros programas</p>
                </div>
                <Icon icon="mdi:chevron-right" className="w-5 h-5 text-neutral-600 ml-auto group-hover:text-orange-600 transition-colors duration-200" />
              </Link>

              <Link
                href="/cameras"
                className="group flex items-center gap-4 p-5 bg-neutral-900/30 border border-neutral-800 rounded-xl hover:border-orange-600/50 transition-colors duration-200"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-600/10 group-hover:bg-orange-600/20 transition-colors duration-200">
                  <Icon icon="mdi:camera-outline" className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-white font-semibold">Alquiler de equipos</p>
                  <p className="text-neutral-500 text-sm font-light">Cámaras y accesorios</p>
                </div>
                <Icon icon="mdi:chevron-right" className="w-5 h-5 text-neutral-600 ml-auto group-hover:text-orange-600 transition-colors duration-200" />
              </Link>

              <Link
                href="/contacto"
                className="group flex items-center gap-4 p-5 bg-neutral-900/30 border border-neutral-800 rounded-xl hover:border-orange-600/50 transition-colors duration-200"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-600/10 group-hover:bg-orange-600/20 transition-colors duration-200">
                  <Icon icon="mdi:map-marker-outline" className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-white font-semibold">Nuestras sedes</p>
                  <p className="text-neutral-500 text-sm font-light">Encontrá la más cercana</p>
                </div>
                <Icon icon="mdi:chevron-right" className="w-5 h-5 text-neutral-600 ml-auto group-hover:text-orange-600 transition-colors duration-200" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}