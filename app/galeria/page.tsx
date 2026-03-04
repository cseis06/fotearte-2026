import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import GallerySections from '@/components/gallery/GallerySections'
import GalleryHero from '@/components/gallery/Hero'

// Tipos
interface Photo {
  id: string
  src: string
  title: string
  category: string
  author?: string
  date?: string
  featured?: boolean
}

interface Section {
  id: string
  title: string
  subtitle: string
  description: string
  photos: Photo[]
  layout: 'hero-grid' | 'masonry' | 'horizontal' | 'featured-duo' | 'cinema'
}

export const metadata: Metadata = {
  title: 'Galería',
  description: 'Explorá los trabajos de nuestros alumnos y profesores. Fotografía de retratos, paisajes, productos, eventos y más. Inspirate con el talento paraguayo.',
  
  keywords: [
    'galería fotografía',
    'fotos Paraguay', 
    'trabajos alumnos',
    'fotografía profesional',
    'portafolio fotógrafos',
  ],
  
  openGraph: {
    title: 'Galería | FoteArte Paraguay',
    description: 'Explorá los trabajos de nuestros alumnos y profesores.',
    images: ['/og-gallery.jpg'], 
  },
}

// Datos de fotos organizados por secciones narrativas
async function getGalleryData(): Promise<{ sections: Section[], allPhotos: Photo[] }> {
  
  const sections: Section[] = [
    {
      id: 'retratos',
      title: 'Retratos',
      subtitle: 'El alma en una mirada',
      description: 'Capturar la esencia de cada persona. Cada retrato es una ventana al interior, una historia contada a través de la luz, las sombras y la expresión.',
      layout: 'hero-grid',
      photos: [
        { id: 'r1', src: '/fotearte/77.jpg', title: 'Práctica con modelo masculino', category: 'retratos', author: 'Desconocido', date: '2011' },
        { id: 'r2', src: '/fotearte/152.jpg', title: 'Práctica con modelo femenino', category: 'retratos', author: 'Desconocido', date: '2011' },
        { id: 'r3', src: '/fotearte/9.jpg', title: 'Práctica con modelo acostada', category: 'retratos', author: 'Desconocido', date: '2011' },
        { id: 'r4', src: '/fotearte/201.jpg', title: 'Práctica con modelo en el  suelo', category: 'retratos', author: 'Desconocido', date: '2011' },
        { id: 'r5', src: '/fotearte/91.jpg', title: 'Práctica con modelo al exterior', category: 'retratos', author: 'Desconocido', date: '2011' },
      ]
    },
    {
      id: 'paisajes',
      title: 'Paisajes',
      subtitle: 'Paraguay en su máxima expresión',
      description: 'Desde los atardeceres sobre el río Paraguay hasta la inmensidad del Chaco. Nuestro país tiene una belleza única esperando ser capturada.',
      layout: 'cinema',
      photos: [
        { id: 'p1', src: '/fotearte/52.jpg', title: 'Fotografía grupal en el río', category: 'paisajes', author: 'Desconocido', date: '2011' },
        { id: 'p2', src: '/fotearte/70.jpg', title: 'Atardecer en un cerro', category: 'paisajes', author: 'Desconocido', date: '2011' },
        { id: 'p3', src: '/fotearte/39.jpg', title: 'Puesta de sol al río', category: 'paisajes', author: 'Desconocido', date: '2011' },
        { id: 'p4', src: '/fotearte/198.jpg', title: 'Cotraste y perspectiva', category: 'paisajes', author: 'Desconocido', date: '2011' },
      ]
    },
    {
      id: 'street',
      title: 'Street Photography',
      subtitle: 'La vida en las calles',
      description: 'Momentos efímeros, gestos cotidianos, la poesía de lo urbano. La calle es nuestro estudio y la vida real, nuestra musa.',
      layout: 'masonry',
      photos: [
        { id: 's1', src: '/fotearte/62.jpg', title: 'Fotografía grupal en el centro de asunción', category: 'street', author: 'Desconocido', date: '2011' },
        { id: 's2', src: '/fotearte/40.jpg', title: 'Prácticas en la estación del ferrocarril de asunción', category: 'street', author: 'Desconocido', date: '2011' },
        { id: 's3', src: '/fotearte/175.jpg', title: 'Cruzando la calle', category: 'street', author: 'Desconocido', date: '2011' },
        { id: 's4', src: '/fotearte/121.jpg', title: 'Alumnos reunídos en la calle', category: 'street', author: 'Desconocido', date: '2011' },
        { id: 's5', src: '/fotearte/120.jpg', title: 'Fotografía grupal de las alumnas y los profesores', category: 'street', author: 'Desconocido', date: '2011' },
        { id: 's6', src: '/fotearte/118.jpg', title: 'Alumnas quitando fotografías', category: 'street', author: 'Desconocido', date: '2011' },
        { id: 's7', src: '/fotearte/68.jpg', title: 'Antes del click', category: 'street', author: 'Desconocido', date: '2011' },
        { id: 's8', src: '/fotearte/82.jpg', title: 'Alumnos en una clase', category: 'street', author: 'Desconocido', date: '2011' },
      ]
    },
    {
      id: 'productos',
      title: 'Fotografía Detalle',
      subtitle: 'El arte de vender con imágenes',
      description: 'Cada producto tiene una historia. Nosotros la contamos a través de composiciones cuidadas, iluminación precisa y atención al detalle.',
      layout: 'featured-duo',
      photos: [
        { id: 'pr1', src: '/fotearte/200.jpg', title: 'Persiguiendo la luz', category: 'productos', author: 'Desconocido', date: '2011' },
        { id: 'pr2', src: '/fotearte/109.jpg', title: 'Prácticas de fotografías gastronómica', category: 'productos', author: 'Desconocido', date: '2011' },
        { id: 'pr3', src: '/fotearte/174.jpg', title: 'Práctica de fotografía detalle', category: 'productos', author: 'Desconocido', date: '2011' },
        { id: 'pr4', src: '/fotearte/173.jpg', title: 'La foto dentro de la foto', category: 'productos', author: 'Desconocido', date: '2011' },
        { id: 'pr5', src: '/fotearte/116.jpg', title: 'La mirada del lente', category: 'productos', author: 'Desconocido', date: '2011' },
        { id: 'pr6', src: '/fotearte/146.jpg', title: 'Fotearte Paraguay', category: 'productos', author: 'Desconocido', date: '2011' },
        { id: 'pr7', src: '/fotearte/46.jpg', title: 'La cara de fotearte', category: 'productos', author: 'Desconocido', date: '2011' },
        { id: 'pr8', src: '/fotearte/134.jpg', title: 'Disparo cruzado', category: 'productos', author: 'Desconocido', date: '2011' },
      ]
    },
    {
      id: 'eventos',
      title: 'Eventos',
      subtitle: 'Momentos que perduran',
      description: 'Capturamos la emoción y la energía de cada momento especial para que viva para siempre. ',
      layout: 'horizontal',
      photos: [
        { id: 'e1', src: '/fotearte/55.jpg', title: 'Boda en el Campo', category: 'eventos', author: 'Desconocido', date: '2024' },
        { id: 'e2', src: '/fotearte/53.jpg', title: 'Concierto Rock', category: 'eventos', author: 'Desconocido', date: '2024' },
        { id: 'e3', src: '/fotearte/54.jpg', title: 'Festival Cultural', category: 'eventos', author: 'Desconocido', date: '2023' },
        { id: 'e4', src: '/fotearte/147.jpg', title: 'Fiesta de 15', category: 'eventos', author: 'Desconocido', date: '2024' },
        { id: 'e5', src: '/fotearte/166.jpg', title: 'Corporativo', category: 'eventos', author: 'Desconocido', date: '2023' },
        { id: 'e6', src: '/fotearte/168.jpg', title: 'Graduación', category: 'eventos', author: 'Desconocido', date: '2024' },
        { id: 'e7', src: '/fotearte/186.jpg', title: 'Graduación', category: 'eventos', author: 'Desconocido', date: '2024' },
      ]
    },
    {
      id: 'naturaleza',
      title: 'Naturaleza',
      subtitle: 'La belleza salvaje',
      description: 'Flora y fauna paraguaya en su hábitat natural. Paciencia, respeto y el momento perfecto para capturar la vida silvestre.',
      layout: 'hero-grid',
      photos: [
        { id: 'n1', src: '/fotearte/74.jpg', title: 'Prácticas en el cerro', category: 'naturaleza', author: 'Desconocido', date: '2011', featured: true },
        { id: 'n2', src: '/fotearte/87.jpg', title: 'Entre piedras', category: 'naturaleza', author: 'Desconocido', date: '2011' },
        { id: 'n3', src: '/fotearte/4.jpg', title: 'Fotografías en el Botánico', category: 'naturaleza', author: 'Desconocido', date: '2011' },
        { id: 'n4', src: '/fotearte/37.jpg', title: 'Atardecer en el muelle', category: 'naturaleza', author: 'Desconocido', date: '2011' },
        { id: 'n5', src: '/fotearte/21.jpg', title: 'Al borde del lago', category: 'naturaleza', author: 'Desconocido', date: '2011' },
      ]
    }
  ]

  // Extraer todas las fotos para el lightbox
  const allPhotos = sections.flatMap(s => s.photos)

  return { sections, allPhotos }
}

