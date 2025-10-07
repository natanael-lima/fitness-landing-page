import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="w-full mx-auto flex flex-col md:flex-row items-center justify-between text-white p-8 relative overflow-hidden h-[100vh]">
  <div className="w-full md:max-w-[80%] mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4 text-lime-300">SOBRE NOSOTROS</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
         Todo lo que necesitas para transformar tu cuerpo y mente.
      </p>
    </div>

    {/* Contenido principal */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Columna de texto */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-white">
          Comprometidos con tu bienestar físico y mental
        </h3>
        <p className="text-gray-300 leading-relaxed">
          En nuestro centro de danza y fitness, fusionamos movimiento, música y motivación
          para crear una experiencia única. Nuestros instructores te guiarán paso a paso,
          ayudándote a alcanzar tus metas mientras disfrutas cada momento del proceso.
        </p>
        <p className="text-gray-400">
          Ya sea que busques tonificar, relajarte o simplemente divertirte, encontrarás una
          comunidad apasionada lista para impulsarte a tu mejor versión.
        </p>

        <button className="mt-4 px-6 py-3 bg-lime-400/20 text-lime-300 font-semibold rounded-lg border border-lime-300/40 hover:bg-lime-400/30 transition-all duration-300">
          Conocé nuestras clases
        </button>
      </div>

      {/* Columna de imágenes */}
      <div className="relative flex justify-center">
        {/* Imagen principal */}
        <div className="w-80 h-96 overflow-hidden shadow-2xl">
         <Image 
              src="/images/img1.png" 
              alt="Nuestro equipo de entrenadores"
              fill
              className="w-full h-full object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>

        {/* Imagen superpuesta */}
        <div className="absolute bottom-0 -left-10 w-48 h-60 rounded-lg overflow-hidden shadow-xl ">
          <img
            src="/images/2.png"
            alt="Clase de danza"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  );
}