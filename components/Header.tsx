'use client';
import { useState } from 'react';
import { LuAlignLeft } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-10 left-14 right-14 z-50 flex justify-between items-center px-6 md:px-10 py-3 bg-zinc-300/5 backdrop-blur rounded-4xl shadow-md">
      {/* Logotipo */}
      <div className="text-xl font-bold">
        <a href="#">
          <img
            src="/images/logotipo-gym.png"
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </a>
      </div>

      {/* Navegación desktop */}
      <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
        <a href="#" className="hover:text-lime-500 transition">Inicio</a>
        <a href="#" className="hover:text-lime-500 transition">Nosotros</a>
        <a href="#" className="hover:text-lime-500 transition">Servicios</a>
        <a href="#" className="hover:text-lime-500 transition">Precios</a>
        <a href="#" className="hover:text-lime-500 transition">Contacto</a>
      </nav>

      {/* Botón Desktop */}
      <button className="hidden md:block bg-lime-400 hover:bg-lime-600/95 text-lime-950 px-4 py-2 rounded-4xl transition font-medium">
        Mensaje Directo
      </button>

      {/* Botón Hamburguesa para móviles */}
      <button
        className="md:hidden text-3xl text-lime-500"
        onClick={() => setMenuOpen(true)}
      >
        <LuAlignLeft />
      </button>

      {/* Menú lateral móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-900 text-white flex flex-col items-start px-6 py-6 animate-slide-in">
          {/* Botón cerrar */}
          <button
            className="self-end text-3xl text-lime-400 mb-6"
            onClick={() => setMenuOpen(false)}
          >
            <IoClose />
          </button>

          {/* Navegación móvil */}
          <nav className="flex flex-col gap-6 text-lg w-full">
            <a
              href="#"
              className="hover:text-lime-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#"
              className="hover:text-lime-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Nosotros
            </a>
            <a
              href="#"
              className="hover:text-lime-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#"
              className="hover:text-lime-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Precios
            </a>
            <a
              href="#"
              className="hover:text-lime-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </a>

            <button
              onClick={() => setMenuOpen(false)}
              className="mt-6 bg-lime-400 hover:bg-lime-600/95 text-lime-950 px-4 py-2 rounded-4xl font-medium transition w-full"
            >
              Mensaje Directo
            </button>
          </nav>
        </div>
      )}
      </header>
  );
}
