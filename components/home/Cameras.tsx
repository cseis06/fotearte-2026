"use client"

import React, { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Cameras = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: "mdi:camera-outline",
      title: "Equipos Profesionales",
      description: "Canon, Nikon, Sony y más marcas premium disponibles para vos."
    },
    {
      icon: "mdi:clock-outline",
      title: "Alquiler Flexible",
      description: "Por día, fin de semana o semana completa según tu proyecto."
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Garantía Incluida",
      description: "Todos los equipos cuentan con seguro y soporte técnico."
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del contenido principal
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Animación de las features
      if (featuresRef.current) {
        gsap.fromTo(
          featuresRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 85%",
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
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contenido */}
          <div ref={contentRef}>
            <p className="text-orange-600 text-sm font-light tracking-[0.3em] uppercase mb-4">
              Servicio de Alquiler
            </p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Equipos profesionales
              <span className="text-neutral-500 font-light"> a tu alcance</span>
            </h2>
            
            <p className="text-neutral-400 font-light text-lg leading-relaxed mb-8">
              No necesitas invertir miles de dólares para capturar imágenes profesionales. 
              Alquilá cámaras, lentes y accesorios de las mejores marcas por el tiempo que necesites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/alquiler-camaras"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
              >
                Ver catálogo
                <Icon icon="mdi:arrow-right" className="w-5 h-5" />
              </Link>
              
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-700 text-white font-light rounded-full hover:border-orange-600 hover:text-orange-600 transition-colors duration-300"
              >
                Consultar disponibilidad
              </Link>
            </div>
          </div>

          {/* Features */}
          <div ref={featuresRef} className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group flex gap-5 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 group-hover:bg-orange-600 transition-colors duration-300">
                  <Icon 
                    icon={feature.icon} 
                    className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-500 font-light text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Stats rápidos */}
            <div className="flex gap-8 pt-6 border-t border-neutral-800">
              <div>
                <p className="text-3xl font-semibold text-white">22+</p>
                <p className="text-neutral-500 font-light text-sm">Equipos disponibles</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">24h</p>
                <p className="text-neutral-500 font-light text-sm">Entrega express</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">5</p>
                <p className="text-neutral-500 font-light text-sm">Ciudades</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </section>
  )
}

export default Cameras