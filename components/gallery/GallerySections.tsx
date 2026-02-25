"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lightbox from './LightBox'

gsap.registerPlugin(ScrollTrigger)

interface Photo {
  id: string
  src: string
  title: string
  category: string
  author?: string
  date?: string
  featured?: boolean
}

interface Section {
  id: string
  title: string
  subtitle: string
  description: string
  photos: Photo[]
  layout: 'hero-grid' | 'masonry' | 'horizontal' | 'featured-duo' | 'cinema'
}

interface GallerySectionsProps {
  sections: Section[]
  allPhotos: Photo[]
}

// Componente para cada layout de sección
function HeroGridLayout({ photos, onPhotoClick }: { photos: Photo[], onPhotoClick: (photo: Photo) => void }) {
  const featured = photos[0]
  const grid = photos.slice(1, 5)
  
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {/* Imagen hero */}
      {featured && (
        <div 
          className="relative aspect-[4/5] lg:aspect-auto lg:row-span-2 cursor-pointer group overflow-hidden rounded-lg"
          onClick={() => onPhotoClick(featured)}
        >
          <Image
            src={featured.src}
            alt={featured.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold">{featured.title}</p>
            <p className="text-white/70 text-sm font-light">{featured.author}</p>
          </div>
        </div>
      )}
      
      {/* Grid secundario */}
      <div className="grid grid-cols-2 gap-4">
        {grid.map((photo) => (
          <div 
            key={photo.id}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => onPhotoClick(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Icon icon="mdi:arrow-expand" className="w-8 h-8 text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MasonryLayout({ photos, onPhotoClick }: { photos: Photo[], onPhotoClick: (photo: Photo) => void }) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {photos.map((photo, index) => (
        <div 
          key={photo.id}
          className={`break-inside-avoid cursor-pointer group overflow-hidden rounded-lg ${
            index % 3 === 0 ? 'aspect-[3/4]' : index % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'
          } relative`}
          onClick={() => onPhotoClick(photo)}
        >
          <Image
            src={photo.src}
            alt={photo.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm font-semibold">{photo.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function HorizontalLayout({ photos, onPhotoClick }: { photos: Photo[], onPhotoClick: (photo: Photo) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  return (
    <div className="relative">
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {photos.map((photo) => (
          <div 
            key={photo.id}
            className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px] snap-center cursor-pointer group"
            onClick={() => onPhotoClick(photo)}
          >
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <p className="text-white font-semibold">{photo.title}</p>
              <p className="text-neutral-500 text-sm font-light">{photo.author}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-6 w-20 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />
    </div>
  )
}

function FeaturedDuoLayout({ photos, onPhotoClick }: { photos: Photo[], onPhotoClick: (photo: Photo) => void }) {
  const [first, second, ...rest] = photos
  
  return (
    <div className="space-y-6">
      {/* Dos fotos grandes */}
      <div className="grid md:grid-cols-2 gap-6">
        {[first, second].filter(Boolean).map((photo, index) => (
          <div 
            key={photo.id}
            className={`relative cursor-pointer group overflow-hidden rounded-lg ${
              index === 0 ? 'aspect-[4/5]' : 'aspect-[4/5] md:mt-12'
            }`}
            onClick={() => onPhotoClick(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-xl font-semibold mb-1">{photo.title}</p>
              <p className="text-white/70 font-light">{photo.author}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Grid de resto */}
      {rest.length > 0 && (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {rest.slice(0, 6).map((photo) => (
            <div 
              key={photo.id}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
              onClick={() => onPhotoClick(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function CinemaLayout({ photos, onPhotoClick }: { photos: Photo[], onPhotoClick: (photo: Photo) => void }) {
  return (
    <div className="space-y-2">
      {photos.slice(0, 4).map((photo, index) => (
        <div 
          key={photo.id}
          className="relative aspect-[21/9] cursor-pointer group overflow-hidden rounded-lg"
          onClick={() => onPhotoClick(photo)}
        >
          <Image
            src={photo.src}
            alt={photo.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 top-0 flex flex-col justify-center p-8 md:p-12">
            <span className="text-orange-500 text-sm font-semibold mb-2">0{index + 1}</span>
            <p className="text-white text-2xl md:text-3xl font-semibold mb-2">{photo.title}</p>
            <p className="text-white/60 font-light">{photo.author}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function GallerySections({ sections, allPhotos }: GallerySectionsProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentSectionPhotos, setCurrentSectionPhotos] = useState<Photo[]>(allPhotos)
  const sectionRefs = useRef<HTMLElement[]>([])

  // Animaciones de scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section) => {
        if (!section) return
        
        const title = section.querySelector('.section-title')
        const content = section.querySelector('.section-content')
        
        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          )
        }
        
        if (content) {
          gsap.fromTo(
            content,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions: "play none none reverse"
              }
            }
          )
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const handlePhotoClick = (photo: Photo, sectionPhotos: Photo[]) => {
    setCurrentSectionPhotos(sectionPhotos)
    setSelectedPhoto(photo)
  }

  const handleNext = () => {
    if (!selectedPhoto) return
    const currentIndex = currentSectionPhotos.findIndex(p => p.id === selectedPhoto.id)
    if (currentIndex < currentSectionPhotos.length - 1) {
      setSelectedPhoto(currentSectionPhotos[currentIndex + 1])
    }
  }

  const handlePrev = () => {
    if (!selectedPhoto) return
    const currentIndex = currentSectionPhotos.findIndex(p => p.id === selectedPhoto.id)
    if (currentIndex > 0) {
      setSelectedPhoto(currentSectionPhotos[currentIndex - 1])
    }
  }

  const renderLayout = (section: Section) => {
    const onPhotoClick = (photo: Photo) => handlePhotoClick(photo, section.photos)
    
    switch (section.layout) {
      case 'hero-grid':
        return <HeroGridLayout photos={section.photos} onPhotoClick={onPhotoClick} />
      case 'masonry':
        return <MasonryLayout photos={section.photos} onPhotoClick={onPhotoClick} />
      case 'horizontal':
        return <HorizontalLayout photos={section.photos} onPhotoClick={onPhotoClick} />
      case 'featured-duo':
        return <FeaturedDuoLayout photos={section.photos} onPhotoClick={onPhotoClick} />
      case 'cinema':
        return <CinemaLayout photos={section.photos} onPhotoClick={onPhotoClick} />
      default:
        return <MasonryLayout photos={section.photos} onPhotoClick={onPhotoClick} />
    }
  }

  return (
    <>
      {sections.map((section, index) => (
        <section
          key={section.id}
          ref={(el) => { if (el) sectionRefs.current[index] = el }}
          className={`py-20 md:py-32 ${index % 2 === 1 ? 'bg-neutral-900/30' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Header de sección */}
            <div className="section-title mb-12 md:mb-16 max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-orange-600 text-sm font-semibold tracking-wider uppercase">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-px flex-1 bg-neutral-800 max-w-[100px]" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
                {section.title}
              </h2>
              <p className="text-neutral-500 font-light text-lg">
                {section.description}
              </p>
            </div>
            
            {/* Contenido */}
            <div className="section-content">
              {renderLayout(section)}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox */}
      <Lightbox
        photo={selectedPhoto}
        photos={currentSectionPhotos}
        onClose={() => setSelectedPhoto(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  )
}