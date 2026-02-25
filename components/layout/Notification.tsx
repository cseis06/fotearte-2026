"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import gsap from 'gsap'

// Importar la imagen del curso
import BgImage from '../../public/courses/notificacion.jpg'

interface Notification {
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
}

const CoursePopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  
  const backdropRef = useRef<HTMLDivElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLSpanElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const imageContentRef = useRef<HTMLDivElement>(null)
  const dateRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  const Notification: Notification = {
    level: "Curso de Fotografía Nivel",
    title: "Intermedio Profesional",
    subtitle: "Una experiencia de producción real.",
    month: "Marzo",
    day: "14",
    location: "Asunción",
    price: "550MIL",
    priceLabel: "por mes",
    duration: "2 Meses",
    classes: "8 Clases",
    schedule: "Sábados de 09:00AM a 11:00AM",
    features: [
      "Producciones y certificados",
      "Cámaras incluidas"
    ],
    firstClassLocation: "Mariscal Office Asunción"
  }

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('fotearte_popup_seen')
    
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
        const tl = gsap.timeline()
        timelineRef.current = tl

        // Backdrop fade in
        tl.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "power2.out" }
        )

        // Popup escala y fade
        tl.fromTo(
          popupRef.current,
          { 
            opacity: 0, 
            scale: 0.9,
            y: 30
          },
          { 
            opacity: 1, 
            scale: 1,
            y: 0,
            duration: 0.5, 
            ease: "back.out(1.4)"
          },
          "-=0.2"
        )

        // Imagen zoom in sutil
        tl.fromTo(
          imageRef.current,
          { scale: 1.1 },
          { scale: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        )

        // Badge bounce in
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0, y: -10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(2)" },
          "-=0.5"
        )

        // Contenido de imagen slide up
        tl.fromTo(
          imageContentRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.3"
        )

        // Fecha con efecto especial
        tl.fromTo(
          dateRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
          "-=0.2"
        )

        // Detalles stagger
        if (detailsRef.current) {
          tl.fromTo(
            detailsRef.current.children,
            { opacity: 0, x: 15 },
            { 
              opacity: 1, 
              x: 0, 
              duration: 0.3, 
              stagger: 0.08,
              ease: "power2.out"
            },
            "-=0.2"
          )
        }

        // Botones slide up
        tl.fromTo(
          buttonsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.1"
        )
      }, 50)

      return () => clearTimeout(timer)
    }
  }, [isVisible, shouldRender])

  const handleClose = () => {
    localStorage.setItem('fotearte_popup_seen', 'true')

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

  if (!shouldRender) return null

  return (
    <div 
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm opacity-0"
      onClick={handleBackdropClick}
    >
      <div 
        ref={popupRef}
        className="relative w-full max-w-2xl bg-black rounded-2xl overflow-hidden shadow-2xl shadow-black/50 opacity-0"
      >
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/60 transition-all duration-200"
          aria-label="Cerrar"
        >
          <Icon icon="mdi:close" className="w-5 h-5" />
        </button>

        {/* Imagen superior */}
        <div className="relative h-48 sm:h-56 md:h-64 bg-black overflow-hidden">
          {/* Imagen de fondo */}
          <div ref={imageRef} className="absolute inset-0">
            <Image
              src={BgImage}
              alt="Curso de Fotografía Intermedio Profesional"
              fill
              className="object-cover object-center"
              priority
              placeholder="blur"
            />
          </div>
          
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-neutral-900/30" />
          
          {/* Contenido sobre la imagen */}
          <div ref={imageContentRef} className="absolute bottom-0 left-0 right-0 p-6 opacity-0">
            <p className="text-white/80 text-sm mb-1">{Notification.level}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {Notification.title}
            </h2>
            <p className="text-orange-600 text-sm font-medium">
              {Notification.subtitle}
            </p>
          </div>

          {/* Badge "Próximo curso" */}
          <span 
            ref={badgeRef}
            className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-600 text-white text-xs font-semibold rounded-full opacity-0"
          >
            <Icon icon="mdi:bell-ring" className="w-3.5 h-3.5 animate-pulse" />
            Próximo curso
          </span>
        </div>

        {/* Línea naranja divisoria */}
        <div className="h-1 bg-gradient-to-r from-orange-600 to-orange-600" />

        {/* Contenido inferior */}
        <div className="p-6 bg-black">
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            
            {/* Fecha y ubicación */}
            <div 
              ref={dateRef}
              className="flex items-center gap-4 sm:border-r sm:border-neutral-800 sm:pr-6 opacity-0"
            >
              <div className="text-center">
                <p className="text-orange-600 text-xs font-semibold tracking-[0.2em] uppercase">
                  {Notification.month}
                </p>
                <p className="text-orange-600 text-5xl sm:text-6xl font-bold leading-none">
                  {Notification.day}
                </p>
                <p className="text-white text-xs font-semibold tracking-[0.15em] uppercase mt-1">
                  {Notification.location}
                </p>
              </div>
            </div>

            {/* Detalles */}
            <div ref={detailsRef} className="space-y-4">
              {/* Precio */}
              <div className="flex items-baseline gap-2">
                <span className="text-orange-600 text-3xl sm:text-4xl font-bold">
                  {Notification.price}
                </span>
                <span className="text-neutral-400 text-sm">
                  {Notification.priceLabel}
                </span>
              </div>

              {/* Duración y clases */}
              <div className="flex gap-4 text-white">
                <span className="font-semibold">{Notification.duration}</span>
                <span className="text-neutral-600">|</span>
                <span className="font-semibold">{Notification.classes}</span>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-neutral-300 text-sm">
                  <Icon icon="mdi:calendar-clock" className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>{Notification.schedule}</span>
                </div>
                
                {Notification.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-neutral-300 text-sm">
                    <Icon 
                      icon={index === 0 ? "mdi:certificate" : "mdi:camera"} 
                      className="w-4 h-4 text-orange-600 flex-shrink-0" 
                    />
                    <span>{feature}</span>
                  </div>
                ))}
                
                <div className="flex items-center gap-2 text-neutral-300 text-sm">
                  <Icon icon="mdi:map-marker" className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>1ra clase: {Notification.firstClassLocation}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-neutral-800 opacity-0">
            <button
              onClick={() => window.location.href = '/cursos/intermedio'}
              className="flex-1 px-3 py-3 bg-orange-600 text-white font-light text-sm rounded-full hover:bg-orange-700 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Icon icon="mdi:information" className="w-5 h-5" />
              Más información
            </button>
            <button
              onClick={() => window.location.href = '/inscripcion'}
              className="flex-1 px-3 py-3 bg-black border border-neutral-700 text-white font-light text-sm rounded-full hover:border-orange-600 hover:text-orange-600 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Icon icon="mdi:pencil" className="w-5 h-5" />
              Inscribirme ahora
            </button>
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
  )
}

export default CoursePopup