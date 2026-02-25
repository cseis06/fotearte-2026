import type { Metadata, Viewport } from 'next'

// Configuración base del sitio
const siteConfig = {
  name: 'FoteArte Paraguay',
  shortName: 'FoteArte',
  description: 'Escuela de fotografía líder en Paraguay desde 2011. Cursos presenciales y online, alquiler de equipos profesionales y una comunidad de más de 3,000 fotógrafos.',
  tagline: 'Más que una escuela de fotografía',
  url: 'https://fotearte.com.py',
  ogImage: '/og-image.jpg',
  links: {
    instagram: 'https://www.instagram.com/fotearte',
    facebook: 'https://www.facebook.com/Fotearte',
    whatsapp: 'https://wa.me/595973497799',
  },
  founder: 'FoteArte Paraguay',
  foundingYear: 2011,
  locations: ['Asunción', 'Ciudad del Este', 'Villarrica', 'Encarnación', 'Coronel Oviedo'],
}

// Viewport configuration (separado en Next.js 14+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ea580c' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

// Metadata principal
export const metadata: Metadata = {
  // Básicos
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  
  // Keywords para SEO
  keywords: [
    // Marca
    'FoteArte',
    'FoteArte Paraguay',
    'escuela de fotografía Paraguay',
    
    // Servicios principales
    'cursos de fotografía',
    'clases de fotografía',
    'taller de fotografía',
    'curso fotografía Asunción',
    'aprender fotografía Paraguay',
    
    // Niveles
    'curso fotografía principiantes',
    'curso fotografía intermedio',
    'fotografía profesional',
    
    // Alquiler
    'alquiler cámaras Paraguay',
    'alquiler equipos fotográficos',
    'rent camera Asunción',
    
    // Ubicaciones
    'fotografía Asunción',
    'fotografía Ciudad del Este',
    'fotografía Encarnación',
    
    // Tipos de fotografía
    'fotografía de retratos',
    'fotografía de productos',
    'fotografía de eventos',
    'fotografía de paisajes',
  ],

  // Autores y creadores
  authors: [
    { name: siteConfig.founder, url: siteConfig.url }
  ],
  creator: siteConfig.founder,
  publisher: siteConfig.founder,

  // Configuración de robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'es_PY',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Escuela de Fotografía en Paraguay`,
        type: 'image/jpeg',
      },
      {
        url: `${siteConfig.url}/og-image-square.jpg`,
        width: 600,
        height: 600,
        alt: `${siteConfig.name} Logo`,
        type: 'image/jpeg',
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
    creator: '@foteartepy',
    site: '@foteartepy',
  },

  // Íconos y manifest
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#ea580c' },
    ],
  },
  manifest: '/site.webmanifest',

  // URL canónica
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'es-PY': siteConfig.url,
      'es': siteConfig.url,
    },
  },

  // Verificación de buscadores (agregar tus códigos)
  verification: {
    google: 'tu-codigo-de-verificacion-google',
    // yandex: 'tu-codigo-yandex',
    // bing: 'tu-codigo-bing',
  },

  // App específico
  applicationName: siteConfig.name,
  appleWebApp: {
    capable: true,
    title: siteConfig.shortName,
    statusBarStyle: 'black-translucent',
  },

  // Formato de detección
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },

  // Categoría del sitio
  category: 'education',

  // Otros metadatos
  other: {
    'msapplication-TileColor': '#ea580c',
    'msapplication-config': '/browserconfig.xml',
  },
}

// Schema.org JSON-LD para SEO estructurado
export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // Organización
    {
      '@type': 'EducationalOrganization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
        width: 180,
        height: 60,
      },
      description: siteConfig.description,
      foundingDate: siteConfig.foundingYear.toString(),
      address: siteConfig.locations.map(location => ({
        '@type': 'PostalAddress',
        addressLocality: location,
        addressCountry: 'PY',
      })),
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+595-971-000000',
        contactType: 'customer service',
        availableLanguage: ['Spanish', 'Guarani'],
      },
      sameAs: [
        siteConfig.links.instagram,
        siteConfig.links.facebook,
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
        worstRating: '1',
      },
    },
    // Sitio Web
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        '@id': `${siteConfig.url}/#organization`,
      },
      inLanguage: 'es-PY',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    // Servicio de cursos
    {
      '@type': 'Service',
      '@id': `${siteConfig.url}/#courses`,
      name: 'Cursos de Fotografía',
      provider: {
        '@id': `${siteConfig.url}/#organization`,
      },
      serviceType: 'Photography Education',
      areaServed: {
        '@type': 'Country',
        name: 'Paraguay',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Cursos de Fotografía',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              name: 'Curso de Fotografía Nivel Inicial',
              description: 'Aprende los fundamentos de la fotografía desde cero.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              name: 'Curso de Fotografía Nivel Intermedio',
              description: 'Perfecciona tu técnica con producciones reales.',
            },
          },
        ],
      },
    },
    // Servicio de alquiler
    {
      '@type': 'Service',
      '@id': `${siteConfig.url}/#rental`,
      name: 'Alquiler de Equipos Fotográficos',
      provider: {
        '@id': `${siteConfig.url}/#organization`,
      },
      serviceType: 'Camera Rental',
      areaServed: {
        '@type': 'Country',
        name: 'Paraguay',
      },
    },
  ],
}

// Exportar configuración para uso en otros componentes
export { siteConfig }