// Featured photos para el hero
async function getFeaturedPhotos(): Promise<Photo[]> {
  return [
    { id: 'f1', src: '/gallery/archivo-personal.jpg', title: 'Archivo personal', category: 'featured', author: 'Manuel Pellón - Yaguarón, Paraguay', date: '2008' },
    { id: 'f2', src: '/gallery/luna-y-el-control-remoto.jpg', title: 'Luna y el control remoto.', category: 'featured', author: 'Manuel Pellón - Asunción, Paraguay', date: '2007' },
    { id: 'f3', src: '/gallery/el-rio-que-nos-separaba.jpg', title: ' El río que nos separaba (y nos unía)', category: 'featured', author: "Manuel Pellón - Chaco'i, Paraguay", date: '2013' },
  ]
}

// Página principal
export default async function GalleryPage() {
  const { sections, allPhotos } = await getGalleryData()
  const featuredPhotos = await getFeaturedPhotos()
  
  const totalPhotos = allPhotos.length
  const totalAuthors = [...new Set(allPhotos.map(p => p.author).filter(Boolean))].length

  return (
    <main className="min-h-screen bg-neutral-950">
      {/* Hero */}
      <GalleryHero featuredPhotos={featuredPhotos} />

      {/* Intro */}
      <section className="py-20 md:py-32 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                Una colección de
                <span className="text-neutral-500 font-light"> historias visuales</span>
              </h2>
              <p className="text-neutral-400 font-light text-lg leading-relaxed">
                Cada fotografía en esta galería representa el trabajo, la dedicación y la visión 
                única de nuestra comunidad. Tanto alumnos en sus primeros pasos hasta profesionales 
                consolidados, todos comparten la misma pasión: contar historias a través de la luz.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
            </div>
          </div>
        </div>
      </section>

      {/* Navegación de secciones */}
      <nav className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="shrink-0 px-4 py-2 text-sm font-light text-neutral-400 hover:text-orange-600 transition-colors duration-200 whitespace-nowrap"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Secciones de galería */}
      <div>
        {sections.map((section, index) => (
          <div key={section.id} id={section.id}>
            {/* El componente GallerySections maneja el renderizado */}
          </div>
        ))}
      </div>
      
      <GallerySections sections={sections} allPhotos={allPhotos} />

      {/* CTA Final */}
      <section className="py-24 md:py-32 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-orange-600 text-sm font-light tracking-[0.3em] uppercase mb-4 block">
            Sé parte de la galería
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Tu visión merece
            <span className="text-neutral-500 font-light"> ser vista</span>
          </h2>
          <p className="text-neutral-400 font-light text-lg mb-10 max-w-2xl mx-auto">
            ¿Querés que tus fotografías sean parte de esta colección? Formá parte de nuestra 
            comunidad y compartí tu trabajo con el mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cursos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
            >
              Empezar a aprender
              <Icon icon="mdi:arrow-right" className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:galeria@fotearte.com.py"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-700 text-white font-light rounded-full hover:border-orange-600 hover:text-orange-600 transition-colors duration-300"
            >
              Enviar mi trabajo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}