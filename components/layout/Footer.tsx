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

  const institucional = [
    { label: "Sobre Nosotros", href: "/institucional/sobre-nosotros" },
    { label: "FAQ", href: "/institucional/faq" },
    { label: "Privacidad", href: "/institucional/privacidad" },
    { label: "Términos y Condiciones", href: "/institucional/terminos-y-condiciones" },
    { label: "Copyright", href: "/institucional/copyright" }
  ]

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Cursos", href: "/cursos" },
    { label: "Galería", href: "/galeria" },
    { label: "Cámaras", href: "/camaras" },
    { label: "Contacto", href: "/contacto" }
  ]

  const redesSociales = [
    { icon: "mdi:instagram", href: "https://www.instagram.com/fotearte", label: "Instagram" },
    { icon: "mdi:twitter", href: "https://x.com/foteARTE", label: "X" },
    { icon: "mdi:facebook", href: "https://www.facebook.com/Fotearte", label: "Facebook" },
    { icon: "mdi:whatsapp", href: "https://wa.me/595973497799", label: "WhatsApp" }
  ]

  return (
    <footer className="w-full">
      {/* Sección principal */}
      <div className="bg-white px-6 py-12 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row  justify-between gap-6">
          
          {/* Logo y descripción */}
          <div className="w-full md:max-w-md lg:max-w-lg flex flex-col gap-4">
            <Image 
              src={Logo} 
              alt="FoteArte Paraguay"
              className="mb-2 w-[160px] md:w-[250px]"
            />
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
              Más que una escuela de fotografía: Un espacio donde tu creatividad florece. 
              Cursos dinámicos y una comunidad apasionada, ¡Haz clic y únete hoy mismo!
            </p>
          </div>

          <div className='flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20'>
            {/* Ubicaciones */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-gray-900 text-base md:text-lg">Ubicaciones</h3>
              <ul className="flex flex-col gap-2">
                {ubicaciones.map((ubicacion, index) => (
                  <li key={index}>
                    <span className="text-gray-700 text-xs md:text-sm">
                      {ubicacion}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Institucional */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-gray-900 text-base md:text-lg">Institucional</h3>
              <ul className="flex flex-col gap-2">
                {institucional.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href}
                      className="text-gray-700 text-xs md:text-sm hover:text-gray-500 transform transition-all"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Menú */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-gray-900 text-base md:text-lg">Menú</h3>
              <ul className="flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href}
                      className="text-gray-700 text-xs md:text-sm hover:text-gray-500 transition-colors"
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