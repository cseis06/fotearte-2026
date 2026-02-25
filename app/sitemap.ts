import { MetadataRoute } from 'next'

const BASE_URL = 'https://fotearte.com.py'

export default function sitemap(): MetadataRoute.Sitemap {
  // Páginas estáticas principales
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/cursos`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cameras`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sobre-nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Páginas de cursos (en producción, obtener dinámicamente de DB)
  const cursos = [
    { slug: 'inicial', lastMod: new Date() },
    { slug: 'intermedio', lastMod: new Date() },
    { slug: 'avanzado', lastMod: new Date() },
    { slug: 'retrato', lastMod: new Date() },
    { slug: 'producto', lastMod: new Date() },
  ]

  const cursosPages = cursos.map((curso) => ({
    url: `${BASE_URL}/cursos/${curso.slug}`,
    lastModified: curso.lastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Páginas de cámaras (en producción, obtener dinámicamente de DB)
  const cameras = [
    'canon-r5',
    'sony-a7iv',
    'nikon-z8',
    'canon-5d-iv',
    'sony-fx3',
    'nikon-d850',
  ]

  const camerasPages = cameras.map((camera) => ({
    url: `${BASE_URL}/cameras/${camera}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Páginas de ubicaciones
  const ubicaciones = [
    'asuncion',
    'ciudad-del-este',
    'villarrica',
    'encarnacion',
    'coronel-oviedo',
  ]

  const ubicacionesPages = ubicaciones.map((ubicacion) => ({
    url: `${BASE_URL}/ubicaciones/${ubicacion}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [
    ...staticPages,
    ...cursosPages,
    ...camerasPages,
    ...ubicacionesPages,
  ]
}