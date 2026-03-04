import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import CamerasCatalog from '@/components/cameras/CamerasCatalog'

// Importar imagen de fondo
import HeroBg from '../../public/bg/cameras.png'

// Importar imágenes de cámaras
import CanonT6Img from '../../public/cameras/canon-eos-rebel-t6.jpg'
import CanonT5Img from '../../public/cameras/canon-t5.webp'
import Canon80DImg from '../../public/cameras/canon-80d.jpg'
import CanonT3Img from '../../public/cameras/canon-t3.avif'
import CanonT2iImg from '../../public/cameras/canon-eos-rebel-t2i.jpg'

// Importar imágenes de objetivos
import EFS1855Img from '../../public/cameras/efs-18-55mm.webp'
import EFS1022Img from '../../public/cameras/efs-10-22mm.jpg'
import Tokina1735Img from '../../public/cameras/tokina-17-35mm.webp'
import EF50Img from '../../public/cameras/ef-50mm-f14.jpg'
import EFS55250Img from '../../public/cameras/efs-55-250mm.webp'

// Importar imágenes de Sony (no disponibles)
import SonyA7IVImg from '../../public/cameras/sony-a7iv.webp'
import SonyFX3Img from '../../public/cameras/sony-fx3.webp'
import SonyGM70200Img from '../../public/cameras/sony-gm-70200.jpg'

export const metadata: Metadata = {
  title: 'Alquiler de Cámaras y Equipos Fotográficos',
  description: 'Alquilá cámaras profesionales Canon y objetivos en Paraguay. Equipos de fotografía para clases y proyectos. Disponible en Asunción y todo el país.',
  
  keywords: [
    'alquiler cámaras Paraguay',
    'alquiler equipos fotográficos',
    'rent camera Asunción',
    'alquiler cámaras profesionales',
    'alquiler Canon Paraguay',
    'alquiler lentes fotográficos',
    'alquiler cámara DSLR',
    'alquiler cámaras Asunción',
    'alquiler equipos Ciudad del Este',
  ],

  openGraph: {
    title: 'Alquiler de Cámaras Profesionales | FoteArte Paraguay',
    description: 'Canon, lentes y más. Alquilá equipos profesionales de fotografía por día o semana. Disponible en todo Paraguay.',
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
    description: 'Canon, lentes y más. Equipos profesionales por día o semana.',
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
  image: any // StaticImageData
  specs: string[]
  available: boolean
  stock?: number
  note?: string
}

interface Category {
  id: string
  label: string
  icon: string
}

async function getCameras(): Promise<Camera[]> {
  const cameras: Camera[] = [
    // ============================================
    // CÁMARAS CANON
    // ============================================
    {
      id: 'canon-eos-rebel-t6',
      name: 'EOS Rebel T6',
      brand: 'Canon',
      category: 'dslr',
      image: CanonT6Img,
      specs: ['18MP APS-C', 'Video Full HD', 'ISO 100-6400'],
      available: true,
      stock: 4
    },
    {
      id: 'canon-t5',
      name: 'EOS Rebel T5',
      brand: 'Canon',
      category: 'dslr',
      image: CanonT5Img,
      specs: ['18MP APS-C', 'Video Full HD', '9 puntos AF'],
      available: true,
      stock: 1
    },
    {
      id: 'canon-80d',
      name: 'EOS 80D',
      brand: 'Canon',
      category: 'dslr',
      image: Canon80DImg,
      specs: ['24.2MP APS-C', 'Video Full HD 60fps', '45 puntos AF'],
      available: true,
      stock: 1
    },
    {
      id: 'canon-t3',
      name: 'EOS Rebel T3',
      brand: 'Canon',
      category: 'dslr',
      image: CanonT3Img,
      specs: ['12.2MP APS-C', 'Video HD 720p', 'Compacta y liviana'],
      available: true,
      stock: 1
    },
    {
      id: 'canon-eos-rebel-t2i',
      name: 'EOS Rebel T2i',
      brand: 'Canon',
      category: 'dslr',
      image: CanonT2iImg,
      specs: ['18MP APS-C', 'Video Full HD', 'ISO 100-6400'],
      available: true,
      stock: 3
    },

    // ============================================
    // OBJETIVOS
    // ============================================
    {
      id: 'efs-18-55mm',
      name: 'EF-S 18-55mm f/3.5-5.6',
      brand: 'Canon',
      category: 'lens',
      image: EFS1855Img,
      specs: ['Zoom estándar', 'Apertura f/3.5-5.6', 'Mount EF-S'],
      available: true,
      stock: 6
    },
    {
      id: 'efs-10-22mm',
      name: 'EF-S 10-22mm f/3.5-4.5',
      brand: 'Canon',
      category: 'lens',
      image: EFS1022Img,
      specs: ['Ultra gran angular', 'Apertura f/3.5-4.5', 'Mount EF-S'],
      available: true,
      stock: 1
    },
    {
      id: 'tokina-17-35mm',
      name: 'AT-X 17-35mm f/4 Pro FX',
      brand: 'Tokina',
      category: 'lens',
      image: Tokina1735Img,
      specs: ['Gran angular', 'Apertura f/4 constante', 'Full Frame'],
      available: true,
      stock: 1
    },
    {
      id: 'ef-50mm-f14',
      name: 'EF 50mm f/1.4 USM',
      brand: 'Canon',
      category: 'lens',
      image: EF50Img,
      specs: ['Lente fijo 50mm', 'Apertura f/1.4', 'USM Autofocus'],
      available: true,
      stock: 2,
      note: '1 unidad con problemas de enfoque'
    },
    {
      id: 'efs-55-250mm',
      name: 'EF-S 55-250mm f/4-5.6 IS',
      brand: 'Canon',
      category: 'lens',
      image: EFS55250Img,
      specs: ['Teleobjetivo', 'Estabilización de imagen', 'Mount EF-S'],
      available: true,
      stock: 2
    },

    // ============================================
    // SONY (NO DISPONIBLES)
    // ============================================
    {
      id: 'sony-a7iv',
      name: 'Alpha A7 IV',
      brand: 'Sony',
      category: 'mirrorless',
      image: SonyA7IVImg,
      specs: ['33MP Full Frame', '4K 60fps', 'Eye AF avanzado'],
      available: false
    },
    {
      id: 'sony-fx3',
      name: 'FX3 Cinema Line',
      brand: 'Sony',
      category: 'cinema',
      image: SonyFX3Img,
      specs: ['12.1MP Full Frame', '4K 120fps', 'S-Cinetone'],
      available: false
    },
    {
      id: 'sony-gm-70200',
      name: 'FE 70-200mm f/2.8 GM II',
      brand: 'Sony',
      category: 'lens',
      image: SonyGM70200Img,
      specs: ['Apertura f/2.8', 'XD Linear Motors', 'Mount E'],
      available: false
    },
  ]

  return cameras
}

// Categorías
const categories: Category[] = [
  { id: 'all', label: 'Todos', icon: 'mdi:view-grid-outline' },
  { id: 'dslr', label: 'Cámaras', icon: 'mdi:camera' },
  { id: 'lens', label: 'Objetivos', icon: 'mdi:circle-outline' },
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
  description: 'Alquiler de cámaras profesionales, lentes y accesorios de fotografía.',
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
          name: 'Cámaras DSLR Canon',
          description: 'Cámaras réflex Canon para aprendizaje y proyectos',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Objetivos',
          description: 'Lentes de diversas focales y aperturas',
        },
      },
    ],
  },
}

