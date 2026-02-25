"use client"

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import gsap from 'gsap'

// Tipos
interface Camera {
  id: string
  name: string
  brand: string
  category: 'dslr' | 'mirrorless' | 'cinema' | 'lens' | 'accessory'
  image: string
  pricePerDay: number
  specs: string[]
  available: boolean
  featured?: boolean
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

// Función para formatear precio
function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-PY').format(price)
}

// Componente de tarjeta de cámara
function CameraCard({ camera, index }: { camera: Camera; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null)

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

  return (
    <Link 
      ref={cardRef}
      href={`/cameras/${camera.id}`}
      className="group block bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-900 hover:border-neutral-800 transition-colors duration-300 opacity-0"
    >
      {/* Imagen */}
      <div className="relative aspect-[4/3] bg-neutral-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
          <Icon 
            icon={camera.category === 'lens' ? 'mdi:circle-outline' : 'mdi:camera-outline'} 
            className="w-16 h-16 text-neutral-700 group-hover:scale-110 transition-transform duration-500" 
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {camera.featured && (
            <span className="px-2 py-1 bg-orange-600 text-white text-xs font-semibold rounded">
              Destacado
            </span>
          )}
          {!camera.available && (
            <span className="px-2 py-1 bg-neutral-700 text-neutral-300 text-xs font-semibold rounded">
              No disponible
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
          <h3 className="text-white font-semibold text-lg group-hover:text-orange-600 transition-colors duration-300">
            {camera.brand} {camera.name}
          </h3>
          <p className="text-neutral-500 text-sm font-light capitalize">
            {camera.category === 'lens' ? 'Lente' : 
             camera.category === 'accessory' ? 'Accesorio' :
             camera.category === 'cinema' ? 'Cámara Cinema' :
             camera.category.toUpperCase()}
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

        {/* Precio */}
        <div className="flex items-end justify-between pt-4 border-t border-neutral-800">
          <div>
            <p className="text-neutral-500 text-xs font-light">Desde</p>
            <p className="text-white font-semibold text-xl">
              ₲{formatPrice(camera.pricePerDay)}
              <span className="text-neutral-500 text-sm font-light">/día</span>
            </p>
          </div>
          
          <span className="flex items-center gap-1 text-orange-600 text-sm font-semibold group-hover:gap-2 transition-all duration-300">
            Ver detalles
            <Icon icon="mdi:arrow-right" className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function CamerasCatalog({ cameras, categories }: CamerasCatalogProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name')
  const catalogRef = useRef<HTMLDivElement>(null)

  // Filtrar cámaras
  const filteredCameras = cameras
    .filter(camera => {
      const matchesCategory = activeCategory === 'all' || camera.category === activeCategory
      const matchesSearch = searchQuery === '' || 
        camera.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        camera.brand.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.pricePerDay - b.pricePerDay
      if (sortBy === 'price-desc') return b.pricePerDay - a.pricePerDay
      return a.name.localeCompare(b.name)
    })

  const featuredCameras = filteredCameras.filter(c => c.featured)
  const regularCameras = filteredCameras.filter(c => !c.featured)

  // Animación al cambiar filtros
  useEffect(() => {
    if (catalogRef.current) {
      gsap.fromTo(
        catalogRef.current,
        { opacity: 0.5 },
        { opacity: 1, duration: 0.3 }
      )
    }
  }, [activeCategory, searchQuery, sortBy])

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

          {/* Búsqueda y ordenar */}
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
                className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-full text-white text-sm font-light placeholder:text-neutral-600 focus:outline-none focus:border-orange-600 transition-colors duration-300"
              />
            </div>

            {/* Ordenar */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-full text-neutral-400 text-sm font-light focus:outline-none focus:border-orange-600 transition-colors duration-300 cursor-pointer"
            >
              <option value="name">Nombre</option>
              <option value="price-asc">Menor precio</option>
              <option value="price-desc">Mayor precio</option>
            </select>
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
                }}
                className="mt-4 text-orange-600 text-sm font-semibold hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <>
              {/* Destacados */}
              {featuredCameras.length > 0 && activeCategory === 'all' && searchQuery === '' && (
                <div className="mb-16">
                  <h2 className="text-2xl font-semibold text-white mb-8">
                    Equipos destacados
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredCameras.map((camera, index) => (
                      <CameraCard key={camera.id} camera={camera} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Todos los equipos */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-semibold text-white">
                    {activeCategory === 'all' && searchQuery === '' ? 'Todos los equipos' : 'Resultados'}
                  </h2>
                  <p className="text-neutral-500 font-light text-sm">
                    {filteredCameras.length} {filteredCameras.length === 1 ? 'equipo' : 'equipos'}
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(activeCategory === 'all' && searchQuery === '' ? regularCameras : filteredCameras).map((camera, index) => (
                    <CameraCard key={camera.id} camera={camera} index={index} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}