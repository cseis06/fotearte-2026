import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import AboutAnimations from '@/components/institucional/about/AboutAnimations'

// Imágenes (ajustar rutas según tu estructura)
import FounderImg from '../../../public/courses/notificacion.jpg'
import StudioImg from '../../../public/courses/notificacion.jpg'
import ClassImg from '../../../public/courses/notificacion.jpg'
import CommunityImg from '../../../public/courses/notificacion.jpg'

// ============================================
// METADATA SEO
// ============================================
export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: 'Conocé la historia de FoteArte, escuela de fotografía fundada en 2010 por Manuel Pellón. Nuestra misión: hacer visible lo invisible a través de la fotografía.',
  
  keywords: [
    'FoteArte historia',
    'Manuel Pellón fotógrafo',
    'escuela fotografía Paraguay',
    'sobre FoteArte',
    'fotografía artística Paraguay',
  ],

  openGraph: {
    title: 'Sobre Nosotros | FoteArte Paraguay',
    description: 'Desde 2010 formando fotógrafos apasionados. Conocé nuestra historia.',
    url: 'https://fotearte.com.py/about',
    images: [{ url: '/og-about.jpg', width: 1200, height: 630 }],
  },

  alternates: {
    canonical: 'https://fotearte.com.py/about',
  },
}

// ============================================
// DATOS
// ============================================
const milestones = [
  {
    year: '2010',
    title: 'El comienzo',
    description: 'Manuel Pellón funda FoteArte como estudio de producciones fotográficas artísticas, comerciales y sociales.',
    image: '/about/timeline/2010.jpg'
  },
  {
    year: '2012',
    title: 'Primeros cursos',
    description: 'Nace la escuela. Los primeros 12 alumnos aprenden los secretos de la fotografía en nuestro estudio de Asunción.',
    image: '/about/timeline/2012.jpg'
  },
  {
    year: '2015',
    title: 'Expansión',
    description: 'Abrimos sede en Ciudad del Este, llevando la fotografía profesional al este del país.',
    image: '/about/timeline/2015.jpg'
  },
  {
    year: '2018',
    title: 'Comunidad',
    description: 'Más de 1,000 egresados. Creamos la comunidad FoteArte para conectar a fotógrafos de todo el país.',
    image: '/about/timeline/2018.jpg'
  },
  {
    year: '2021',
    title: '10 años',
    description: 'Una década formando miradas. Celebramos con una exposición colectiva de nuestros mejores alumnos.',
    image: '/about/timeline/2021.jpg'
  },
  {
    year: '2024',
    title: 'Hoy',
    description: '5 sedes, más de 3,000 egresados y el mismo compromiso: hacer visible lo invisible.',
    image: '/about/timeline/2024.jpg'
  }
]

const values = [
  {
    icon: 'mdi:eye-outline',
    title: 'Mirada única',
    description: 'Cada fotógrafo tiene una visión propia. Nosotros te ayudamos a descubrirla y desarrollarla.'
  },
  {
    icon: 'mdi:hand-heart-outline',
    title: 'Pasión genuina',
    description: 'La fotografía no es solo técnica, es emoción. Enseñamos con el corazón.'
  },
  {
    icon: 'mdi:account-group-outline',
    title: 'Comunidad',
    description: 'No formas parte de un curso, formas parte de una familia de fotógrafos.'
  },
  {
    icon: 'mdi:lightbulb-outline',
    title: 'Aprendizaje continuo',
    description: 'Nunca dejamos de aprender. Ni nosotros, ni vos.'
  }
]

const stats = [
  { number: '14+', label: 'Años de historia' },
  { number: '3,000+', label: 'Fotógrafos formados' },
  { number: '5', label: 'Ciudades' },
  { number: '50+', label: 'Equipos disponibles' }
]

