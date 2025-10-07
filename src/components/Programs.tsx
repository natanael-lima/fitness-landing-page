"use client";

import { GiMuscleUp, GiRunningShoe, GiJumpingRope } from "react-icons/gi";
import { FaFire, FaUserTie } from "react-icons/fa";

export default function Programs() {
  return (
    <section id="programs" className="w-full mx-auto py-20 text-white relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-between ">
      <div className="w-full md:max-w-[80%] mx-auto px-4 sm:px-2 lg:px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-lime-300">NUESTROS PROGRAMAS</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Diseñados para transformar tu cuerpo y mente, adaptados a cada nivel y objetivo.
          </p>
        </div>

        {/* Grid responsive */}
        <div
          className="
            grid grid-cols-1 gap-6 auto-rows-[250px]
            sm:grid-cols-2
            md:grid-cols-7 md:grid-rows-5
            md:auto-rows-[120px]
          "
        >
          {/* Card 1 */}
          <div className="relative rounded-3xl p-6 overflow-hidden backdrop-blur-md border bg-lime-100/5 border-white/10 hover:border-lime-100/15 hover:bg-lime-100/10 hover:scale-105 transition-all duration-500 
            md:col-span-2 md:row-span-3">
            <div className="flex flex-col h-full justify-between text-center md:text-left">
              <GiRunningShoe className="text-[8rem] text-lime-200 opacity-20 mx-auto mb-4" />
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-1">Inicio</h3>
                <p className="text-lime-50/60 text-sm leading-relaxed">
                  Programa diseñado para quienes comienzan en el fitness, enfocado en técnica y progreso constante.
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <button className="px-4 py-3 bg-lime-300/20 text-lime-200 hover:bg-lime-300/30 rounded-lg text-sm font-medium transition-all duration-300">
                  Ver precio
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-3xl p-6 overflow-hidden backdrop-blur-md border bg-lime-100/5 border-white/10 hover:border-lime-100/15 hover:bg-lime-100/10 hover:scale-105 transition-all duration-500 
            md:col-span-3 md:row-span-5 md:col-start-3">
            <div className="flex flex-col h-full justify-between text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold mb-1">Pérdida de Grasa</h3>
                <p className="text-lime-50/60 text-sm leading-relaxed">
                  Entrenamientos funcionales de alta intensidad para eliminar grasa y tonificar tu cuerpo.
                </p>
              </div>
              <FaFire className="text-[25rem] text-lime-200 opacity-20 mx-auto mt-4" />
              <div className="flex justify-end mt-4">
                <button className="px-4 py-3 bg-lime-300/20 text-lime-200 hover:bg-lime-300/30 rounded-lg text-sm font-medium transition-all duration-300">
                  Ver precios
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-3xl p-6 overflow-hidden backdrop-blur-md border bg-lime-100/5 border-white/10 hover:border-lime-100/15 hover:bg-lime-100/10 hover:scale-105 transition-all duration-500 
            md:col-span-2 md:row-span-2 md:col-start-6">
            <div className="flex flex-col sm:flex-row items-center h-full gap-4">
              <GiMuscleUp className="text-[8rem] sm:text-[11rem] text-lime-200 opacity-20" />
              <div className="flex flex-col justify-center text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-1">Fuerza e Hipertrofia</h3>
                <p className="text-lime-50/60 text-sm leading-relaxed mb-3">
                  Programa estructurado para desarrollar fuerza y volumen con técnicas de sobrecarga progresiva.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <button className="px-4 py-3 bg-lime-300/20 text-lime-200 hover:bg-lime-300/30 rounded-lg text-sm font-medium transition-all duration-300">
                    Ver precios
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative rounded-3xl p-6 overflow-hidden backdrop-blur-md border bg-lime-100/5 border-white/10 hover:border-lime-100/15 hover:bg-lime-100/10 hover:scale-105 transition-all duration-500 
            md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-4">
            <div className="flex flex-col sm:flex-row items-center h-full gap-4">
              <GiJumpingRope className="text-[8rem] text-lime-200 opacity-20" />
              <div className="flex flex-col justify-center text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-1">Preparación Física</h3>
                <p className="text-lime-50/60 text-sm leading-relaxed mb-3">
                  Entrenamientos que mejoran potencia, resistencia y agilidad con planes adaptados a tu disciplina.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <button className="px-4 py-3 bg-lime-300/20 text-lime-200 hover:bg-lime-300/30 rounded-lg text-sm font-medium transition-all duration-300">
                    Ver precios
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative rounded-3xl p-6 overflow-hidden backdrop-blur-md border bg-lime-100/5 border-white/10 hover:border-lime-100/15 hover:bg-lime-100/10 hover:scale-105 transition-all duration-500 
            md:col-span-2 md:row-span-3 md:col-start-6 md:row-start-3">
            <div className="flex flex-col h-full justify-between text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold mb-1">Entrenamiento Personal</h3>
                <p className="text-lime-50/60 text-sm leading-relaxed">
                  Entrenamiento premium personalizado con seguimiento y planificación adaptada a tus objetivos.
                </p>
              </div>
              <FaUserTie className="text-[8rem] text-lime-200 opacity-20 mx-auto mt-4" />
              <div className="flex justify-end mt-4">
                <button className="px-4 py-3 bg-lime-300/20 text-lime-200 hover:bg-lime-300/30 rounded-lg text-sm font-medium transition-all duration-300">
                  Ver precios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
