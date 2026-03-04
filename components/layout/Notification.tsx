"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import gsap from 'gsap'

// Importar las imágenes de los cursos
import BgInicial from '../../public/courses/nivel-inicial.png'
import BgIntermedio from '../../public/courses/nivel-intermedio.jpeg'

interface Course {
  id: string
  level: string
  title: string
  subtitle: string
  month: string
  day: string
  location: string
  price: string
  priceLabel: string
  duration: string
  classes: string
  schedule: string
  features: string[]
  firstClassLocation: string
  image: StaticImageData
  enrollUrl: string
  infoUrl: string
}

const courses: Course[] = [
  {
    id: 'inicial',
    level: "Curso de Fotografía",
    title: "Nivel Inicial",
    subtitle: "Domina los fundamentos de la fotografía.",
    month: "Marzo",
    day: "14",
    location: "Asunción",
    price: "480MIL",
    priceLabel: "por mes",
    duration: "2 Meses",
    classes: "8 Clases",
    schedule: "Sábados de 15:00 a 17:00",
    features: [
      "Material didáctico incluido",
      "Cámaras disponibles para alquiler",
      "Certificado de participación"
    ],
    firstClassLocation: "Mariscal Office Asunción",
    image: BgInicial,
    enrollUrl: '/cursos/inscripciones/nivel-inicial',
    infoUrl: '/cursos#nivel-inicial'
  },
  {
    id: 'intermedio',
    level: "Curso de Fotografía",
    title: "Nivel Intermedio",
    subtitle: "Una experiencia de producción real.",
    month: "Marzo",
    day: "14",
    location: "Asunción",
    price: "550MIL",
    priceLabel: "por mes",
    duration: "2 Meses",
    classes: "8 Clases",
    schedule: "Sábados de 09:00 a 11:00",
    features: [
      "Producciones fotográficas reales",
      "Modelos y locaciones",
      "Certificado profesional"
    ],
    firstClassLocation: "Mariscal Office Asunción",
    image: BgIntermedio,
    enrollUrl: '/cursos/inscripciones/nivel-intermedio',
    infoUrl: '/cursos#nivel-intermedio'
  }
]

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const backdropRef = useRef<HTMLDivElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  const slideRef = useRef<HTMLDivElement>(null)

  const currentCourse = courses[currentIndex]

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('fotearte_popup_seen_v2')
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShouldRender(true)
        setIsVisible(true)
      }, 1500)
      
      return () => clearTimeout(timer)
    }
  }, [])

  // Animación de entrada
  useEffect(() => {
    if (isVisible && shouldRender) {
      const timer = setTimeout(() => {
        gsap.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "power2.out" }
        )

        gsap.fromTo(
          popupRef.current,
          { opacity: 0, scale: 0.9, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.4)", delay: 0.1 }
        )
      }, 50)

      return () => clearTimeout(timer)
    }
  }, [isVisible, shouldRender])

  // Animación al cambiar de slide
  useEffect(() => {
    if (slideRef.current && isVisible) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
      )
    }
  }, [currentIndex, isVisible])

  const handleClose = () => {
    localStorage.setItem('fotearte_popup_seen_v2', 'true')

    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false)
        setShouldRender(false)
      }
    })

    tl.to(popupRef.current, {
      opacity: 0,
      scale: 0.95,
      y: 20,
      duration: 0.3,
      ease: "power2.in"
    })

    tl.to(backdropRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in"
    }, "-=0.15")
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!shouldRender) return null

  return (
    <div 
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm opacity-0 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div 
        ref={popupRef}
        className="relative w-full max-w-2xl my-auto bg-black rounded-2xl overflow-hidden shadow-2xl shadow-black/50 opacity-0"
        style={{ maxHeight: 'calc(100dvh - 2rem)' }}
      >
        {/* Contenedor scrolleable */}
        <div className="overflow-y-auto max-h-[calc(100dvh-2rem)]">
          
          {/* Botón cerrar */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-all duration-200"
            aria-label="Cerrar"
          >
            <Icon icon="mdi:close" className="w-5 h-5" />
          </button>

          {/* Flechas de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-all duration-200"
            aria-label="Curso anterior"
          >
            <Icon icon="mdi:chevron-left" className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-all duration-200"
            aria-label="Curso siguiente"
          >
            <Icon icon="mdi:chevron-right" className="w-6 h-6" />
          </button>

          {/* Contenido del slide */}
          <div ref={slideRef} key={currentCourse.id}>
            {/* Imagen superior */}
            <div className="relative h-48 sm:h-56 md:h-64 bg-black overflow-hidden">
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <Image
                  src={currentCourse.image}
                  alt={`${currentCourse.level} ${currentCourse.title}`}
                  fill
                  className="object-cover object-center"
                  priority
                  placeholder="blur"
                />
              </div>
              
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-neutral-900/30" />
              
              {/* Contenido sobre la imagen */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/80 text-sm mb-1">{currentCourse.level}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {currentCourse.title}
                </h2>
                <p className="text-orange-600 text-sm font-medium">
                  {currentCourse.subtitle}
                </p>
              </div>

              {/* Badge "Próximo curso" */}
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-600 text-white text-xs font-semibold rounded-full">
                <Icon icon="mdi:bell-ring" className="w-3.5 h-3.5 animate-pulse" />
                Próximo curso
              </span>

              {/* Indicador de curso */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-black/50 rounded-full">
                <span className="text-white text-xs font-medium">
                  {currentIndex + 1} / {courses.length}
                </span>
              </div>
            </div>

            {/* Línea naranja divisoria */}
            <div className="h-1 bg-gradient-to-r from-orange-600 via-orange-600 to-orange-600" />

            {/* Contenido inferior */}
            <div className="p-6 bg-black">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                
                {/* Fecha y ubicación */}
                <div className="w-50 flex items-center justify-center gap-4 sm:border-r sm:border-neutral-800 sm:pr-6">
                  <div className="text-center">
                    <p className="text-orange-600 text-lg font-semibold tracking-[0.2em] uppercase">
                      {currentCourse.month}
                    </p>
                    <p className="text-orange-600 text-5xl sm:text-8xl font-bold leading-none">
                      {currentCourse.day}
                    </p>
                    <p className="text-white text-lg font-semibold tracking-[0.15em] uppercase mt-1">
                      {currentCourse.location}
                    </p>
                  </div>
                </div>

                {/* Detalles */}
                <div className="flex flex-col gap-3 flex-1 pl-8">
                  {/* Precio */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-orange-600 text-3xl sm:text-4xl font-bold">
                      {currentCourse.price}
                    </span>
                    <span className="text-neutral-400 text-sm">
                      {currentCourse.priceLabel}
                    </span>
                  </div>

                  {/* Duración y clases */}
                  <div className="flex gap-4 text-white">
                    <span className="font-semibold">{currentCourse.duration}</span>
                    <span className="text-neutral-600">|</span>
                    <span className="font-semibold">{currentCourse.classes}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-neutral-300 text-sm">
                      <Icon icon="mdi:calendar-clock" className="w-4 h-4 text-orange-600 flex-shrink-0" />
                      <span>{currentCourse.schedule}</span>
                    </div>
                    
                    {currentCourse.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-neutral-300 text-sm">
                        <Icon icon="mdi:check-circle" className="w-4 h-4 text-orange-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    
                    <div className="flex items-center gap-2 text-neutral-300 text-sm">
                      <Icon icon="mdi:map-marker" className="w-4 h-4 text-orange-600 flex-shrink-0" />
                      <span>1ra clase: {currentCourse.firstClassLocation}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots de navegación */}
              <div className="flex justify-center gap-2 mt-6">
                {courses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-orange-600 w-8' 
                        : 'bg-neutral-600 hover:bg-neutral-500'
                    }`}
                    aria-label={`Ir al curso ${index + 1}`}
                  />
                ))}
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-neutral-800">
                <a
                  href={currentCourse.infoUrl}
                  className="flex-1 px-4 py-3 bg-orange-600 text-white font-semibold text-sm rounded-full hover:bg-orange-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Icon icon="mdi:information" className="w-5 h-5" />
                  Más información
                </a>
                <a
                  href={currentCourse.enrollUrl}
                  className="flex-1 px-4 py-3 bg-transparent border border-neutral-700 text-white font-semibold text-sm rounded-full hover:border-orange-600 hover:text-orange-600 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Icon icon="mdi:pencil" className="w-5 h-5" />
                  Inscribirme
                </a>
              </div>

              {/* Link para no mostrar más */}
              <button
                onClick={handleClose}
                className="w-full mt-4 text-neutral-500 text-xs hover:text-neutral-400 transition-colors cursor-pointer"
              >
                No mostrar de nuevo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification