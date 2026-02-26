import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import CourseAccordion from '@/components/courses/CourseAccordion'

// Imagen de fondo del hero
import HeroBg from '../../public/bg/courses.png'

// Imágenes de cursos
import InicialImg from '../../public/courses/inicial.jpg'
import IntermedioImg from '../../public/courses/intermedio.jpg'

// ============================================
// METADATA SEO
// ============================================
export const metadata: Metadata = {
  title: 'Cursos de Fotografía',
  description: 'Cursos de fotografía en Paraguay para todos los niveles. Desde principiantes hasta profesionales. Aprende composición, retrato, iluminación y más. Clases presenciales en Asunción con equipos incluidos.',
  
  keywords: [
    'cursos fotografía Paraguay',
    'clases fotografía Asunción',
    'aprender fotografía',
    'curso fotografía principiantes',
    'curso fotografía profesional',
    'taller fotografía',
    'escuela fotografía Paraguay',
    'curso retrato fotográfico',
    'curso composición fotográfica',
    'FoteArte cursos',
  ],

  openGraph: {
    title: 'Cursos de Fotografía | FoteArte Paraguay',
    description: 'Programas profesionales de fotografía. Nivel inicial e intermedio. Clases prácticas con equipos incluidos.',
    url: 'https://fotearte.com.py/cursos',
    images: [{ url: '/og-cursos.jpg', width: 1200, height: 630 }],
  },

  alternates: {
    canonical: 'https://fotearte.com.py/cursos',
  },
}

