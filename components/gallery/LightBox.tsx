"use client"

import React, { useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import gsap from 'gsap'

interface Photo {
  id: string
  src: string
  title: string
  category: string
  author?: string
  date?: string
}

interface LightboxProps {
  photo: Photo | null
  photos: Photo[]
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ photo, photos, onClose, onNext, onPrev }: LightboxProps) {
  const backdropRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  // Encontrar índice actual
  const currentIndex = photo ? photos.findIndex(p => p.id === photo.id) : -1
  const hasNext = currentIndex < photos.length - 1
  const hasPrev = currentIndex > 0

  // Animación de entrada
  useEffect(() => {
    if (photo) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      )
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      )
    }
  }, [photo])

  // Animación de cambio de imagen
  useEffect(() => {
    if (imageRef.current && photo) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "power2.out" }
      )
    }
  }, [photo?.id])

  // Cerrar con animación
  const handleClose = useCallback(() => {
    gsap.to(contentRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.2,
      ease: "power2.in"
    })
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: onClose
    })
  }, [onClose])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
      if (e.key === 'ArrowRight' && hasNext) onNext()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
    }

    if (photo) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [photo, hasNext, hasPrev, handleClose, onNext, onPrev])

  if (!photo) return null

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 bg-black/95 opacity-0"
      onClick={handleClose}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6 flex items-center justify-between">
        <div className="text-white">
          <p className="font-semibold">{photo.title}</p>
          <p className="text-sm text-neutral-400 font-light">
            {photo.author && <span>{photo.author}</span>}
            {photo.author && photo.date && <span className="mx-2">•</span>}
            {photo.date && <span>{photo.date}</span>}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-neutral-500 text-sm font-light mr-4">
            {currentIndex + 1} / {photos.length}
          </span>
          <button
            onClick={(e) => { e.stopPropagation(); handleClose(); }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800/50 text-white hover:bg-neutral-700/50 transition-colors duration-200"
            aria-label="Cerrar"
          >
            <Icon icon="mdi:close" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Imagen principal */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex items-center justify-center p-4 md:p-16 opacity-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div ref={imageRef} className="relative max-w-full max-h-full w-full h-full">
          <Image
            src={photo.src}
            alt={photo.title}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Navegación */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800/50 text-white hover:bg-orange-600 transition-colors duration-200"
          aria-label="Anterior"
        >
          <Icon icon="mdi:chevron-left" className="w-6 h-6" />
        </button>
      )}
      
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800/50 text-white hover:bg-orange-600 transition-colors duration-200"
          aria-label="Siguiente"
        >
          <Icon icon="mdi:chevron-right" className="w-6 h-6" />
        </button>
      )}

      {/* Instrucciones */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <p className="text-neutral-600 text-xs font-light">
          Usá las flechas del teclado para navegar • ESC para cerrar
        </p>
      </div>
    </div>
  )
}