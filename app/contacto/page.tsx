import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import ContactForm from '@/components/contact/ContactForm'

// ============================================
// METADATA SEO
// ============================================
export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contactá con FoteArte Paraguay. Estamos en Asunción, Ciudad del Este, Villarrica, Encarnación y Coronel Oviedo. WhatsApp, email y redes sociales.',
  
  keywords: [
    'contacto FoteArte',
    'FoteArte Paraguay teléfono',
    'escuela fotografía Asunción contacto',
    'FoteArte WhatsApp',
  ],

  openGraph: {
    title: 'Contacto | FoteArte Paraguay',
    description: 'Contactanos por WhatsApp, email o visitanos en nuestras sedes.',
    url: 'https://fotearte.com.py/contacto',
  },

  alternates: {
    canonical: 'https://fotearte.com.py/contacto',
  },
}

// ============================================
// DATOS
// ============================================
const redesSociales = [
  { 
    icon: "mdi:instagram", 
    href: "https://www.instagram.com/fotearte", 
    label: "Instagram",
    username: "@fotearte",
    color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400"
  },
  { 
    icon: "mdi:twitter", 
    href: "https://x.com/foteARTE", 
    label: "X (Twitter)",
    username: "@foteARTE",
    color: "hover:bg-neutral-800"
  },
  { 
    icon: "mdi:facebook", 
    href: "https://www.facebook.com/Fotearte", 
    label: "Facebook",
    username: "Fotearte",
    color: "hover:bg-blue-600"
  },
  { 
    icon: "mdi:whatsapp", 
    href: "https://wa.me/595973497799", 
    label: "WhatsApp",
    username: "+595 973 497 799",
    color: "hover:bg-green-600"
  }
]

const sedes = [
  {
    city: "Asunción",
    address: "Av. Mariscal López 1234",
    phone: "+595 21 123 456",
    isMain: true
  },
  {
    city: "Ciudad del Este",
    address: "Av. San Blas 567",
    phone: "+595 61 123 456",
    isMain: false
  },
  {
    city: "Encarnación",
    address: "Calle Principal 890",
    phone: "+595 71 123 456",
    isMain: false
  },
  {
    city: "Villarrica",
    address: "Ruta 8 km 150",
    phone: "+595 541 123 456",
    isMain: false
  },
  {
    city: "Coronel Oviedo",
    address: "Av. Central 234",
    phone: "+595 521 123 456",
    isMain: false
  }
]

const quickLinks = [
  { icon: "mdi:school-outline", label: "Cursos", href: "/cursos", description: "Ver programas disponibles" },
  { icon: "mdi:camera-outline", label: "Alquiler", href: "/camaras", description: "Equipos fotográficos" },
  { icon: "mdi:help-circle-outline", label: "FAQ", href: "/institucional/faq", description: "Preguntas frecuentes" },
]

// ============================================
// PÁGINA
// ============================================
export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-orange-600 text-sm font-light tracking-[0.3em] uppercase mb-4">
              Contacto
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Hablemos de
              <span className="text-neutral-400 font-light"> fotografía</span>
            </h1>
            <p className="text-neutral-400 font-light text-lg md:text-xl leading-relaxed">
              ¿Tenés dudas sobre nuestros cursos? ¿Querés alquilar equipos? 
              Estamos acá para ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Formulario + Info */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Formulario - 3 columnas */}
            <div className="lg:col-span-3">
              <div className="bg-neutral-900/30 border border-neutral-800 rounded-3xl p-6 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                    Envianos un mensaje
                  </h2>
                  <p className="text-neutral-500 font-light">
                    Completá el formulario y te responderemos a la brevedad.
                  </p>
                </div>
                
                <ContactForm />
              </div>
            </div>

            {/* Info lateral - 2 columnas */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* WhatsApp destacado */}
              <div className="bg-green-600/10 border border-green-600/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600/20">
                    <Icon icon="mdi:whatsapp" className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Respuesta inmediata</p>
                    <p className="text-neutral-400 font-light text-sm mb-3">
                      Para consultas rápidas, escribinos por WhatsApp
                    </p>
                    <Link
                      href="https://wa.me/595973497799"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-300 text-sm"
                    >
                      Abrir WhatsApp
                      <Icon icon="mdi:arrow-right" className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-600/10">
                    <Icon icon="mdi:email-outline" className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Email</p>
                    <a 
                      href="mailto:info@fotearte.com.py" 
                      className="text-neutral-400 font-light hover:text-orange-600 transition-colors"
                    >
                      info@fotearte.com.py
                    </a>
                  </div>
                </div>
              </div>

              {/* Horarios */}
              <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-600/10">
                    <Icon icon="mdi:clock-outline" className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">Horarios de atención</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-neutral-400 font-light">
                        <span className="text-neutral-300">Lun - Vie:</span> 09:00 - 18:00
                      </p>
                      <p className="text-neutral-400 font-light">
                        <span className="text-neutral-300">Sábados:</span> 09:00 - 13:00
                      </p>
                      <p className="text-neutral-500 font-light">
                        Domingos y feriados cerrado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Links rápidos */}
              <div className="space-y-3">
                <p className="text-neutral-500 text-sm font-light mb-4">Links rápidos</p>
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-800 hover:border-orange-600/50 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-800 group-hover:bg-orange-600/20 transition-colors duration-200">
                      <Icon icon={link.icon} className="w-5 h-5 text-neutral-400 group-hover:text-orange-600 transition-colors duration-200" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">{link.label}</p>
                      <p className="text-neutral-500 text-xs font-light">{link.description}</p>
                    </div>
                    <Icon icon="mdi:chevron-right" className="w-5 h-5 text-neutral-600 group-hover:text-orange-600 transition-colors duration-200" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sedes */}
      <section className="py-16 md:py-24 border-t border-neutral-900 bg-neutral-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Nuestras
              <span className="text-neutral-400 font-light"> sedes</span>
            </h2>
            <p className="text-neutral-500 font-light">
              Estamos presentes en 5 ciudades de Paraguay
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sedes.map((sede) => (
              <div
                key={sede.city}
                className={`relative p-6 rounded-2xl border transition-colors duration-200 ${
                  sede.isMain 
                    ? 'bg-orange-600/10 border-orange-600/30' 
                    : 'bg-neutral-900/30 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {sede.isMain && (
                  <span className="absolute top-4 right-4 px-2 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">
                    Sede principal
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    sede.isMain ? 'bg-orange-600/20' : 'bg-neutral-800'
                  }`}>
                    <Icon 
                      icon="mdi:map-marker-outline" 
                      className={`w-5 h-5 ${sede.isMain ? 'text-orange-600' : 'text-neutral-400'}`} 
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg mb-1">{sede.city}</p>
                    <p className="text-neutral-400 font-light text-sm mb-2">{sede.address}</p>
                    <a 
                      href={`tel:${sede.phone.replace(/\s/g, '')}`}
                      className="text-neutral-500 text-sm font-light hover:text-orange-600 transition-colors"
                    >
                      {sede.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa o CTA final */}
      <section className="py-16 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-600/10 mx-auto mb-6">
            <Icon icon="mdi:camera-iris" className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-neutral-400 font-light mb-8 max-w-xl mx-auto">
            Visitanos en cualquiera de nuestras sedes o contactanos para más información. 
            Tu viaje fotográfico comienza con un simple mensaje.
          </p>
          <Link
            href="/cursos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
          >
            Ver cursos disponibles
            <Icon icon="mdi:arrow-right" className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}