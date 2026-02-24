import React from 'react'
import Image from 'next/image'
import Logo from "../../public/logo.svg";


const Header = () => {
  return (
    <header className='bg-black px-20 py-6 font-light text-white'>
      <nav className="w-full flex justify-between items-center">
        <div className='cursor-pointer'>
          <Image src={Logo} alt="logo" width={180} />
        </div>
        <ul className="flex items-center gap-8 text-sm">
          <li>
            <a href="#" className="hover:text-gray-300 transition-all duration-300">Cursos</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-all duration-300">Camaras</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-all duration-300">Galería</a>
          </li>
          <li>
            <button className=" bg-orange-600 px-6 py-3 rounded-full cursor-pointer">Contacto</button>
          </li>
        </ul>
      </nav>  
    </header>
  )
}

export default Header