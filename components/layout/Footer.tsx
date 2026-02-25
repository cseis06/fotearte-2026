import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Logo from "../../public/logo-footer.svg"

const Footer = () => {
  const ubicaciones = [
    "Asunción",
    "Ciudad del Este",
    "Villarrica",
    "Encarnación",
    "Coronel Oviedo",
    "Nueva York",
  ]

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Cursos", href: "/sobre-nosotros" },
    { label: "Galería", href: "/galeria" },
    { label: "Cámaras", href: "/cursos" },
    { label: "Contacto", href: "/contacto" }
  ]

  const redesSociales = [
    { icon: "mdi:instagram", href: "https://instagram.com", label: "Instagram" },
    { icon: "mdi:twitter", href: "https://twitter.com", label: "X" },
    { icon: "mdi:facebook", href: "https://facebook.com", label: "Facebook" },
    { icon: "mdi:whatsapp", href: "https://wa.me/", label: "WhatsApp" }
  ]

  return (
    <footer className="w-full">
      {/* Sección principal */}
      <div className="bg-white px-6 py-12 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row  justify-between gap-6">
          
          {/* Logo y descripción */}
          <div className="max-w-lg flex flex-col gap-4">
            <Image 
              src={Logo} 
              alt="FoteArte Paraguay"
              className="mb-2 w-[160px] md:w-[250px]"
            />
            <p className="text-gray-700 text-sm leading-relaxed">
              Más que una escuela de fotografía: Un espacio donde tu creatividad florece. 
              Cursos dinámicos y una comunidad apasionada, ¡Haz clic y únete hoy mismo!
            </p>
          </div>

          <div className='flex gap-36'>
            {/* Ubicaciones */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-gray-900 text-lg">Ubicaciones</h3>
              <ul className="flex flex-col gap-2">
                {ubicaciones.map((ubicacion, index) => (
                  <li key={index}>
                    <span className="text-gray-700 text-sm hover:text-orange-600 transition-colors cursor-pointer">
                      {ubicacion}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Menú */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-gray-900 text-lg">Menú</h3>
              <ul className="flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href}
                      className="text-gray-700 text-sm hover:text-orange-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes Sociales */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-gray-900 text-lg">Nuestras Redes</h3>
              <div className="flex items-center gap-3">
                {redesSociales.map((red, index) => (
                  <a
                    key={index}
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={red.label}
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      transition-all duration-300 hover:scale-110
                      text-white bg-orange-600
                    `}
                  >
                    <Icon icon={red.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de copyright con gradiente */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 py-4 px-6">
        <p className="text-white text-center text-sm">
          FoteArte Paraguay © {new Date().getFullYear()} - Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer