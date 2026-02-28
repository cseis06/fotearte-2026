import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'

// ============================================
// METADATA SEO
// ============================================
export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de FoteArte Paraguay. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
  
  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://fotearte.com.py/institucional/privacidad',
  },
}

// ============================================
// TIPOS
// ============================================
interface ContentItem {
  text?: string
  subtitle?: string
  items?: string[]
}

interface Section {
  id: string
  icon: string
  title: string
  content: ContentItem[]
}

// ============================================
// DATOS
// ============================================
const sections: Section[] = [
  {
    id: 'introduccion',
    icon: 'mdi:information-outline',
    title: 'Introducción',
    content: [
      {
        text: 'En Fotearte nos tomamos muy en serio la privacidad de nuestros usuarios, alumnos y visitantes. Esta política de privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos tu información personal cuando utilizás nuestro sitio web o contratás nuestros servicios.'
      },
      {
        text: 'Al utilizar nuestros servicios, aceptás las prácticas descritas en esta política. Te recomendamos leerla detenidamente y contactarnos si tenés alguna pregunta.'
      }
    ]
  },
  {
    id: 'datos-recopilados',
    icon: 'mdi:database-outline',
    title: 'Datos que Recopilamos',
    content: [
      {
        subtitle: 'Información que nos proporcionás',
        items: [
          'Nombre completo y datos de contacto (email, teléfono)',
          'Información de facturación (RUC, dirección)',
          'Datos de inscripción a cursos',
          'Consultas y mensajes enviados por formularios',
          'Fotografías y trabajos realizados durante los cursos'
        ]
      },
      {
        subtitle: 'Información recopilada automáticamente',
        items: [
          'Dirección IP y datos de navegación',
          'Tipo de dispositivo y navegador',
          'Páginas visitadas y tiempo de permanencia',
          'Cookies y tecnologías similares'
        ]
      }
    ]
  },
  {
    id: 'uso-datos',
    icon: 'mdi:cog-outline',
    title: 'Uso de los Datos',
    content: [
      {
        subtitle: 'Utilizamos tu información para:',
        items: [
          'Gestionar tu inscripción y participación en cursos',
          'Procesar pagos y emitir facturas',
          'Enviarte información relevante sobre tus cursos',
          'Responder a tus consultas y solicitudes',
          'Mejorar nuestros servicios y contenidos',
          'Enviarte comunicaciones de marketing (con tu consentimiento)',
          'Cumplir con obligaciones legales'
        ]
      }
    ]
  },
  {
    id: 'compartir',
    icon: 'mdi:share-variant-outline',
    title: 'Compartición de Datos',
    content: [
      {
        text: 'No vendemos ni alquilamos tu información personal a terceros. Podemos compartir tus datos únicamente en los siguientes casos:'
      },
      {
        items: [
          'Con proveedores de servicios que nos ayudan a operar (procesadores de pago, servicios de email)',
          'Cuando sea requerido por ley o autoridades competentes',
          'Para proteger nuestros derechos legales',
          'Con tu consentimiento expreso'
        ]
      },
      {
        text: 'Todos nuestros proveedores están obligados a mantener la confidencialidad de tus datos y solo pueden utilizarlos para los fines específicos que les hemos indicado.'
      }
    ]
  },
  {
    id: 'cookies',
    icon: 'mdi:cookie-outline',
    title: 'Cookies',
    content: [
      {
        text: 'Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Las cookies son pequeños archivos que se almacenan en tu dispositivo.'
      },
      {
        subtitle: 'Tipos de cookies que utilizamos:',
        items: [
          'Cookies esenciales: necesarias para el funcionamiento del sitio',
          'Cookies de rendimiento: nos ayudan a entender cómo usás el sitio',
          'Cookies de funcionalidad: recuerdan tus preferencias',
          'Cookies de marketing: utilizadas para mostrarte contenido relevante'
        ]
      },
      {
        text: 'Podés configurar tu navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.'
      }
    ]
  },
  {
    id: 'seguridad',
    icon: 'mdi:lock-outline',
    title: 'Seguridad de los Datos',
    content: [
      {
        text: 'Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra acceso no autorizado, pérdida o alteración:'
      },
      {
        items: [
          'Encriptación de datos sensibles',
          'Acceso restringido a información personal',
          'Servidores seguros y actualizados',
          'Capacitación del personal en protección de datos',
          'Revisiones periódicas de seguridad'
        ]
      },
      {
        text: 'Sin embargo, ningún sistema es completamente seguro. Te recomendamos proteger tus credenciales de acceso y notificarnos inmediatamente si sospechás de alguna actividad no autorizada.'
      }
    ]
  },
  {
    id: 'derechos',
    icon: 'mdi:account-check-outline',
    title: 'Tus Derechos',
    content: [
      {
        text: 'Tenés derecho a:'
      },
      {
        items: [
          'Acceder a tus datos personales que tenemos almacenados',
          'Solicitar la rectificación de datos incorrectos',
          'Solicitar la eliminación de tus datos (derecho al olvido)',
          'Oponerte al procesamiento de tus datos para marketing',
          'Solicitar la portabilidad de tus datos',
          'Retirar tu consentimiento en cualquier momento'
        ]
      },
      {
        text: 'Para ejercer estos derechos, contactanos a través de nuestro formulario de contacto o enviando un email a privacidad@fotearte.com.py'
      }
    ]
  },
  {
    id: 'retencion',
    icon: 'mdi:calendar-clock-outline',
    title: 'Retención de Datos',
    content: [
      {
        text: 'Conservamos tu información personal durante el tiempo necesario para cumplir con los fines para los que fue recopilada, incluyendo obligaciones legales, contables o de reporte.'
      },
      {
        subtitle: 'Períodos de retención:',
        items: [
          'Datos de alumnos: durante la relación y 5 años adicionales',
          'Datos de facturación: según requisitos legales (mínimo 5 años)',
          'Datos de marketing: hasta que retires tu consentimiento',
          'Cookies: según el tipo (desde la sesión hasta 2 años)'
        ]
      }
    ]
  },
  {
    id: 'menores',
    icon: 'mdi:account-child-outline',
    title: 'Menores de Edad',
    content: [
      {
        text: 'Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente información de menores de edad sin el consentimiento de sus padres o tutores.'
      },
      {
        text: 'Para la inscripción de menores en nuestros cursos, requerimos la autorización y datos de contacto de un padre o tutor legal, quien será responsable de aceptar estos términos en nombre del menor.'
      }
    ]
  },
  {
    id: 'cambios',
    icon: 'mdi:update',
    title: 'Cambios en esta Política',
    content: [
      {
        text: 'Podemos actualizar esta política de privacidad ocasionalmente para reflejar cambios en nuestras prácticas o por razones legales. Te notificaremos sobre cambios significativos a través de nuestro sitio web o por email.'
      },
      {
        text: 'Te recomendamos revisar esta política periódicamente para estar informado sobre cómo protegemos tu información.'
      }
    ]
  }
]

// ============================================
// PÁGINA
// ============================================
export default function PrivacidadPage() {
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
            <span className="text-neutral-400">Política de Privacidad</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-600/10 mb-6">
              <Icon icon="mdi:shield-lock-outline" className="w-7 h-7 text-orange-600" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Política de
              <span className="text-neutral-400 font-light"> Privacidad</span>
            </h1>
            <p className="text-neutral-500 font-light">
              Última actualización: Enero {currentYear}
            </p>
          </div>

          {/* Resumen rápido */}
          <div className="bg-orange-600/10 border border-orange-600/20 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <Icon icon="mdi:shield-check" className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold mb-2">Tu privacidad es importante para nosotros</p>
                <p className="text-neutral-300 font-light text-sm leading-relaxed">
                  En Fotearte recopilamos solo los datos necesarios para brindarte nuestros servicios. 
                  No vendemos tu información a terceros y podés ejercer tus derechos de acceso, 
                  rectificación y eliminación en cualquier momento.
                </p>
              </div>
            </div>
          </div>

          {/* Índice rápido */}
          <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6 mb-12">
            <p className="text-white font-semibold mb-4">Contenido</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-neutral-800/50 rounded-lg text-sm text-neutral-400 font-light hover:bg-orange-600/20 hover:text-orange-600 transition-colors duration-200"
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
                
                <div className="space-y-4 pl-0 md:pl-13">
                  {section.content.map((item, index) => (
                    <div key={index}>
                      {item.subtitle && (
                        <h3 className="text-white font-medium mb-2">{item.subtitle}</h3>
                      )}
                      {item.text && (
                        <p className="text-neutral-400 font-light leading-relaxed mb-3">
                          {item.text}
                        </p>
                      )}
                      {item.items && (
                        <ul className="space-y-2 mt-2">
                          {item.items.map((listItem, i) => (
                            <li key={i} className="flex items-start gap-3 text-neutral-400 font-light">
                              <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contacto */}
            <div className="border-t border-neutral-800 pt-12">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8">
                <h2 className="flex items-center gap-3 text-xl font-semibold text-white mb-4">
                  <Icon icon="mdi:email-outline" className="w-6 h-6 text-orange-600" />
                  Contacto de Privacidad
                </h2>
                <p className="text-neutral-400 font-light leading-relaxed mb-4">
                  Si tenés preguntas sobre esta política de privacidad o querés ejercer tus derechos 
                  sobre tus datos personales, podés contactarnos:
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-neutral-300 font-light flex items-center gap-2">
                    <Icon icon="mdi:email" className="w-4 h-4 text-orange-600" />
                    privacidad@fotearte.com.py
                  </p>
                  <p className="text-neutral-300 font-light flex items-center gap-2">
                    <Icon icon="mdi:phone" className="w-4 h-4 text-orange-600" />
                    +595 973 497 799
                  </p>
                </div>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
                >
                  Enviar solicitud
                  <Icon icon="mdi:arrow-right" className="w-5 h-5" />
                </Link>
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
              href="/institucional/copyright"
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