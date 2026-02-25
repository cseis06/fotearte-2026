"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

interface Photo {
  id: string
  src: string
  title: string
  category: string
  author?: string
  date?: string
}

interface GalleryHeroProps {
  featuredPhotos: Photo[]
}

export default function GalleryHero({ featuredPhotos }: GalleryHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Rotación automática de imágenes
  useEffect(() => {
    if (featuredPhotos.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPhotos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [featuredPhotos.length])

  // Animación de entrada
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        overlayRef.current,
        { scaleX: 1 },
        { scaleX: 0, duration: 1.2, ease: "power4.inOut", transformOrigin: "right" }
      )

      tl.fromTo(
        imageRef.current,
        { scale: 1.2 },
        { scale: 1, duration: 1.5, ease: "power2.out" },
        "-=0.8"
      )

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current.children,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
          "-=1"
        )
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Animación de cambio de imagen
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0.5, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      )
    }
  }, [currentIndex])

  const currentPhoto = featuredPhotos[currentIndex] || featuredPhotos[0]

  return (
    <section ref={heroRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Imagen de fondo */}
      <div ref={imageRef} className="absolute inset-0">
        {currentPhoto && (
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.title}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Overlay de revelado */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-neutral-950 z-10"
      />

      {/* Overlay de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/60 z-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent z-20" />

      {/* Contenido */}
      <div className="relative z-30 h-full flex flex-col justify-end pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div ref={titleRef}>
            <p className="text-orange-600 text-sm font-light tracking-[0.3em] uppercase mb-4">
              Galería FoteArte
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold text-white mb-4 leading-[0.9]">
              Historias
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-light text-neutral-400 mb-8 leading-[0.9]">
              en cada imagen
            </h1>
            <p className="text-neutral-300 font-light text-lg md:text-xl max-w-xl">
              Una colección curada del talento fotográfico de nuestra comunidad.
            </p>
          </div>
        </div>
      </div>

      {/* Info de foto actual */}
      <div className="absolute bottom-8 right-8 z-30 text-right hidden md:block">
        <p className="text-white/60 text-sm font-light mb-1">{currentPhoto?.title}</p>
        <p className="text-white/40 text-xs font-light">Por {currentPhoto?.author}</p>
      </div>

      {/* Indicadores */}
      {featuredPhotos.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {featuredPhotos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                h-1 rounded-full transition-all duration-300
                ${index === currentIndex ? 'w-8 bg-orange-600' : 'w-2 bg-white/30 hover:bg-white/50'}
              `}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 z-30 hidden md:flex items-center gap-3">
        <div className="w-px h-12 bg-white/20" />
        <span className="text-white/40 text-xs font-light tracking-wider uppercase vertical-text" 
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          Scroll
        </span>
      </div>
    </section>
  )
}