// ============================================
// PÁGINA
// ============================================
export default function AboutPage() {
  return (
    <>
      <AboutAnimations />
      
      <main className="min-h-screen bg-black overflow-hidden">
        
        {/* ========== HERO ========== */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background con efecto parallax */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10" />
            <Image
              src={StudioImg}
              alt="Estudio FoteArte"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>

          {/* Contenido */}
          <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
            <p className="hero-subtitle text-orange-600 text-sm font-light tracking-[0.4em] uppercase mb-6 opacity-0">
              Desde 2010
            </p>
            <h1 className="hero-title text-5xl md:text-6xl lg:text-8xl font-semibold text-white mb-8 leading-[0.95] opacity-0">
              Hacemos visible
              <br />
              <span className="text-neutral-500 font-light">lo invisible</span>
            </h1>
            <p className="hero-description text-neutral-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0">
              Más que una escuela de fotografía. Un espacio donde tu creatividad 
              florece y tu mirada se transforma.
            </p>
          </div>
        </section>

        {/* ========== LA HISTORIA ========== */}
        <section className="py-24 md:py-32 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Texto */}
              <div className="story-content">
                <span className="text-orange-600 text-sm font-light tracking-[0.3em] uppercase mb-4 block">
                  Nuestra Historia
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                  Una pasión que se convirtió en
                  <span className="text-neutral-500 font-light"> escuela</span>
                </h2>
                <div className="space-y-4 text-neutral-400 font-light leading-relaxed">
                  <p>
                    <strong className="text-white font-semibold">FoteArte</strong> nació en noviembre de 2010, 
                    de la mano del reconocido fotógrafo paraguayo Manuel Pellón. Lo que comenzó como un 
                    estudio dedicado a producciones fotográficas artísticas, comerciales y sociales, 
                    pronto se transformó en algo más grande.
                  </p>
                  <p>
                    Con el tiempo, descubrimos que nuestra verdadera vocación era compartir el conocimiento. 
                    Queríamos que más personas pudieran experimentar la magia de capturar un momento, 
                    de contar una historia con luz y sombra.
                  </p>
                  <p>
                    Hoy, más de una década después, seguimos fieles a nuestra misión original: 
                    <em className="text-orange-500 not-italic"> hacer visible lo invisible</em>, 
                    llevando la pasión por la fotografía a entusiastas de las artes visuales en todo Paraguay.
                  </p>
                </div>
              </div>

              {/* Imagen */}
              <div className="story-image relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src={ClassImg}
                    alt="Clase de fotografía en FoteArte"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decoración */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-orange-600/30 rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-600/10 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== FUNDADOR ========== */}
        <section className="py-24 md:py-32 bg-neutral-900/30 relative overflow-hidden">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/5 to-transparent pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Imagen del fundador */}
              <div className="founder-image relative order-2 lg:order-1">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={FounderImg}
                    alt="Manuel Pellón - Fundador de FoteArte"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay con nombre */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-2xl font-semibold">Manuel Pellón</p>
                    <p className="text-orange-500 font-light">Fundador & Director</p>
                  </div>
                </div>
                
                {/* Quote decorativo */}
                <div className="absolute -top-4 -left-4 text-orange-600/20">
                  <Icon icon="mdi:format-quote-open" className="w-24 h-24" />
                </div>
              </div>

              {/* Bio */}
              <div className="founder-content order-1 lg:order-2">
                <span className="text-orange-600 text-sm font-light tracking-[0.3em] uppercase mb-4 block">
                  El Fundador
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                  La visión detrás
                  <span className="text-neutral-500 font-light"> de FoteArte</span>
                </h2>
                
                <blockquote className="text-xl md:text-2xl text-neutral-300 font-light italic leading-relaxed mb-8 border-l-2 border-orange-600 pl-6">
                  &quot;La fotografía es el arte de hacer visible lo que otros no ven. 
                  Mi misión es ayudarte a descubrir esa mirada única que solo vos tenés.&quot;
                </blockquote>

                <div className="space-y-4 text-neutral-400 font-light leading-relaxed mb-8">
                  <p>
                    Manuel Pellón es un fotógrafo paraguayo con más de 20 años de experiencia 
                    en fotografía artística, comercial y documental. Su trabajo ha sido reconocido 
                    internacionalmente y ha colaborado con marcas y publicaciones de renombre.
                  </p>
                  <p>
                    Más allá de su carrera como fotógrafo, Manuel encontró su verdadera pasión 
                    en la enseñanza. Cree firmemente que cada persona tiene una historia que 
                    contar y que la fotografía es el medio perfecto para hacerlo.
                  </p>
                </div>

                <Link
                  href="https://manuelpellon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-500 transition-colors duration-200 group"
                >
                  <span className="font-light">Conocer más sobre Manuel</span>
                  <Icon icon="mdi:arrow-right" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========== MISIÓN & VALORES ========== */}
        <section className="py-24 md:py-32 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            {/* Misión y Visión */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Misión */}
              <div className="mission-card bg-gradient-to-br from-orange-600/10 to-transparent border border-orange-600/20 rounded-3xl p-8 md:p-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-600/20 mb-6">
                  <Icon icon="mdi:compass-outline" className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Nuestra Misión</h3>
                <p className="text-neutral-300 font-light leading-relaxed text-lg">
                  Hacer visible lo invisible. Formar fotógrafos capaces de capturar la esencia 
                  de cada momento, desarrollando su mirada única y transformando su pasión 
                  en una habilidad profesional.
                </p>
              </div>

              {/* Visión */}
              <div className="vision-card bg-neutral-800/30 border border-neutral-700 rounded-3xl p-8 md:p-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-neutral-700/50 mb-6">
                  <Icon icon="mdi:telescope" className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Nuestra Visión</h3>
                <p className="text-neutral-300 font-light leading-relaxed text-lg">
                  Ser la escuela de fotografía referente en Paraguay y la región, 
                  reconocida por la calidad de nuestra formación y el impacto de 
                  nuestra comunidad de fotógrafos.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Lo que nos
                <span className="text-neutral-500 font-light"> mueve</span>
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="value-card group text-center p-6 rounded-2xl border border-neutral-800 hover:border-orange-600/50 transition-colors duration-300"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-neutral-800 group-hover:bg-orange-600/20 mx-auto mb-4 transition-colors duration-300">
                    <Icon icon={value.icon} className="w-7 h-7 text-neutral-400 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                  <p className="text-neutral-500 font-light text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== STATS ========== */}
        <section className="py-20 border-y border-neutral-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="stat-item text-center">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-2">
                    {stat.number}
                  </p>
                  <p className="text-neutral-500 font-light">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== COMUNIDAD ========== */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Texto */}
              <div className="community-content">
                <span className="text-orange-600 text-sm font-light tracking-[0.3em] uppercase mb-4 block">
                  Nuestra Comunidad
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                  Más que alumnos,
                  <span className="text-neutral-500 font-light"> familia</span>
                </h2>
                <p className="text-neutral-400 font-light leading-relaxed mb-8">
                  Cuando te unís a FoteArte, no solo aprendés fotografía. 
                  Te convertís en parte de una comunidad de apasionados que se apoyan, 
                  inspiran y crecen juntos. Organizamos exposiciones, salidas fotográficas, 
                  workshops y encuentros para que sigas conectado mucho después de terminar tu curso.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/cursos"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
                  >
                    Quiero ser parte
                    <Icon icon="mdi:arrow-right" className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-700 text-white font-light rounded-full hover:border-orange-600 hover:text-orange-600 transition-colors duration-300"
                  >
                    Ver trabajos
                  </Link>
                </div>
              </div>

              {/* Collage de fotos */}
              <div className="community-images relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={CommunityImg}
                      alt="Comunidad FoteArte"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-orange-600/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Icon icon="mdi:instagram" className="w-10 h-10 text-orange-600 mx-auto mb-2" />
                      <p className="text-white font-semibold">@foteartepy</p>
                      <p className="text-neutral-400 text-sm font-light">Seguinos</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-800">
                    <Image
                      src="/about/community-2.jpg"
                      alt="Alumnos FoteArte"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="/about/community-3.jpg"
                      alt="Exposición FoteArte"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CTA FINAL ========== */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-neutral-900/50 to-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Tu historia comienza
              <span className="text-neutral-500 font-light"> aquí</span>
            </h2>
            <p className="text-neutral-400 font-light text-lg mb-10 max-w-2xl mx-auto">
              Más de 3,000 fotógrafos ya descubrieron su mirada con nosotros. 
              ¿Estás listo para descubrir la tuya?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cursos"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300 text-lg"
              >
                Explorar cursos
                <Icon icon="mdi:arrow-right" className="w-6 h-6" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-neutral-700 text-white font-light rounded-full hover:border-orange-600 hover:text-orange-600 transition-colors duration-300 text-lg"
              >
                Contactanos
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}