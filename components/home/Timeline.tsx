"use client"

import React, { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar el plugin
gsap.registerPlugin(ScrollTrigger)

interface TimelineEvent {
  year: string
  title: string
  description: string
  highlight?: boolean
  icon: string
  stat?: { value: string; label: string }
}

const Timeline = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const timelineLineRef = useRef<HTMLDivElement>(null)
  const timelineLineRefMobile = useRef<HTMLDivElement>(null)
  const eventsRef = useRef<HTMLDivElement[]>([])
  const eventsRefMobile = useRef<HTMLDivElement[]>([])
  const ctaRef = useRef<HTMLDivElement>(null)

  const events: TimelineEvent[] = [
    {
      year: "2011",
      title: "El Inicio",
      description: "Nace FoteArte en Asunción con la visión de democratizar la educación fotográfica en Paraguay. Comenzamos con 12 alumnos y un pequeño estudio.",
      highlight: true,
      icon: "mdi:camera",
      stat: { value: "12", label: "alumnos" }
    },
    {
      year: "2013",
      title: "Primera Sede",
      description: "Inauguramos nuestra primera sede con estudio profesional y aulas equipadas con tecnología de punta.",
      icon: "mdi:domain"
    },
    {
      year: "2015",
      title: "Expansión Nacional",
      description: "Llegamos a Ciudad del Este y Encarnación, llevando educación fotográfica de calidad a más ciudades.",
      icon: "mdi:map-marker-radius",
      stat: { value: "3", label: "ciudades" }
    },
    {
      year: "2017",
      title: "Era Digital",
      description: "Lanzamos nuestra plataforma online, permitiendo acceso a formación profesional desde cualquier lugar del país.",
      icon: "mdi:monitor"
    },
    {
      year: "2021",
      title: "Una Década",
      description: "Celebramos 10 años con una exposición colectiva de más de 200 egresados en el Centro Cultural de Asunción.",
      highlight: true,
      icon: "mdi:star-circle",
      stat: { value: "10", label: "años" }
    },
    {
      year: "2023",
      title: "Innovación",
      description: "Incorporamos fotografía con drones, edición con IA y videografía cinematográfica a nuestro programa.",
      icon: "mdi:lightbulb"
    },
    {
      year: "2026",
      title: "El Presente",
      description: "5 sedes en Paraguay, más de 3,000 egresados y una comunidad vibrante de fotógrafos profesionales.",
      highlight: true,
      icon: "mdi:trophy",
      stat: { value: "3000+", label: "egresados" }
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del header
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { 
            opacity: 0, 
            y: 40 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Animación de la línea central (Desktop)
      if (timelineLineRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          { 
            scaleY: 0,
            transformOrigin: "top center"
          },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "none",
            scrollTrigger: {
              trigger: timelineLineRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1
            }
          }
        )
      }

      // Animación de la línea (Mobile)
      if (timelineLineRefMobile.current) {
        gsap.fromTo(
          timelineLineRefMobile.current,
          { 
            scaleY: 0,
            transformOrigin: "top center"
          },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "none",
            scrollTrigger: {
              trigger: timelineLineRefMobile.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1
            }
          }
        )
      }

      // Animación de eventos (Desktop)
      eventsRef.current.forEach((event, index) => {
        if (!event) return

        const isLeft = index % 2 === 0
        const content = event.querySelector('.event-content')
        const marker = event.querySelector('.event-marker')
        const line = event.querySelector('.event-line')

        // Timeline para cada evento
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: event,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        })

        // Marcador: escala desde 0
        if (marker) {
          tl.fromTo(
            marker,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
          )
        }

        // Línea horizontal
        if (line) {
          tl.fromTo(
            line,
            { scaleX: 0, transformOrigin: isLeft ? "right center" : "left center" },
            { scaleX: 1, duration: 0.3, ease: "power2.out" },
            "-=0.2"
          )
        }

        // Contenido: desde el lado correspondiente
        if (content) {
          tl.fromTo(
            content,
            { 
              opacity: 0, 
              x: isLeft ? -30 : 30 
            },
            { 
              opacity: 1, 
              x: 0, 
              duration: 0.5, 
              ease: "power2.out" 
            },
            "-=0.2"
          )
        }
      })

      // Animación de eventos (Mobile)
      eventsRefMobile.current.forEach((event) => {
        if (!event) return

        const content = event.querySelector('.event-content-mobile')
        const marker = event.querySelector('.event-marker-mobile')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: event,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        })

        if (marker) {
          tl.fromTo(
            marker,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
          )
        }

        if (content) {
          tl.fromTo(
            content,
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
            "-=0.2"
          )
        }
      })

      // Animación del CTA
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-24 overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/[0.02] rounded-full blur-3xl" />
      </div>

      {/* Encabezado */}
      <div ref={headerRef} className="relative z-10 max-w-6xl mx-auto px-6 mb-20">
        <div className='flex flex-col justify-center items-center text-center'>
            <div className="max-w-2xl  font-light">
            <p className="text-orange-600 text-sm tracking-[0.3em] uppercase mb-3">
                Nuestra Trayectoria
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                Más de una década
                <span className="text-neutral-500 font-light"> capturando historias</span>
            </h2>
            <p className="text-neutral-400 text-lg">
                Desde 2011, hemos formado a miles de fotógrafos profesionales en Paraguay.
            </p>
            </div>
        </div>
      </div>

      {/* Timeline Desktop */}
      <div className="relative z-10 hidden lg:block max-w-6xl mx-auto px-6">
        {/* Línea central */}
        <div 
          ref={timelineLineRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-orange-600/50 via-neutral-700 to-neutral-800" 
        />
        
        <div className="relative">
          {events.map((event, index) => (
            <div
              key={event.year}
              ref={(el) => { if (el) eventsRef.current[index] = el }}
              className={`relative flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Contenido */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                <div className="event-content group">
                  {/* Stat badge */}
                  {event.stat && (
                    <div className={`inline-flex items-baseline gap-1 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <span className={`text-2xl font-semibold ${event.highlight ? 'text-orange-600' : 'text-neutral-500'}`}>
                        {event.stat.value}
                      </span>
                      <span className="text-neutral-600 text-sm">{event.stat.label}</span>
                    </div>
                  )}
                  
                  <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    event.highlight ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                  }`}>
                    {event.title}
                  </h3>
                  
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Centro - Marcador */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                {/* Línea horizontal */}
                <div 
                  className={`event-line absolute top-1/2 -translate-y-1/2 h-px w-8 bg-neutral-700 ${
                    index % 2 === 0 ? '-left-8' : '-right-8'
                  }`} 
                />
                
                <div
                  className={`
                    event-marker relative flex flex-col items-center justify-center w-16 h-16 rounded-full
                    transition-all duration-300
                    ${event.highlight 
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30' 
                      : 'bg-neutral-900 border border-neutral-700 text-neutral-400 hover:border-orange-600/50 hover:text-orange-600'
                    }
                  `}
                >
                  <Icon icon={event.icon} className="w-5 h-5 mb-0.5" />
                  <span className="text-xs font-medium">{event.year}</span>
                </div>
              </div>

              {/* Espacio */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Mobile/Tablet */}
      <div className="relative z-10 lg:hidden px-6">
        {/* Línea lateral */}
        <div 
          ref={timelineLineRefMobile}
          className="absolute left-9 top-0 w-px h-full bg-gradient-to-b from-orange-600/50 via-neutral-700 to-neutral-800" 
        />
        
        <div className="space-y-10">
          {events.map((event, index) => (
            <div 
              key={event.year} 
              ref={(el) => { if (el) eventsRefMobile.current[index] = el }}
              className="relative flex gap-6"
            >
              {/* Marcador */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`
                    event-marker-mobile w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center
                    ${event.highlight 
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30' 
                      : 'bg-neutral-900 border border-neutral-700 text-neutral-400'
                    }
                  `}
                >
                  <Icon icon={event.icon} className="w-5 h-5 mb-0.5" />
                  <span className="text-xs font-medium">{event.year}</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="event-content-mobile flex-1 pt-3">
                {event.stat && (
                  <div className="inline-flex items-baseline gap-1 mb-2">
                    <span className={`text-xl font-semibold ${event.highlight ? 'text-orange-600' : 'text-neutral-500'}`}>
                      {event.stat.value}
                    </span>
                    <span className="text-neutral-600 text-sm">{event.stat.label}</span>
                  </div>
                )}
                
                <h3 className={`text-lg font-semibold mb-1.5 ${event.highlight ? 'text-white' : 'text-neutral-300'}`}>
                  {event.title}
                </h3>
                
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA sutil */}
      <div ref={ctaRef} className="relative z-10 max-w-6xl mx-auto px-6 mt-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-t border-neutral-800">
          <p className="text-neutral-400 font-light text-center sm:text-left">
            ¿Listo para ser parte de nuestra historia?
          </p>
          <button className="px-6 py-3 bg-orange-600 text-white text-sm font-semibold rounded-full transition-colors duration-300 hover:bg-orange-700 cursor-pointer">
            Comenzar ahora
          </button>
        </div>
      </div>
    </section>
  )
}

export default Timeline