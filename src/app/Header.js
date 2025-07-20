"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/Logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between bg-[#101010] mx-auto px-4 md:px-12 md:py-4 text-white relative">
      {/* Logo */}
      <div>
        <Image src={Logo} alt="Logo" width={70} height={40} priority className="h-auto w-20 md:w-28" />
      </div>

      {/* Links - visíveis em telas médias e grandes */}
      <nav className="hidden md:flex items-center space-x-6 text-xl">
        {/* TEXTOS */}
        <a
          href="#services"
          className="relative text-gray-200 hover:text-transparent hover:bg-gradient-to-r hover:from-[#7969C8] hover:via-[#BC4BC4] hover:to-[#FF2CC0] hover:bg-clip-text transition duration-300"
        >
          Services
        </a>
        <a
          href="#projects"
          className="relative text-gray-200 hover:text-transparent hover:bg-gradient-to-r hover:from-[#7969C8] hover:via-[#BC4BC4] hover:to-[#FF2CC0] hover:bg-clip-text transition duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="relative text-gray-200 hover:text-transparent hover:bg-gradient-to-r hover:from-[#7969C8] hover:via-[#BC4BC4] hover:to-[#FF2CC0] hover:bg-clip-text transition duration-300"
        >
          Contact
        </a>

        <span>|</span>

        {/* ICONES */}
        <a
          target="_blank"
          href="https://www.instagram.com/fluxon.digital?igsh=MXR1cmptYTRsamFndA%3D%3D&utm_source=qr"
          className="relative text-gray-200 text-xl hover:text-transparent hover:bg-gradient-to-r hover:from-[#7969C8] hover:via-[#BC4BC4] hover:to-[#FF2CC0] hover:bg-clip-text transition duration-300"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          target="_blank"
          href="https://wa.me/5551986526016"
          className="relative text-gray-200 text-xl hover:text-transparent hover:bg-gradient-to-r hover:from-[#7969C8] hover:via-[#BC4BC4] hover:to-[#FF2CC0] hover:bg-clip-text transition duration-300"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          target="_blank"
          href="#"
          className="relative text-gray-200 text-xl hover:text-transparent hover:bg-gradient-to-r hover:from-[#7969C8] hover:via-[#BC4BC4] hover:to-[#FF2CC0] hover:bg-clip-text transition duration-300"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </nav>

      {/* Botão Menu - visível apenas no mobile */}
      <button onClick={toggleMenu} className="text-2xl focus:outline-none md:hidden">
        <FaBars />
      </button>

      {/* Overlay escuro */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-60 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Menu Lateral (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-48 bg-[#463a7e] text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-4 p-4">
          <li className="hover:bg-gray-700 p-2 rounded">Services</li>
          <li className="hover:bg-gray-700 p-2 rounded">Projects</li>
          <li className="hover:bg-gray-700 p-2 rounded">Contact</li>
        </ul>
      </div>
    </div>
  );
}
