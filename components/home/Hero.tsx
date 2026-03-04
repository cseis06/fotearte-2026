"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import Background from '../../public/bg/hero.png'

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      // Animar título
      tl.fromTo(
        titleRef.current,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out"
        }
      )

      // Animar subtítulo
      tl.fromTo(
        subtitleRef.current,
        { 
          opacity: 0, 
          y: 20 
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        },
        "-=0.5"
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative h-auto w-full">
      <Image
        src={Background}
        alt="Hero background"
        fill
        priority
        className="object-cover -z-1"
      />
      <div className="relative z-10 flex flex-col gap-3 items-center justify-center text-center h-[115dvh]">
        <h1 
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white opacity-0" 
          style={{ textShadow: "0 0 15px rgba(0, 0, 0, 0.7)"}}
        >
          ESTO ES <br />
          FOTEARTE
        </h1>
        <span 
          ref={subtitleRef}
          className='text-xs px-10 sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-[0.3em] font-light text-orange-600 opacity-0'
          style={{ textShadow: "0 0 8px rgba(0, 0, 0, 0.7)"}}
        >
          Descubrí la fotografía del mañana, hoy.
        </span>
      </div>
    </section>
  )
}

export default Hero