export default async function CamerasPage() {
  const cameras = await getCameras()
  const availableCameras = cameras.filter(c => c.available)
  const totalStock = availableCameras.reduce((acc, c) => acc + (c.stock || 1), 0)

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
                Accedé a cámaras y lentes de calidad para tus proyectos fotográficos. 
                Disponibles para alumnos y público en general.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-10">
                <div>
                  <p className="text-4xl font-semibold text-white">{totalStock}+</p>
                  <p className="text-neutral-400 font-light text-sm">Equipos</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold text-white">2</p>
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
                  href="https://wa.me/595973497799?text=Hola! Quisiera consultar sobre el alquiler de equipos fotográficos"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-light rounded-full hover:border-green-500 hover:text-green-500 transition-colors duration-300"
                >
                  <Icon icon="mdi:whatsapp" className="w-5 h-5" />
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
              ¿Querés alquilar un equipo?
            </h2>
            <p className="text-neutral-400 font-light mb-8">
              Contactanos por WhatsApp para verificar disponibilidad y coordinar el retiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/595973497799?text=Hola! Quisiera alquilar un equipo fotográfico"
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
                  Retiro en sede o coordinamos entrega en Asunción y Gran Asunción.
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 mx-auto md:mx-0 mb-4">
                  <Icon icon="mdi:shield-check-outline" className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-white font-semibold mb-2">Depósito de garantía</h3>
                <p className="text-neutral-500 font-light text-sm">
                  Se requiere depósito de garantía reembolsable al devolver el equipo en condiciones.
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 mx-auto md:mx-0 mb-4">
                  <Icon icon="mdi:school-outline" className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-white font-semibold mb-2">Alumnos FoteArte</h3>
                <p className="text-neutral-500 font-light text-sm">
                  Descuentos especiales para alumnos activos de nuestros cursos de fotografía.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}