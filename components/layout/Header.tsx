"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from "../../public/logo.svg";
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/institucional/sobre-nosotros", label: "Nosotros" },
    { href: "/camaras", label: "Cámaras" },
    { href: "/galeria", label: "Galería" },
    { href: "/cursos", label: "Cursos" },
  ]

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50
        px-6 lg:px-20 font-light text-white
        transition-all duration-500 ease-in-out
        ${isScrolled || isMobileMenuOpen
          ? 'bg-black/95 backdrop-blur-sm py-4' 
          : 'bg-transparent py-6'
        }
      `}
    >
      <nav className="w-full flex justify-between items-center">
        {/* Logo */}
        <Link href='/' className='cursor-pointer transition-all duration-500'>
          <Image 
            src={Logo} 
            alt="logo" 
            width={isScrolled ? 180 : 220} 
            className="transition-all duration-500"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:text-gray-300 transition-all duration-300">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              href='/contacto'
              target='_blank'
              className="font-semibold bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full cursor-pointer transition-all duration-300"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          lg:hidden fixed inset-0 top-0 left-0 w-full h-screen
          bg-black/95 backdrop-blur-md
          transition-all duration-500 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        style={{ zIndex: -1 }}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8 text-lg">
          {navLinks.map((link, index) => (
            <li 
              key={link.label}
              className={`
                transform transition-all duration-500
                ${isMobileMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
                }
              `}
              style={{ transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms' }}
            >
              <Link 
                href={link.href} 
                className="hover:text-gray-300 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li
            className={`
              transform transition-all duration-500
              ${isMobileMenuOpen 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-4 opacity-0'
              }
            `}
            style={{ transitionDelay: isMobileMenuOpen ? `${navLinks.length * 100}ms` : '0ms' }}
          >
            <Link 
              href='/contacto'
              target='_blank'
              className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-full cursor-pointer transition-all duration-300 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header