// ============================================
// DATOS DE CURSOS
// ============================================
const courses = [
  {
    id: "inicial",
    level: "01",
    title: "Nivel Inicial",
    subtitle: "De automático a manual",
    description: "Aprende a dominar tu equipo desde cero. Descubre los fundamentos de la exposición manual, el triángulo de luz y las reglas de composición esenciales para crear imágenes impactantes. Ideal para entusiastas que buscan dejar el modo automático.",
    longDescription: "Este curso está diseñado para quienes desean dar sus primeros pasos en la fotografía o para aquellos que quieren dejar atrás el modo automático de su cámara. A lo largo de 8 semanas, aprenderás no solo la técnica, sino también a desarrollar tu mirada fotográfica única.",
    duration: "8 Semanas",
    totalClasses: 8,
    schedule: "Sábados de 09:00 a 11:00",
    price: "550.000",
    currency: "₲",
    priceNote: "por mes",
    image: InicialImg,
    slug: "/cursos/nivel-inicial",
    highlights: ["Mirada Fotográfica", "Modo Manual", "Composición", "Retrato Natural", "Safari Fotográfico"],
    includes: [
      "Cámara disponible durante las clases",
      "Material didáctico digital",
      "Acceso a grupo exclusivo",
      "Certificado de finalización",
      "Feedback personalizado"
    ],
    requirements: [
      "No se requiere experiencia previa",
      "Cámara propia (opcional, tenemos equipos)",
      "Ganas de aprender y practicar"
    ],
    classes: [
      {
        number: 1,
        title: "La Mirada Fotográfica",
        theme: "Aprender a ver",
        topics: [
          "Historia breve sobre la Fotografía",
          "Qué es realmente fotografiar",
          "La fotografía como forma de observar la vida",
          "Ejercicio sin cámara: observar luz y sombras"
        ],
        concept: "Luz y emoción"
      },
      {
        number: 2,
        title: "Dominio de la Cámara",
        theme: "De automático a manual",
        topics: [
          "Velocidad de obturación",
          "Diafragma y profundidad de campo",
          "ISO y sensibilidad",
          "Balance de blancos",
          "Lentes y su lenguaje visual"
        ],
        concept: "Controlar la luz es controlar la imagen"
      },
      {
        number: 3,
        title: "Composición en Movimiento",
        theme: "Las reglas del encuadre",
        topics: [
          "Regla de los tercios",
          "Línea de horizonte",
          "Dirección de la mirada",
          "Equilibrio visual"
        ],
        concept: "Orden dentro del caos"
      },
      {
        number: 4,
        title: "Fotografía Abstracta",
        theme: "Ver más allá",
        topics: [
          "Capturar texturas",
          "Trabajar con líneas",
          "Juego de sombras",
          "Minimalismo fotográfico"
        ],
        concept: "Ver más allá de lo evidente"
      },
      {
        number: 5,
        title: "Documental Urbano",
        theme: "Street Photography",
        topics: [
          "Narrar historias reales",
          "Capturar la esencia de la ciudad",
          "El momento decisivo",
          "Ética en fotografía callejera"
        ],
        concept: "Cada persona es una historia"
      },
      {
        number: 6,
        title: "Retrato Natural",
        theme: "Conectar con el sujeto",
        topics: [
          "Cómo dirigir sin intimidar",
          "Crear confianza con el modelo",
          "Luz natural en retratos",
          "Poses básicas y naturales"
        ],
        concept: "La conexión antes que la técnica"
      },
      {
        number: 7,
        title: "Safari Fotográfico",
        theme: "Amanecer o Atardecer",
        topics: [
          "Luz natural y paciencia",
          "Golden hour y blue hour",
          "Paisaje y naturaleza",
          "Práctica en exteriores"
        ],
        concept: "La luz es protagonista"
      },
      {
        number: 8,
        title: "Presentación Final",
        theme: "Tu primera exposición",
        topics: [
          "Presentación de mejores fotos del curso",
          "Explicación de intención artística",
          "Feedback profesional",
          "Entrega de certificados"
        ],
        concept: "El inicio de tu camino"
      }
    ]
  },
  {
    id: "intermedio",
    level: "02",
    title: "Nivel Intermedio",
    subtitle: "Producción profesional",
    description: "Lleva tu fotografía al siguiente nivel profesional. Domina el retrato en exteriores, aprende a dirigir sesiones con diferentes sujetos y desarrolla tu propio estilo editorial. Para quienes ya dominan el modo manual.",
    longDescription: "Este curso está diseñado para fotógrafos que ya manejan los conceptos básicos y quieren dar el salto al mundo profesional. Aprenderás a trabajar con clientes reales, dirigir sesiones completas y desarrollar un portafolio profesional.",
    duration: "8 Semanas",
    totalClasses: 8,
    schedule: "Sábados de 09:00 a 11:00",
    price: "600.000",
    currency: "₲",
    priceNote: "por mes",
    image: IntermedioImg,
    slug: "/cursos/nivel-intermedio",
    highlights: ["Retrato Profesional", "Dirección de Modelos", "Fotografía Editorial", "Portafolio Final"],
    includes: [
      "Modelos profesionales para prácticas",
      "Acceso a locaciones exclusivas",
      "Rebotadores y equipos de luz",
      "Certificado profesional",
      "Mentoría post-curso"
    ],
    requirements: [
      "Manejo del modo manual",
      "Conocimientos básicos de composición",
      "Cámara propia (recomendado)",
      "Haber cursado nivel inicial o equivalente"
    ],
    classes: [
      {
        number: 1,
        title: "Introducción al Nivel Profesional",
        theme: "Pensar como fotógrafo",
        topics: [
          "Repaso práctico del modo manual",
          "Composición aplicada al retrato",
          "Análisis de errores comunes",
          "Flujo de trabajo profesional",
          "Cómo pensar como fotógrafo y no como estudiante"
        ],
        concept: "La mentalidad lo cambia todo"
      },
      {
        number: 2,
        title: "Retrato Masculino en Exteriores",
        theme: "Fuerza y presencia",
        topics: [
          "Cómo dirigir a un hombre",
          "Postura, lenguaje corporal y presencia",
          "Uso de luz natural dura vs suave",
          "Uso correcto del rebotador",
          "Fotografía en sombra abierta"
        ],
        concept: "La dirección define el resultado"
      },
      {
        number: 3,
        title: "Retrato Femenino en Exteriores",
        theme: "Elegancia y naturalidad",
        topics: [
          "Cómo fotografiar a una mujer",
          "Ángulos favorecedores",
          "Dirección suave y natural",
          "Manejo de cabello y movimiento",
          "Luz lateral y contraluz"
        ],
        concept: "Cada mujer tiene su luz"
      },
      {
        number: 4,
        title: "Fotografía de Parejas",
        theme: "Capturar conexiones",
        topics: [
          "Cómo dirigir interacción natural",
          "Crear conexión real en cámara",
          "Movimiento vs poses estáticas",
          "Uso creativo del entorno",
          "Storytelling visual"
        ],
        concept: "El amor se captura, no se posa"
      },
      {
        number: 5,
        title: "Fotografía Infantil",
        theme: "Espontaneidad y paciencia",
        topics: [
          "Psicología básica para trabajar con niños",
          "Capturar espontaneidad",
          "Cómo trabajar con padres",
          "Luz suave y horarios ideales",
          "Movimiento y enfoque en acción"
        ],
        concept: "Los niños no posan, juegan"
      },
      {
        number: 6,
        title: "Producción: Sesión Quinceañera",
        theme: "Tu primera producción completa",
        topics: [
          "Planificación previa de sesión",
          "Dirección artística básica",
          "Elección de locación",
          "Control de luz natural en diferentes escenarios",
          "Simulación de sesión contratada"
        ],
        concept: "Planificar es profesionalizar"
      },
      {
        number: 7,
        title: "Beauty & Retrato Editorial",
        theme: "El detalle importa",
        topics: [
          "Enfoque en detalle",
          "Dirección más precisa",
          "Cuidado de piel en cámara",
          "Luz suave, ventanas y contraluz",
          "Estilo editorial aplicado"
        ],
        concept: "Inspiración aplicada, no copiada"
      },
      {
        number: 8,
        title: "Presentación Final",
        theme: "Tu portafolio profesional",
        topics: [
          "Presentación del portafolio final",
          "Análisis grupal profesional",
          "Feedback técnico y artístico",
          "Entrega de certificados",
          "Menciones especiales"
        ],
        concept: "El comienzo de tu carrera"
      }
    ]
  }
]

