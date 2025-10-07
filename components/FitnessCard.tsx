"use client";

import { useState } from "react";
import { FaClock, FaUserFriends } from "react-icons/fa";

interface FitnessCardProps {
  card: {
    id: number;
    title: string;
    description: string;
    image: string;
    duration: string;
    capacity: string;
    instructor: string;
  };
}

export const FitnessCard = ({ card }: FitnessCardProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
     <div className="relative w-full max-w-md mx-auto h-96 rounded-xl overflow-hidden shadow-lg ">
        {/* Imagen de fondo */}
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Nombre del coach arriba derecha */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-semibold text-white bg-black/50">
          {card.instructor}
        </div>

        {/* Contenido inferior centrado */}
        <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white text-center">
          <h3 className="text-3xl font-bold mb-2">{card.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{card.description}</p>
          <button
            onClick={() => setOpenModal(true)}
            className="w-full bg-lime-50 hover:bg-lime-100 text-lime-900 inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
          >
            Ver más
          </button>
        </div>
      </div>



      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-zinc-900 rounded-xl p-6 max-w-md w-full text-white relative">
            {/* Botón de cerrar */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-lime-400 hover:text-lime-200 text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
            <p className="mb-4">{card.description}</p>

            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <FaClock className="text-lime-300" />
                <span>Duración: {card.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserFriends className="text-lime-300" />
                <span>Capacidad: {card.capacity}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
