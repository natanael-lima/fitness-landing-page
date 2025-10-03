import React from 'react'
import { FaArrowDown, FaFacebookF, FaInstagram, FaPlay, FaTwitter } from 'react-icons/fa'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

export default function Hero() {
  return (
      <section className="h-[100vh] w-full flex flex-col md:flex-row items-center justify-center text-white p-8 relative overflow-hidden ">
        <div className="w-full md:max-w-[80%] h-[80vh] grid grid-cols-5 gap-2 px-10 ">
          {/* Columna 60% */}
          <div className="col-span-3 flex items-center justify-center ">
            {/* Texto a la izquierda */}
            <div className="w-full flex flex-col justify-center gap-2">
              <h1 className="text-5xl md:text-8xl font-extrabold leading-tight">
                Desafía Tus Propios Límites
              </h1>
              <p className="text-lg md:text-xl max-w-md">
                Mejora tu vida con entrenamientos funcionales y personalizados.
              </p>
              
              {/* Botones principales */}
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="bg-lime-400 hover:bg-lime-600/95 text-lime-950 px-6 py-3 rounded-full font-semibold transition flex items-center">
                  Unirse Ahora
                  <MdKeyboardDoubleArrowRight className="text-xl" />
                </button>
                <div className="flex items-center gap-3">
                  {/* Botón de Play solo ícono */}
                  <button className="bg-lime-400 hover:bg-lime-600/95 text-lime-950 p-4 rounded-full font-semibold transition flex items-center justify-center">
                    <FaPlay className="text-xl" />
                  </button>

                  {/* Texto al lado, fuera del botón */}
                  <span className="text-base md:text-lg">Ver Video</span>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="flex gap-4 mt-6">
                <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition">
                  <FaInstagram />
                </a>
                <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition">
                  <FaTwitter />
                </a>
              </div>

              {/* Badges estilo píldora */}
              <div className="flex flex-wrap gap-3 mt-5">
                {["Funcional", "Cardio", "Musculacion", "Personal Training", 'CrossFit','Pilates', 'Fuerza'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-2 border border-white/60 text-white/90 rounded-full text-xs uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Columna 40% */}
          <div className="col-span-2 flex items-center justify-center hidden md:block">
            {/* Imagen a la derecha */}
            <div className="h-full flex justify-center items-center">
              <img
                src="/images/1.png"
                alt="Hero"
                className="w-auto object-contain"
              />
            </div>
          </div>
        </div>
        {/* Botón scroll-down */}
      <button className="absolute bottom-6 left-6 animate-bounce p-3 rounded-full border border-white text-white hover:bg-white/20 transition">
        <FaArrowDown size={20} />
      </button>
      </section>
  )
}
