import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import CamerasCatalog from '@/components/cameras/CamerasCatalog'

// Importar imagen de fondo
import HeroBg from '../../public/bg/cameras.png'

export const metadata: Metadata = {
  title: 'Alquiler de Cámaras y Equipos Fotográficos',
  description: 'Alquilá cámaras profesionales Canon, Sony, Nikon y más en Paraguay. Equipos de fotografía y video por día, fin de semana o semana. Lentes, luces, estabilizadores. Entrega en Asunción y todo el país.',
  
  keywords: [
    'alquiler cámaras Paraguay',
    'alquiler equipos fotográficos',
    'rent camera Asunción',
    'alquiler cámaras profesionales',
    
    'alquiler Canon Paraguay',
    'alquiler Sony Paraguay', 
    'alquiler Nikon Paraguay',
    'alquiler Blackmagic',
    
    'alquiler lentes fotográficos',
    'alquiler cámara mirrorless',
    'alquiler cámara DSLR',
    'alquiler cámara cine',
    'alquiler estabilizador gimbal',
    'alquiler luces fotografía',
  
    'alquiler cámaras Asunción',
    'alquiler equipos Ciudad del Este',
    'rent camera Paraguay',
  ],

  openGraph: {
    title: 'Alquiler de Cámaras Profesionales | FoteArte Paraguay',
    description: 'Canon, Sony, Nikon y más. Alquilá equipos profesionales de fotografía y video por día o semana. Entrega en todo Paraguay.',
    url: 'https://fotearte.com.py/cameras',
    images: [
      {
        url: '/og-cameras.jpg',
        width: 1200,
        height: 630,
        alt: 'Alquiler de cámaras profesionales en FoteArte Paraguay',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler de Cámaras Profesionales | FoteArte',
    description: 'Canon, Sony, Nikon y más. Equipos profesionales por día o semana.',
    images: ['/og-cameras.jpg'],
  },

  alternates: {
    canonical: 'https://fotearte.com.py/cameras',
  },
}

interface Camera {
  id: string
  name: string
  brand: string
  category: 'dslr' | 'mirrorless' | 'cinema' | 'lens' | 'accessory'
  image: string
  pricePerDay: number
  specs: string[]
  available: boolean
  featured?: boolean
}

interface Category {
  id: string
  label: string
  icon: string
}

async function getCameras(): Promise<Camera[]> {
  const cameras: Camera[] = [
    {
      id: 'canon-r5',
      name: 'EOS R5',
      brand: 'Canon',
      category: 'mirrorless',
      image: '/cameras/canon-r5.jpg',
      pricePerDay: 180000,
      specs: ['45MP Full Frame', '8K Video', 'IBIS 8 stops'],
      available: true,
      featured: true
    },
    {
      id: 'sony-a7iv',
      name: 'Alpha A7 IV',
      brand: 'Sony',
      category: 'mirrorless',
      image: '/cameras/sony-a7iv.jpg',
      pricePerDay: 150000,
      specs: ['33MP Full Frame', '4K 60fps', 'Eye AF avanzado'],
      available: true,
      featured: true
    },
    {
      id: 'nikon-z8',
      name: 'Z8',
      brand: 'Nikon',
      category: 'mirrorless',
      image: '/cameras/nikon-z8.jpg',
      pricePerDay: 200000,
      specs: ['45.7MP Stacked', '8K N-RAW', '120fps 4K'],
      available: true,
      featured: true
    },
    {
      id: 'canon-5d-iv',
      name: 'EOS 5D Mark IV',
      brand: 'Canon',
      category: 'dslr',
      image: '/cameras/canon-5d-iv.jpg',
      pricePerDay: 120000,
      specs: ['30.4MP Full Frame', '4K Video', 'Dual Pixel AF'],
      available: true
    },
    {
      id: 'sony-fx3',
      name: 'FX3 Cinema Line',
      brand: 'Sony',
      category: 'cinema',
      image: '/cameras/sony-fx3.jpg',
      pricePerDay: 250000,
      specs: ['12.1MP Full Frame', '4K 120fps', 'S-Cinetone'],
      available: false
    },
    {
      id: 'nikon-d850',
      name: 'D850',
      brand: 'Nikon',
      category: 'dslr',
      image: '/cameras/nikon-d850.jpg',
      pricePerDay: 130000,
      specs: ['45.7MP Full Frame', '4K UHD', '7fps continuo'],
      available: true
    },
    {
      id: 'canon-rf-2470',
      name: 'RF 24-70mm f/2.8L IS USM',
      brand: 'Canon',
      category: 'lens',
      image: '/cameras/canon-rf-2470.jpg',
      pricePerDay: 80000,
      specs: ['Apertura f/2.8', 'Estabilización 5 stops', 'Mount RF'],
      available: true
    },
    {
      id: 'sony-gm-70200',
      name: 'FE 70-200mm f/2.8 GM II',
      brand: 'Sony',
      category: 'lens',
      image: '/cameras/sony-gm-70200.jpg',
      pricePerDay: 90000,
      specs: ['Apertura f/2.8', 'XD Linear Motors', 'Mount E'],
      available: true
    },
    {
      id: 'ronin-rs3-pro',
      name: 'RS 3 Pro',
      brand: 'DJI',
      category: 'accessory',
      image: '/cameras/dji-rs3-pro.jpg',
      pricePerDay: 70000,
      specs: ['Carga 4.5kg', 'LiDAR Focus', 'Transmisión inalámbrica'],
      available: true
    },
    {
      id: 'godox-ad600',
      name: 'AD600 Pro',
      brand: 'Godox',
      category: 'accessory',
      image: '/cameras/godox-ad600.jpg',
      pricePerDay: 50000,
      specs: ['600W', 'TTL/HSS', 'Batería incluida'],
      available: true
    },
    {
      id: 'blackmagic-6k',
      name: 'Pocket Cinema 6K Pro',
      brand: 'Blackmagic',
      category: 'cinema',
      image: '/cameras/blackmagic-6k.jpg',
      pricePerDay: 180000,
      specs: ['6K Super 35', '13 stops DR', 'ProRes/BRAW'],
      available: true
    },
    {
      id: 'sigma-art-35',
      name: '35mm f/1.4 DG HSM Art',
      brand: 'Sigma',
      category: 'lens',
      image: '/cameras/sigma-35-art.jpg',
      pricePerDay: 45000,
      specs: ['Apertura f/1.4', 'HSM Autofocus', 'Multi-mount'],
      available: true
    }
  ]

  return cameras
}

// Categorías
const categories: Category[] = [
  { id: 'all', label: 'Todos', icon: 'mdi:view-grid-outline' },
  { id: 'mirrorless', label: 'Mirrorless', icon: 'mdi:camera-outline' },
  { id: 'dslr', label: 'DSLR', icon: 'mdi:camera' },
  { id: 'cinema', label: 'Cinema', icon: 'mdi:video-outline' },
  { id: 'lens', label: 'Lentes', icon: 'mdi:circle-outline' },
  { id: 'accessory', label: 'Accesorios', icon: 'mdi:flashlight' }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Alquiler de Equipos Fotográficos',
  provider: {
    '@type': 'Organization',
    name: 'FoteArte Paraguay',
    url: 'https://fotearte.com.py',
  },
  serviceType: 'Camera Rental',
  description: 'Alquiler de cámaras profesionales, lentes y accesorios de fotografía y video.',
  areaServed: {
    '@type': 'Country',
    name: 'Paraguay',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catálogo de Equipos',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Cámaras Mirrorless',
          description: 'Canon, Sony, Nikon mirrorless',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Cámaras DSLR',
          description: 'Cámaras réflex profesionales',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Lentes',
          description: 'Lentes de diversas focales y aperturas',
        },
      },
    ],
  },
}

