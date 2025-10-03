import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="w-[98%] mx-auto h-[100vh] flex flex-col md:flex-row items-center justify-between 
                      text-white p-8 relative overflow-hidden 
                        rounded-3xl shadow-xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
          <div>
            <h2 className="text-6xl font-bold mb-2">SOBRE NOSOTROS</h2>
            <p className="text-xl text-gray-300 max-w-2xl mb-2">
              Todo lo que necesitas para transformar tu cuerpo y mente
            </p>
          </div>

        {/* Grid Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Celda 1 - Imagen grande */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 md:col-span-2 h-96">
            <Image 
              src="/images/img1.png" 
              alt="Nuestro equipo de entrenadores"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white">Nuestro Equipo</h3>
                <p className="text-gray-200 mt-2">
                  Entrenadores certificados con más de 5 años de experiencia promedio
                </p>
              </div>
            </div>
          </div>

          {/* Celda 2 - Misión */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-red-100 text-red-600 mb-6">
              <FaHeartbeat className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
            <p className="text-gray-600 flex-grow">
              Ayudar a cada miembro a alcanzar su mejor versión a través de programas personalizados, 
              tecnología de punta y un ambiente motivador que inspira superación diaria.
            </p>
            <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition self-start">
              Conoce más
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}