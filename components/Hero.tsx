import React from 'react'
import { FaArrowDown, FaFacebookF, FaInstagram, FaPlay, FaTwitter } from 'react-icons/fa'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

export default function Hero() {
  return (
  <section className="w-[98%] mx-auto h-[95vh] flex flex-col md:flex-row items-center justify-between 
                        bg-radial-[at_50%_75%] from-lime-300 via-green-800 to-zinc-950 to-90% text-white p-8 relative overflow-hidden 
                        rounded-3xl shadow-xl">
      {/* Texto a la izquierda */}
      <div className="w-full md:w-[40%] flex flex-col justify-center gap-3">
        <h1 className="text-4xl md:text-8xl font-extrabold leading-tight">
          Desafía Tus Propios Límites
        </h1>
        <p className="text-lg md:text-xl max-w-md">
          Mejora tu vida con entrenamientos funcionales y personalizados.
        </p>
        
        {/* Botones principales */}
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-lime-400 hover:bg-lime-600/95 text-zinc-900 px-6 py-3 rounded-full font-semibold transition flex items-center">
            Unirse Ahora
            <MdKeyboardDoubleArrowRight className="text-xl" />
          </button>
          <div className="flex items-center gap-3">
            {/* Botón de Play solo ícono */}
            <button className="bg-lime-400 hover:bg-lime-600/95 text-zinc-900 p-4 rounded-full font-semibold transition flex items-center justify-center">
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
        <div className="flex flex-wrap gap-3 mt-6">
          {["Funcional", "Cardio", "Musculacion", "Personal Training", "Nutrición", 'CrossFit', 'Estiramiento', 'Pilates', 'Fuerza'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 border border-white rounded-full text-sm uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Imagen a la derecha */}
      <div className="w-full md:w-[60%] h-full flex justify-center items-center">
        <img
          src="/images/3.png"
          alt="Hero"
          className="h-[110%] w-auto object-contain"
        />
      </div>

      {/* Botón scroll-down */}
      <button className="absolute bottom-6 left-6 animate-bounce p-3 rounded-full border border-white text-white hover:bg-white/20 transition">
        <FaArrowDown size={20} />
      </button>
    
     
    </section>
  )
}