// ============================================
// JSON-LD
// ============================================
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Cursos de Fotografía FoteArte',
  description: 'Programas de formación en fotografía profesional',
  itemListElement: courses.map((course, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Course',
      name: `Curso de Fotografía ${course.title}`,
      description: course.description,
      provider: {
        '@type': 'Organization',
        name: 'FoteArte Paraguay',
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'onsite',
        duration: 'P8W',
      },
    },
  })),
}

// ============================================
// PÁGINA
// ============================================
export default function CursosPage() {
  const totalCourses = courses.length
  const totalClasses = courses.reduce((acc, course) => acc + course.totalClasses, 0)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-black">
        {/* Hero Section con imagen de fondo */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <Image
              src={HeroBg}
              alt="Cursos de fotografía profesional"
              fill
              className="object-cover object-center"
              priority
              placeholder="blur"
            />
            {/* Overlay oscuro para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          {/* Contenido */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-30">
            <div className="max-w-2xl flex flex-col justify-center items-center text-center mx-auto">
              <p className="text-orange-600 text-sm font-light tracking-[0.3em] uppercase mb-4">
                Formación Profesional
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                Cursos de Fotografía
                <span className="text-neutral-400 font-light"> para todos los niveles</span>
              </h1>
              <p className="text-neutral-300 font-light text-lg md:text-xl leading-relaxed mb-10">
                Programas diseñados para transformar tu pasión en una habilidad profesional. 
                Desde los fundamentos hasta técnicas avanzadas de producción.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap justify-center gap-10">
                <div>
                  <p className="text-4xl font-semibold text-white">{totalCourses}</p>
                  <p className="text-neutral-400 font-light text-sm">Programas</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold text-white">{totalClasses}</p>
                  <p className="text-neutral-400 font-light text-sm">Clases totales</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold text-white">5</p>
                  <p className="text-neutral-400 font-light text-sm">Ciudades</p>
                </div>
              </div>

              {/* CTA en hero */}
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a 
                  href="#cursos"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
                >
                  Ver cursos
                  <Icon icon="mdi:arrow-down" className="w-5 h-5" />
                </a>
                <Link
                  href="https://wa.me/595973497799?text=Hola! Quisiera información sobre los cursos"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-light rounded-full hover:border-orange-600 hover:text-orange-600 transition-colors duration-300"
                >
                  Consultar
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </section>

        {/* Cursos */}
        <section id="cursos" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 space-y-32">
            {courses.map((course, index) => (
              <article 
                key={course.id} 
                id={course.id}
                className="scroll-mt-24"
              >
                {/* Header del curso */}
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Imagen */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={course.image}
                        alt={`Curso ${course.title}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Badge nivel */}
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-orange-600 text-white text-sm font-semibold rounded-full">
                          Nivel {course.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info principal */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-px bg-orange-600" />
                      <span className="text-orange-600 text-sm tracking-[0.2em] uppercase font-light">
                        {course.subtitle}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                      {course.title}
                    </h2>

                    <p className="text-neutral-400 font-light leading-relaxed mb-6">
                      {course.longDescription}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {course.highlights.map((highlight) => (
                        <span 
                          key={highlight}
                          className="text-xs text-neutral-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <Icon icon="mdi:calendar-outline" className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="text-white text-sm font-semibold">{course.duration}</p>
                          <p className="text-neutral-500 text-xs font-light">{course.totalClasses} clases</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon icon="mdi:clock-outline" className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="text-white text-sm font-semibold">Sábados</p>
                          <p className="text-neutral-500 text-xs font-light">09:00 - 11:00</p>
                        </div>
                      </div>
                    </div>

                    {/* Precio y CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      <div>
                        <p className="text-neutral-500 text-sm font-light">Inversión mensual</p>
                        <p className="text-white text-3xl font-semibold">
                          {course.currency} {course.price}
                        </p>
                      </div>
                      <Link
                        href={`https://wa.me/595973497799?text=Hola! Me interesa el curso ${course.title}`}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
                      >
                        Inscribirme
                        <Icon icon="mdi:arrow-right" className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Detalles expandibles */}
                <div className="mt-16 grid lg:grid-cols-3 gap-8">
                  {/* Qué incluye */}
                  <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Icon icon="mdi:check-circle-outline" className="w-5 h-5 text-orange-600" />
                      Qué incluye
                    </h3>
                    <ul className="space-y-3">
                      {course.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-neutral-400 text-sm font-light">
                          <span className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requisitos */}
                  <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Icon icon="mdi:clipboard-list-outline" className="w-5 h-5 text-orange-600" />
                      Requisitos
                    </h3>
                    <ul className="space-y-3">
                      {course.requirements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-neutral-400 text-sm font-light">
                          <span className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Próximas fechas */}
                  <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Icon icon="mdi:calendar-star" className="w-5 h-5 text-orange-600" />
                      Próximo inicio
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-neutral-800">
                        <div>
                          <p className="text-white font-semibold">Marzo 2026</p>
                          <p className="text-neutral-500 text-sm font-light">Asunción</p>
                        </div>
                        <span className="px-3 py-1 bg-green-600/20 text-green-400 text-xs font-semibold rounded-full">
                          Cupos disponibles
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-3">
                        <div>
                          <p className="text-white font-semibold">Abril 2026</p>
                          <p className="text-neutral-500 text-sm font-light">Ciudad del Este</p>
                        </div>
                        <span className="px-3 py-1 bg-orange-600/20 text-orange-400 text-xs font-semibold rounded-full">
                          Próximamente
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Programa completo */}
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <Icon icon="mdi:school-outline" className="w-6 h-6 text-orange-600" />
                    Programa completo
                  </h3>
                  <CourseAccordion classes={course.classes} courseId={course.id} />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              ¿No sabés qué curso elegir?
            </h2>
            <p className="text-neutral-400 font-light mb-8 max-w-2xl mx-auto">
              Contactanos y te ayudamos a encontrar el programa perfecto según tu nivel y objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/595973497799?text=Hola! Quisiera asesoramiento sobre qué curso elegir"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                Asesoramiento por WhatsApp
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-700 text-white font-light rounded-full hover:border-orange-600 hover:text-orange-600 transition-colors duration-300"
              >
                Ver todas las sedes
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}