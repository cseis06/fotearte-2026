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
      description: 'Capturamos la esencia de cada persona. Cada retrato es una ventana al interior, una historia contada a través de la luz, las sombras y la expresión.',
      layout: 'hero-grid',
      photos: [
        { id: 'r1', src: '/photos/retrato-01.jpg', title: 'Mirada Profunda', category: 'retratos', author: 'María González', date: '2024' },
        { id: 'r2', src: '/photos/retrato-02.jpg', title: 'Luz Natural', category: 'retratos', author: 'Carlos Benítez', date: '2024' },
        { id: 'r3', src: '/photos/retrato-03.jpg', title: 'Sombras', category: 'retratos', author: 'Ana Villalba', date: '2023' },
        { id: 'r4', src: '/photos/retrato-04.jpg', title: 'Expresión', category: 'retratos', author: 'Luis Paredes', date: '2024' },
        { id: 'r5', src: '/photos/retrato-05.jpg', title: 'Serenidad', category: 'retratos', author: 'Sofía Ramírez', date: '2023' },
      ]
    },
    {
      id: 'paisajes',
      title: 'Paisajes',
      subtitle: 'Paraguay en su máxima expresión',
      description: 'Desde los atardeceres sobre el río Paraguay hasta la inmensidad del Chaco. Nuestro país tiene una belleza única esperando ser capturada.',
      layout: 'cinema',
      photos: [
        { id: 'p1', src: '/photos/paisaje-01.jpg', title: 'Atardecer en el Río', category: 'paisajes', author: 'Roberto Núñez', date: '2024' },
        { id: 'p2', src: '/photos/paisaje-02.jpg', title: 'Cerro Lambaré', category: 'paisajes', author: 'Laura Martínez', date: '2024' },
        { id: 'p3', src: '/photos/paisaje-03.jpg', title: 'Selva del Este', category: 'paisajes', author: 'Diego Acosta', date: '2023' },
        { id: 'p4', src: '/photos/paisaje-04.jpg', title: 'Amanecer Chaqueño', category: 'paisajes', author: 'Elena Ferreira', date: '2024' },
      ]
    },
    {
      id: 'street',
      title: 'Street Photography',
      subtitle: 'La vida en las calles',
      description: 'Momentos efímeros, gestos cotidianos, la poesía de lo urbano. La calle es nuestro estudio y la vida real, nuestra musa.',
      layout: 'masonry',
      photos: [
        { id: 's1', src: '/photos/street-01.jpg', title: 'Mercado 4', category: 'street', author: 'Andrés Mendoza', date: '2024' },
        { id: 's2', src: '/photos/street-02.jpg', title: 'Asunción de Noche', category: 'street', author: 'Valeria Ortiz', date: '2024' },
        { id: 's3', src: '/photos/street-03.jpg', title: 'El Vendedor', category: 'street', author: 'Tomás Rojas', date: '2023' },
        { id: 's4', src: '/photos/street-04.jpg', title: 'Paseo de la Galería', category: 'street', author: 'Camila Duarte', date: '2024' },
        { id: 's5', src: '/photos/street-05.jpg', title: 'Lluvia Urbana', category: 'street', author: 'Fernando López', date: '2023' },
        { id: 's6', src: '/photos/street-06.jpg', title: 'Reflejos', category: 'street', author: 'Patricia Giménez', date: '2024' },
        { id: 's7', src: '/photos/street-07.jpg', title: 'Espera', category: 'street', author: 'Juan Vera', date: '2023' },
        { id: 's8', src: '/photos/street-08.jpg', title: 'Movimiento', category: 'street', author: 'Lucía Cabrera', date: '2024' },
      ]
    },
    {
      id: 'productos',
      title: 'Fotografía de Producto',
      subtitle: 'El arte de vender con imágenes',
      description: 'Cada producto tiene una historia. Nosotros la contamos a través de composiciones cuidadas, iluminación precisa y atención al detalle.',
      layout: 'featured-duo',
      photos: [
        { id: 'pr1', src: '/photos/producto-01.jpg', title: 'Reloj de Lujo', category: 'productos', author: 'Marcos Silva', date: '2024' },
        { id: 'pr2', src: '/photos/producto-02.jpg', title: 'Cosmética Natural', category: 'productos', author: 'Isabel Aquino', date: '2024' },
        { id: 'pr3', src: '/photos/producto-03.jpg', title: 'Joyería Artesanal', category: 'productos', author: 'Héctor Cardozo', date: '2023' },
        { id: 'pr4', src: '/photos/producto-04.jpg', title: 'Gastronomía', category: 'productos', author: 'Mónica Espínola', date: '2024' },
        { id: 'pr5', src: '/photos/producto-05.jpg', title: 'Moda', category: 'productos', author: 'Ricardo Fleitas', date: '2023' },
        { id: 'pr6', src: '/photos/producto-06.jpg', title: 'Artesanía', category: 'productos', author: 'Gabriel Paredes', date: '2024' },
        { id: 'pr7', src: '/photos/producto-07.jpg', title: 'Tecnología', category: 'productos', author: 'Daniela Ortega', date: '2023' },
        { id: 'pr8', src: '/photos/producto-08.jpg', title: 'Bebidas', category: 'productos', author: 'Martín Benítez', date: '2024' },
      ]
    },
    {
      id: 'eventos',
      title: 'Eventos',
      subtitle: 'Momentos que perduran',
      description: 'Bodas, conciertos, celebraciones. Capturamos la emoción y la energía de cada momento especial para que viva para siempre.',
      layout: 'horizontal',
      photos: [
        { id: 'e1', src: '/photos/evento-01.jpg', title: 'Boda en el Campo', category: 'eventos', author: 'Patricia Giménez', date: '2024' },
        { id: 'e2', src: '/photos/evento-02.jpg', title: 'Concierto Rock', category: 'eventos', author: 'Juan Vera', date: '2024' },
        { id: 'e3', src: '/photos/evento-03.jpg', title: 'Festival Cultural', category: 'eventos', author: 'Lucía Cabrera', date: '2023' },
        { id: 'e4', src: '/photos/evento-04.jpg', title: 'Fiesta de 15', category: 'eventos', author: 'Andrés Mendoza', date: '2024' },
        { id: 'e5', src: '/photos/evento-05.jpg', title: 'Corporativo', category: 'eventos', author: 'Valeria Ortiz', date: '2023' },
        { id: 'e6', src: '/photos/evento-06.jpg', title: 'Graduación', category: 'eventos', author: 'Tomás Rojas', date: '2024' },
      ]
    },
    {
      id: 'naturaleza',
      title: 'Naturaleza',
      subtitle: 'La belleza salvaje',
      description: 'Flora y fauna paraguaya en su hábitat natural. Paciencia, respeto y el momento perfecto para capturar la vida silvestre.',
      layout: 'hero-grid',
      photos: [
        { id: 'n1', src: '/photos/naturaleza-01.jpg', title: 'Tucán', category: 'naturaleza', author: 'Elena Ferreira', date: '2024', featured: true },
        { id: 'n2', src: '/photos/naturaleza-02.jpg', title: 'Orquídea Silvestre', category: 'naturaleza', author: 'Gabriel Paredes', date: '2024' },
        { id: 'n3', src: '/photos/naturaleza-03.jpg', title: 'Yacaré', category: 'naturaleza', author: 'Isabel Aquino', date: '2023' },
        { id: 'n4', src: '/photos/naturaleza-04.jpg', title: 'Mariposa Azul', category: 'naturaleza', author: 'Diego Acosta', date: '2024' },
        { id: 'n5', src: '/photos/naturaleza-05.jpg', title: 'Carpincho', category: 'naturaleza', author: 'Roberto Núñez', date: '2023' },
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
    { id: 'f1', src: '/photos/featured-01.jpg', title: 'Obra Destacada', category: 'featured', author: 'María González', date: '2024' },
    { id: 'f2', src: '/photos/featured-02.jpg', title: 'Selección Editorial', category: 'featured', author: 'Carlos Benítez', date: '2024' },
    { id: 'f3', src: '/photos/featured-03.jpg', title: 'Mejor del Mes', category: 'featured', author: 'Ana Villalba', date: '2024' },
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
                única de nuestra comunidad. Desde alumnos en sus primeros pasos hasta profesionales 
                consolidados, todos comparten la misma pasión: contar historias a través de la luz.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-semibold text-white mb-2">{totalPhotos}+</p>
                <p className="text-neutral-500 font-light text-sm">Fotografías</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-semibold text-white mb-2">{totalAuthors}</p>
                <p className="text-neutral-500 font-light text-sm">Fotógrafos</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-semibold text-white mb-2">{sections.length}</p>
                <p className="text-neutral-500 font-light text-sm">Categorías</p>
              </div>
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
                className="flex-shrink-0 px-4 py-2 text-sm font-light text-neutral-400 hover:text-orange-600 transition-colors duration-200 whitespace-nowrap"
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