export default async function CamerasPage() {
  const cameras = await getCameras()
  const totalEquipment = cameras.length
  const brands = [...new Set(cameras.map(c => c.brand))].length

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
              alt="Equipos profesionales de fotografía"
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
            <div className="max-w-2xl flex flex-col justify-center items-center text-center">
              <p className="text-orange-600 text-sm font-light tracking-[0.3em] uppercase mb-4">
                Alquiler de Equipos
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                Equipos profesionales
                <span className="text-neutral-400 font-light"> para cada proyecto</span>
              </h1>
              <p className="text-neutral-300 font-light text-lg md:text-xl leading-relaxed mb-10">
                Accedé a cámaras, lentes y accesorios de las mejores marcas del mundo. 
                Alquiler por día, fin de semana o semana completa con entrega en todo Paraguay.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-10">
                <div>
                  <p className="text-4xl font-semibold text-white">{totalEquipment}+</p>
                  <p className="text-neutral-400 font-light text-sm">Equipos</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold text-white">{brands}</p>
                  <p className="text-neutral-400 font-light text-sm">Marcas</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold text-white">5</p>
                  <p className="text-neutral-400 font-light text-sm">Ciudades</p>
                </div>
              </div>

              {/* CTA en hero */}
              <div className="flex flex-wrap gap-4 mt-10">
                <a 
                  href="#catalogo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
                >
                  Ver catálogo
                  <Icon icon="mdi:arrow-down" className="w-5 h-5" />
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-light rounded-full hover:border-orange-600 hover:text-orange-600 transition-colors duration-300"
                >
                  Consultar disponibilidad
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

        {/* Catálogo interactivo (Client Component) */}
        <div id="catalogo">
          <CamerasCatalog cameras={cameras} categories={categories} />
        </div>

        {/* CTA Section */}
        <section className="py-20 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              ¿No encontrás lo que buscás?
            </h2>
            <p className="text-neutral-400 font-light mb-8">
              Contactanos y te ayudamos a conseguir el equipo perfecto para tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/595973497799"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                WhatsApp
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-700 text-white font-light rounded-full hover:border-orange-600 hover:text-orange-600 transition-colors duration-300"
              >
                Enviar consulta
              </Link>
            </div>
          </div>
        </section>

        {/* Información adicional */}
        <section className="py-16 border-t border-neutral-900 bg-neutral-900/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 mx-auto md:mx-0 mb-4">
                  <Icon icon="mdi:truck-outline" className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-white font-semibold mb-2">Entrega y devolución</h3>
                <p className="text-neutral-500 font-light text-sm">
                  Retiro en sede o delivery a domicilio en Asunción y Gran Asunción. Envíos al interior.
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 mx-auto md:mx-0 mb-4">
                  <Icon icon="mdi:shield-check-outline" className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-white font-semibold mb-2">Seguro incluido</h3>
                <p className="text-neutral-500 font-light text-sm">
                  Todos nuestros equipos cuentan con seguro básico. Cobertura extendida disponible.
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 mx-auto md:mx-0 mb-4">
                  <Icon icon="mdi:headset" className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-white font-semibold mb-2">Soporte técnico</h3>
                <p className="text-neutral-500 font-light text-sm">
                  Asistencia durante todo el período de alquiler. Reemplazo inmediato ante fallas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}