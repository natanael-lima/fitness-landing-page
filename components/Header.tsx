'use client';
import { useState ,useEffect} from 'react';
import { LuAlignLeft } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // cuando bajás más de 20px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-neutral-100/5 backdrop-blur-xl shadow-xl"
          : "bg-transparent"
      }`}>
      <div className="max-w-[80%] mx-auto flex items-center flex-row  justify-between px-0 md:px-8 py-5">
      {/* Logotipo */}
      <div className="text-xl font-bold">
        <a href="#">
          <img
            src="/images/logotipo-gym.png"
            alt="Logo"
            className="h-6 md:h-10 w-auto object-contain"
          />
        </a>
      </div>
      {/* Navegación desktop */}
      <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
        <a href="#" className="hover:text-lime-300 transition font-medium">INICIO</a>
        <a href="#" className="hover:text-lime-300 transition font-medium" >NOSOTROS</a>
        <a href="#" className="hover:text-lime-300 transition font-medium">CLASES</a>
        <a href="#" className="hover:text-lime-300 transition font-medium">PROGRAMAS</a>
        <a href="#" className="hover:text-lime-300 transition font-medium">PRECIOS</a>
        <a href="#" className="hover:text-lime-300 transition font-medium">CONTACTO</a>
      </nav>

      {/* Botón Desktop */}
      <button className="hidden md:block bg-lime-300 hover:bg-lime-400/95 text-lime-950 px-4 py-2 rounded-4xl transition font-medium">
        ENVIAR WHATSAPP
      </button>

      {/* Botón Hamburguesa para móviles */}
      <button className="md:hidden text-3xl text-white"
              onClick={() => setMenuOpen(true)}>
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
      </div>
    </header>
    
  );
}
