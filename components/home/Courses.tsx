"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Inicial from '../../public/courses/inicial.jpg'
import Intermedio from '../../public/courses/intermedio.jpg'

// Datos de los cursos extraídos de los PDFs
const courses = [
  {
    id: "inicial",
    level: "01",
    title: "Nivel Inicial",
    description: "Aprende a dominar tu equipo desde cero. Descubre los fundamentos de la exposición manual, el triángulo de luz y las reglas de composición esenciales para crear imágenes impactantes. Ideal para entusiastas que buscan dejar el modo automático.",
    duration: "8 Semanas",
    price: "₲ 550.000 /mes",
    image: Inicial,
    slug: "/cursos/nivel-inicial",
    highlights: ["Mirada Fotográfica", "Dominio de Cámara", "Composición", "Retrato Natural"]
  },
  {
    id: "intermedio",
    level: "02",
    title: "Nivel Intermedio",
    description: "Lleva tu fotografía al siguiente nivel profesional. Domina el retrato en exteriores, aprende a dirigir sesiones con diferentes sujetos y desarrolla tu propio estilo editorial. Para quienes ya dominan el modo manual.",
    duration: "8 Semanas",
    price: "₲ 600.000 /mes",
    image: Intermedio,
    slug: "/cursos/nivel-intermedio",
    highlights: ["Retrato Profesional", "Dirección de Modelos", "Fotografía Editorial", "Portafolio Final"]
  }
]

const CoursesSection = () => {
  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-20  space-y-16 lg:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col gap-6 text-center">
          <div className='flex flex-col gap-2'>
            <span className="text-orange-600 text-sm font-light tracking-[0.3em] uppercase">Formación Profesional</span>
            <h2 className="text-white text-4xl lg:text-5xl font-semibold">
              Nuestros Cursos
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Programas diseñados para transformar tu pasión en una habilidad profesional.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="flex flex-col gap-20 lg:gap-32">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Course Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-lg">
                  <Image 
                    src={course.image} 
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Course Info */}
              <div className="w-full lg:w-1/2">
                {/* Level indicator */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 bg-orange-700 rounded-full" />
                  <span className="text-orange-600 text-sm tracking-[0.2em] uppercase font-light">
                    Nivel {course.level}
                  </span>
                  <span className="w-8 h-0.5 bg-orange-700 rounded-full" />
                </div>

                {/* Title */}
                <h3 className="text-white text-3xl lg:text-4xl font-semibold mb-4">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {course.highlights.map((highlight) => (
                    <span 
                      key={highlight}
                      className="text-xs text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg 
                      className="w-5 h-5 text-orange-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg 
                      className="w-5 h-5 text-orange-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    <span className="text-sm">{course.price}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  href={course.slug}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-full transition-all duration-300 group"
                >
                  <span className="text-sm font-semibold tracking-wide uppercase">Inscribirse</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <p className="text-gray-400">¿No estás seguro de qué curso elegir?</p>
          <Link 
            href="#"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-400 transition-colors duration-300 group"
          >
            <span className="font-light tracking-wide">Contactanos, te asesoramos</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection