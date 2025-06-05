import React from 'react'
interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
   <header className="fixed top-10 left-14 right-14 z-50 flex justify-between items-center px-10 py-3 bg-white/70 dark:bg-zinc-600/15 backdrop-blur rounded-4xl shadow-md">
      {/* Logotipo */}
      <div className="text-xl font-bold text-green-600 dark:text-red-300">
        <a href="#"> <img
          src="/images/logotipo-gym.png"
          alt="Logo"
          className="h-8 w-auto object-contain"
        /></a>
      </div>

      {/* Navegación */}
      <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 ">
        <a href="#" className="hover:text-pink-500 transition">Inicio</a>
        <a href="#" className="hover:text-pink-500 transition">Precios</a>
        <a href="#" className="hover:text-pink-500 transition">Contacto</a>
        <a href="#" className="hover:text-pink-500 transition">Servicios</a>
        <a href="#" className="hover:text-pink-500 transition">About Us</a>
      </nav>

      {/* Botón de tema */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-xl transition"
      >
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </header>

  );
}
