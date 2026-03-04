"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Icon } from '@iconify/react'
import gsap from 'gsap'

// Tipos
interface Camera {
  id: string
  name: string
  brand: string
  category: 'dslr' | 'mirrorless' | 'cinema' | 'lens' | 'accessory'
  image: StaticImageData | string
  specs: string[]
  available: boolean
  stock?: number
  note?: string
}

interface Category {
  id: string
  label: string
  icon: string
}

interface CamerasCatalogProps {
  cameras: Camera[]
  categories: Category[]
}

// Componente de tarjeta de cámara
function CameraCard({ camera, index }: { camera: Camera; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          delay: index * 0.05,
          ease: "power2.out"
        }
      )
    }
  }, [index])

  // Crear mensaje de WhatsApp
  const whatsappMessage = encodeURIComponent(
    `Hola! Quisiera consultar sobre el alquiler de: ${camera.brand} ${camera.name}`
  )
  const whatsappUrl = `https://wa.me/595973497799?text=${whatsappMessage}`

  return (
    <div 
      ref={cardRef}
      className={`group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 transition-colors duration-300 opacity-0 ${
        camera.available ? 'hover:border-neutral-700' : 'opacity-60'
      }`}
    >
      {/* Imagen */}
      <div className="relative aspect-[4/3] bg-neutral-800 overflow-hidden">
        {typeof camera.image === 'string' ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
            <Icon 
              icon={camera.category === 'lens' ? 'mdi:circle-outline' : 'mdi:camera-outline'} 
              className="w-16 h-16 text-neutral-700 group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
        ) : (
          <Image
            src={camera.image}
            alt={`${camera.brand} ${camera.name}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 bg-white p-5"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {!camera.available && (
            <span className="px-2 py-1 bg-neutral-700 text-neutral-300 text-xs font-semibold rounded">
              No disponible
            </span>
          )}
          {camera.available && camera.stock && camera.stock > 1 && (
            <span className="px-2 py-1 bg-orange-600 text-white text-xs font-semibold rounded">
              {camera.stock} disponibles
            </span>
          )}
        </div>

        <span className="absolute top-3 right-3 px-2 py-1 bg-black/60 text-white text-xs font-light rounded">
          {camera.brand}
        </span>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-white font-semibold text-lg">
            {camera.brand} {camera.name}
          </h3>
          <p className="text-neutral-500 text-sm font-light capitalize">
            {camera.category === 'lens' ? 'Objetivo' : 
             camera.category === 'accessory' ? 'Accesorio' :
             camera.category === 'cinema' ? 'Cámara Cinema' :
             camera.category === 'mirrorless' ? 'Mirrorless' :
             'Cámara DSLR'}
          </p>
        </div>

        {/* Specs */}
        <ul className="space-y-1 mb-4">
          {camera.specs.map((spec, idx) => (
            <li key={idx} className="flex items-center gap-2 text-neutral-400 text-sm font-light">
              <span className="w-1 h-1 bg-orange-600 rounded-full flex-shrink-0" />
              {spec}
            </li>
          ))}
        </ul>

        {/* Nota si existe */}
        {camera.note && (
          <p className="text-amber-500/80 text-xs font-light mb-4 flex items-center gap-1">
            <Icon icon="mdi:information-outline" className="w-4 h-4" />
            {camera.note}
          </p>
        )}

        {/* Botón de acción */}
        <div className="pt-4 border-t border-neutral-800">
          {camera.available ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors duration-300"
            >
              <Icon icon="mdi:whatsapp" className="w-5 h-5" />
              Consultar
            </a>
          ) : (
            <button
              disabled
              className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-800 text-neutral-500 font-light rounded-full cursor-not-allowed"
            >
              No disponible
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CamerasCatalog({ cameras, categories }: CamerasCatalogProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)
  const catalogRef = useRef<HTMLDivElement>(null)

  // Filtrar cámaras
  const filteredCameras = cameras
    .filter(camera => {
      const matchesCategory = activeCategory === 'all' || camera.category === activeCategory
      const matchesSearch = searchQuery === '' || 
        camera.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        camera.brand.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesAvailability = !showAvailableOnly || camera.available
      return matchesCategory && matchesSearch && matchesAvailability
    })
    .sort((a, b) => {
      // Primero los disponibles
      if (a.available && !b.available) return -1
      if (!a.available && b.available) return 1
      // Luego por nombre
      return a.name.localeCompare(b.name)
    })

  // Separar cámaras y lentes disponibles
  const availableCameras = filteredCameras.filter(c => c.available && c.category !== 'lens')
  const availableLenses = filteredCameras.filter(c => c.available && c.category === 'lens')
  const unavailableItems = filteredCameras.filter(c => !c.available)

  // Animación al cambiar filtros
  useEffect(() => {
    if (catalogRef.current) {
      gsap.fromTo(
        catalogRef.current,
        { opacity: 0.5 },
        { opacity: 1, duration: 0.3 }
      )
    }
  }, [activeCategory, searchQuery, showAvailableOnly])

  return (
    <section className="py-16 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Barra de filtros */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          
          {/* Categorías */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-light
                  border transition-colors duration-300
                  ${activeCategory === category.id 
                    ? 'bg-orange-600 border-orange-600 text-white' 
                    : 'bg-transparent border-neutral-800 text-neutral-400 hover:border-orange-600 hover:text-orange-600'
                  }
                `}
              >
                <Icon icon={category.icon} className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>

          {/* Búsqueda y filtro disponibilidad */}
          <div className="flex gap-3">
            {/* Búsqueda */}
            <div className="relative">
              <Icon 
                icon="mdi:magnify" 
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" 
              />
              <input
                type="text"
                placeholder="Buscar equipo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-full text-white text-sm font-light placeholder:text-neutral-600 focus:outline-none focus:border-orange-600 transition-colors duration-300"
              />
            </div>

            {/* Solo disponibles */}
            <button
              onClick={() => setShowAvailableOnly(!showAvailableOnly)}
              className={`
                px-4 py-2.5 rounded-full text-sm font-light border transition-colors duration-300
                ${showAvailableOnly 
                  ? 'bg-green-600/20 border-green-600 text-green-500' 
                  : 'bg-transparent border-neutral-800 text-neutral-400 hover:border-neutral-700'
                }
              `}
            >
              <span className="hidden sm:inline">Solo disponibles</span>
              <Icon icon="mdi:check-circle" className="w-5 h-5 sm:hidden" />
            </button>
          </div>
        </div>

        {/* Catálogo */}
        <div ref={catalogRef}>
          {filteredCameras.length === 0 ? (
            <div className="text-center py-20">
              <Icon icon="mdi:camera-off-outline" className="w-16 h-16 text-neutral-700 mx-auto mb-4" />
              <p className="text-neutral-500 font-light">
                No se encontraron equipos con los filtros seleccionados.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all')
                  setSearchQuery('')
                  setShowAvailableOnly(false)
                }}
                className="mt-4 text-orange-600 text-sm font-semibold hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <>
              {/* Cámaras disponibles */}
              {availableCameras.length > 0 && (activeCategory === 'all' || activeCategory === 'dslr') && (
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                      <Icon icon="mdi:camera" className="w-6 h-6 text-orange-600" />
                      Cámaras
                    </h2>
                    <p className="text-neutral-500 font-light text-sm">
                      {availableCameras.reduce((acc, c) => acc + (c.stock || 1), 0)} disponibles
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {availableCameras.map((camera, index) => (
                      <CameraCard key={camera.id} camera={camera} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Objetivos disponibles */}
              {availableLenses.length > 0 && (activeCategory === 'all' || activeCategory === 'lens') && (
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                      <Icon icon="mdi:circle-outline" className="w-6 h-6 text-orange-600" />
                      Objetivos
                    </h2>
                    <p className="text-neutral-500 font-light text-sm">
                      {availableLenses.reduce((acc, c) => acc + (c.stock || 1), 0)} disponibles
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {availableLenses.map((camera, index) => (
                      <CameraCard key={camera.id} camera={camera} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* No disponibles */}
              {unavailableItems.length > 0 && !showAvailableOnly && (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-semibold text-neutral-500 flex items-center gap-3">
                      <Icon icon="mdi:clock-outline" className="w-5 h-5" />
                      No disponibles
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {unavailableItems.map((camera, index) => (
                      <CameraCard key={camera.id} camera={camera} index={index} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}